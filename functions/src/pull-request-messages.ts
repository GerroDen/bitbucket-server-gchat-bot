import {
    chat_v1,
    google,
} from "googleapis"
import {
    ApprovalState,
    PullRequestEvent,
} from "./bitbucket-events"
import { bitbucketBaseUrl } from "./config"

interface MessageParams {
    spaceId: string
    event: PullRequestEvent
}

async function createChatClient(): Promise<chat_v1.Chat> {
    const auth = new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/chat.bot"],
    })
    const authClient = await auth.getClient()
    google.options({ auth: authClient })
    return google.chat("v1")
}

export async function deleteMessage({ spaceId, event }: MessageParams): Promise<void> {
    const { prId, messageName } = buildIds({ spaceId, event })
    const chat = await createChatClient()
    try {
        await chat.spaces.messages.delete({ name: messageName })
    } catch (e) {
        console.debug(`no need to delete message for PR #${prId}`)
    }
}

export async function createOrUpdateMessage({ spaceId, event }: MessageParams): Promise<void> {
    const { prId, parent, messageId, messageName } = buildIds({ spaceId, event })
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

function buildIds({ spaceId, event }: MessageParams): MessageIds {
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

const approveIcons: Record<ApprovalState, string> = {
    APPROVED: "https://storage.googleapis.com/bitbucket-server-gchat-bot.appspot.com/approved.png",
    NEEDS_WORK: "https://storage.googleapis.com/bitbucket-server-gchat-bot.appspot.com/needswork.png",
    UNAPPROVED: "https://storage.googleapis.com/bitbucket-server-gchat-bot.appspot.com/unapproved.png",
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
                        subtitle: `PR #${prId} | (${event.pullRequest.state})`,
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
