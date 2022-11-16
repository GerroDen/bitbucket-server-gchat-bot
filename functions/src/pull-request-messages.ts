import {
    chat_v1,
    google,
} from "googleapis"

interface CreateOrUpdateMessageParams {
    spaceId: string
    prId: number
    message: chat_v1.Schema$Message
}

export async function createOrUpdateMessage({ spaceId, prId, message }: CreateOrUpdateMessageParams) {
    const parent = `spaces/${spaceId}`
    const messageId = `client-pr-${prId}`
    const messageName = `${parent}/messages/${messageId}`
    const auth = new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/chat.bot"],
    })
    const authClient = await auth.getClient()
    google.options({ auth: authClient })
    const chat = google.chat("v1")
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
