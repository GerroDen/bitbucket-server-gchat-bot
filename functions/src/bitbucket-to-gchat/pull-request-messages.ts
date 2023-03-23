import {
    auth,
    chat,
    chat_v1,
} from "@googleapis/chat"
import {
    ApprovalState,
    PullRequestEvent,
    PullRequestState,
} from "@/bitbucket-to-gchat/events/bitbucket-events"
import {
    bitbucketBaseUrl,
    firebaseProjectId,
} from "@/config"
import { findRepositoryData } from "@/store"

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
    const ids = await buildIds(event)
    if (!ids) {
        console.debug(`Skipping event`)
        return
    }
    const { prId, messageName } = ids
    console.debug(`deleting message for PR #${prId}`)
    const chat = await createChatClient()
    try {
        await chat.spaces.messages.delete({ name: messageName })
        console.debug(`deleted message for PR #${prId}`)
    } catch (e) {
        console.debug(`no need to delete message for PR #${prId}`)
    }
}

export async function createOrUpdateMessage(event: PullRequestEvent): Promise<void> {
    const ids = await buildIds(event)
    if (!ids) {
        console.debug(`Skipping event`)
        return
    }
    const { prId, parent, messageId, messageName } = ids
    console.debug(`creating or updating message for PR #${prId}`)
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

async function buildIds(event: PullRequestEvent): Promise<MessageIds | undefined> {
    const projectKey = event.pullRequest.fromRef.repository.project.key
    const repositorySlug = event.pullRequest.fromRef.repository.slug
    const repositoryData = await findRepositoryData({ projectKey, repositorySlug })
    if (!repositoryData?.spaceName) {
        return undefined
    }
    const prId = event.pullRequest.id
    const parent = repositoryData.spaceName
    const messageId = `client-pr-${event.pullRequest.id}`
    const messageName = `${parent}/messages/${messageId}`
    return {
        prId,
        parent,
        messageId,
        messageName,
    }
}

const approvalIconsPath: Record<ApprovalState, string> = {
    APPROVED: `/review/approved.png`,
    NEEDS_WORK: `/review/needswork.png`,
    UNAPPROVED: `/review/unapproved.png`,
}
const pullRequestIconsPath: Record<PullRequestState, string> = {
    OPEN: `/pull-request/open.png`,
    MERGED: `/pull-request/merged.png`,
    DECLINED: `/pull-request/declined.png`,
}

function buildMessage(event: PullRequestEvent): chat_v1.Schema$Message {
    const prId = event.pullRequest.id
    const approvedCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "APPROVED").length
    const needsWorkCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "NEEDS_WORK").length
    const url = `${bitbucketBaseUrl.value()}/projects/${event.pullRequest.toRef.repository.project.key}/repos/${event.pullRequest.toRef.repository.slug}/pull-requests/${prId}`
    const publicBaseUrl = `https://${firebaseProjectId.value()}.web.app`
    return {
        cardsV2: [
            {
                cardId: "pr",
                card: {
                    header: {
                        title: event.pullRequest.title,
                        subtitle: `PR #${prId}`,
                        imageUrl: publicBaseUrl + pullRequestIconsPath[event.pullRequest.state],
                        imageAltText: event.pullRequest.state,
                    },
                    sections: [
                        {
                            widgets: [
                                {
                                    decoratedText: {
                                        startIcon: {
                                            altText: "approved",
                                            iconUrl: publicBaseUrl + approvalIconsPath.APPROVED,
                                        },
                                        topLabel: "approved",
                                        text: `${approvedCount}`,
                                    },
                                },
                                {
                                    decoratedText: {
                                        startIcon: {
                                            altText: "needs work",
                                            iconUrl: publicBaseUrl + approvalIconsPath.NEEDS_WORK,
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
                                        iconUrl: publicBaseUrl + approvalIconsPath[reviewer.status],
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
