import { region } from "firebase-functions"
import * as config from "./config"
import { chat_v1 } from "googleapis"
import { bitbucketEventSchema } from "./bitbucket-events-schema"
import { BitbucketEvent } from "./bitbucket-events"
import {
    signatureHeader,
    verifyBitbucketRequest,
} from "./verify-bitbucket-request"
import { initializeApp } from "firebase-admin/app"
import { createOrUpdateMessage } from "./pull-request-messages"

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
    const message: chat_v1.Schema$Message = {
        text: `PR #${prId}: ${event.pullRequest.title}`,
    }
    await createOrUpdateMessage({
        prId,
        spaceId,
        message,
    })
    res.send()
})
