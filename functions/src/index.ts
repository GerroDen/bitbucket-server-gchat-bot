import { region } from "firebase-functions"
import * as config from "./config"
import {
    chat_v1,
    google,
} from "googleapis"
import { bitbucketEventSchema } from "./bitbucket-events-schema"
import { BitbucketEvent } from "./bitbucket-events"
import {
    signatureHeader,
    verifyBitbucketRequest,
} from "./verify-bitbucket-request"
import { initializeApp } from "firebase-admin/app"

initializeApp()
const spaceId = "AAAAM8DCe1U"

export const bitbucketToGChat = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    if (verifyBitbucketRequest(req)) {
        console.debug(`invalid signature: ${req.header(signatureHeader)}`)
        res.sendStatus(403)
        return
    }
    const event: BitbucketEvent = bitbucketEventSchema.parse(req.body)
    if ("test" in event) {
        // only tests availability from the endpoint
        res.send()
        return
    }
    const prId = event.pullRequest.id
    const reply: chat_v1.Schema$Message = {
        text: `PR #${prId}: ${event.pullRequest.title}`,
    }
    const auth = new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/chat.bot"],
    })
    const authClient = await auth.getClient()
    google.options({ auth: authClient })
    const chat = google.chat("v1")
    const parent = `spaces/${spaceId}`
    const messageId = `client-pr-${prId}`
    const messageName = `${parent}/messages/${messageId}`
    const exists = await chat.spaces.messages.get({ name: messageName }).then(() => true).catch(() => false)
    if (exists) {
        await chat.spaces.messages.update({ name: messageName, requestBody: reply, updateMask: "text" })
        console.debug(`updated message for PR #${prId}`)
    } else {
        await chat.spaces.messages.create({ parent, messageId, requestBody: reply })
        console.debug(`created message for PR #${prId}`)
    }
    res.send()
})
