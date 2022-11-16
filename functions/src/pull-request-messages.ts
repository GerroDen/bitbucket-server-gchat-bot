import {
    chat_v1,
    google,
} from "googleapis"
import {
    ApprovalState,
    PullRequestEvent,
} from "./bitbucket-events"

interface MessageParams {
    spaceId: string
    event: PullRequestEvent
}

async function createChatClient() {
    const auth = new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/chat.bot"],
    })
    const authClient = await auth.getClient()
    google.options({ auth: authClient })
    return google.chat("v1")
}

export async function deleteMessage({ spaceId, event }: MessageParams) {
    const { prId, messageName } = buildIds({ spaceId, event })
    const chat = await createChatClient()
    try {
        await chat.spaces.messages.delete({ name: messageName })
    } catch (e) {
        console.debug(`no need to delete message for PR #${prId}`)
    }
}

export async function createOrUpdateMessage({ spaceId, event }: MessageParams) {
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

function buildIds({ spaceId, event }: MessageParams) {
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
    APPROVED: "✅",
    NEEDS_WORK: "❌",
    UNAPPROVED: "❔",
}

function buildMessage(event: PullRequestEvent): chat_v1.Schema$Message {
    const prId = event.pullRequest.id
    const approvedCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "APPROVED").length
    const needsWorkCount = event.pullRequest.reviewers.filter(reviewer => reviewer.status === "NEEDS_WORK").length
    const text = event.pullRequest.reviewers.map((reviewer) => `${approveIcons[reviewer.status]} ${reviewer.user.displayName}`).join("<br>")
    const url = `https://bitbucket.apps.seibert-media.net/projects/${event.pullRequest.toRef.repository.project.key}/repos/${event.pullRequest.toRef.repository.slug}/pull-requests/${prId}`
    return {
        cardsV2: [
            {
                cardId: "pr",
                card: {
                    header: {
                        title: `${event.pullRequest.title}`,
                        subtitle: `PR #${prId} | ${approvedCount} ✅ - ${needsWorkCount} ❌ | (${event.pullRequest.state})`,
                    },
                    sections: [
                        {
                            collapsible: true,
                            header: "Reviewers",
                            widgets: [
                                {
                                    decoratedText: {
                                        text,
                                    },
                                },
                            ],
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
