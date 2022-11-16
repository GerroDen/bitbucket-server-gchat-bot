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

const spaceId = "AAAAM8DCe1U"

export const bitbucketToGChat = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    if (verifyBitbucketRequest(req)) {
        console.debug(`invalid signature: ${req.header(signatureHeader)}`)
        res.sendStatus(403)
        return
    }
    try {
        const event: BitbucketEvent = bitbucketEventSchema.parse(req.body)
        if ("test" in event) {
            // only tests availability from the endpoint
            res.send()
            return
        }
        const reply: chat_v1.Schema$Message = {
            text: "Hello from Firebase!",
        }
        const chat = google.chat("v1")
        await chat.spaces.messages.create({ parent: `spaces/${spaceId}`, requestBody: reply })
        res.send()
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
})
