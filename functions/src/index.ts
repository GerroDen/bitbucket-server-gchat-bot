import { region } from "firebase-functions"
import * as config from "./config"
import { bitbucketEventSchema } from "./bitbucket-events-schema"
import { BitbucketEvent } from "./bitbucket-events"
import {
    signatureHeader,
    verifyBitbucketRequest,
} from "./verify-bitbucket-request"
import { initializeApp } from "firebase-admin/app"
import {
    createOrUpdateMessage,
    deleteMessage,
} from "./pull-request-messages"

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
    if (event.pullRequest.reviewers.length === 0) {
        await deleteMessage({ spaceId, event })
        console.debug(`PR #${prId} is not public for review yet`)
        return
    }
    if (event.eventKey === "pr:deleted") {
        await deleteMessage({ spaceId, event })
        console.error("deletion not implemented yet")
        return
    }
    await createOrUpdateMessage({
        event,
        spaceId,
    })
    res.send()
})
