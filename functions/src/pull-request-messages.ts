import {
    auth,
    chat,
    chat_v1,
} from "@googleapis/chat"
import {
    ApprovalState,
    PullRequestEvent,
    PullRequestState,
} from "./bitbucket-events"
import {
    bitbucketBaseUrl,
    firebaseProjectId,
    spaceId,
} from "./config"

async function createChatClient(): Promise<chat_v1.Chat> {
    const googleAuth = new auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/chat.bot"],
    })
    const authClient = await googleAuth.getClient()
    return chat({
        version: "v1",
        auth: authClient,
    })
}

export async function deleteMessage(event: PullRequestEvent): Promise<void> {
    const { prId, messageName } = buildIds(event)
    const chat = await createChatClient()
    try {
        await chat.spaces.messages.delete({ name: messageName })
    } catch (e) {
        console.debug(`no need to delete message for PR #${prId}`)
    }
}

export async function createOrUpdateMessage(event: PullRequestEvent): Promise<void> {
    const { prId, parent, messageId, messageName } = buildIds(event)
    const message = buildMessage(event)
    const chat = await createChatClient()
    const exists = await chat.spaces.messages.get({ name: messageName }).then(() => true).catch(() => false)
    if (exists) {
        const updateMask = ("cardsV2" in message) ? "cardsV2" : "text"
        await chat.spaces.messages.update({ name: messageName, requestBody: message, updateMask })
        console.debug(`updated message for PR #${prId}`)
    } else {
        await chat.spaces.messages.create({ parent, messageId, requestBody: message })
        console.debug(`created message for PR #${prId}`)
    }
}

interface MessageIds {
    prId: number;
    parent: string;
    messageId: string
    messageName: string;
}

function buildIds(event: PullRequestEvent): MessageIds {
    const prId = event.pullRequest.id
    const parent = `spaces/${spaceId}`
    const messageId = `client-pr-${event.pullRequest.id}`
    const messageName = `${parent}/messages/${messageId}`
    return {
        prId,
        parent,
        messageId,
        messageName,
    }
}

const publicBaseUrl = `https://${firebaseProjectId}.web.app`
const approveIcons: Record<ApprovalState, string> = {
    APPROVED: `${publicBaseUrl}/review/approved.png`,
    NEEDS_WORK: `${publicBaseUrl}/review/needswork.png`,
    UNAPPROVED: `${publicBaseUrl}/review/unapproved.png`,
}
const pullRequestIcons: Record<PullRequestState, string> = {
    OPEN: `${publicBaseUrl}/pull-request/open.png`,
    MERGED: `${publicBaseUrl}/pull-request/merged.png`,
    DECLINED: `${publicBaseUrl}/pull-request/declined.png`,
}

function buildMessage(event: PullRequestEvent): chat_v1.Schema$Message {
    const prId = event.pullRequest.id
    const approvedCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "APPROVED").length
    const needsWorkCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "NEEDS_WORK").length
    const url = `${bitbucketBaseUrl}/projects/${event.pullRequest.toRef.repository.project.key}/repos/${event.pullRequest.toRef.repository.slug}/pull-requests/${prId}`
    return {
        cardsV2: [
            {
                cardId: "pr",
                card: {
                    header: {
                        title: event.pullRequest.title,
                        subtitle: `PR #${prId}`,
                        imageUrl: pullRequestIcons[event.pullRequest.state],
                        imageAltText: event.pullRequest.state,
                    },
                    sections: [
                        {
                            widgets: [
                                {
                                    decoratedText: {
                                        startIcon: {
                                            altText: "approved",
                                            iconUrl: approveIcons.APPROVED,
                                        },
                                        topLabel: "approved",
                                        text: `${approvedCount}`,
                                    },
                                },
                                {
                                    decoratedText: {
                                        startIcon: {
                                            altText: "needs work",
                                            iconUrl: approveIcons.NEEDS_WORK,
                                        },
                                        topLabel: "needs work",
                                        text: `${needsWorkCount}`,
                                    },
                                },
                            ],
                        },
                        {
                            collapsible: true,
                            header: "Reviewers",
                            widgets: event.pullRequest.reviewers.map((reviewer) => ({
                                decoratedText: {
                                    startIcon: {
                                        iconUrl: approveIcons[reviewer.status],
                                    },
                                    text: reviewer.user.displayName,
                                },
                            })),
                        },
                        {
                            widgets: [
                                {
                                    buttonList: {
                                        buttons: [
                                            {
                                                text: "To PR",
                                                onClick: {
                                                    openLink: {
                                                        url,
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    }
}
