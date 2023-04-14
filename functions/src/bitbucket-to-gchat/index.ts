import { region } from "firebase-functions"
import * as config from "@/config"
import { bitbucketSecret } from "@/config"
import {
    signatureHeader,
    verifyBitbucketRequest,
} from "@/bitbucket-to-gchat/verify-bitbucket-request"
import { BitbucketEvent } from "@/bitbucket-to-gchat/events/bitbucket-events"
import { bitbucketEventSchema } from "@/bitbucket-to-gchat/events/bitbucket-events-schema"
import {
    createOrUpdateMessage,
    deleteMessage,
} from "@/bitbucket-to-gchat/pull-request-messages"

export const bitbucketToGChat = region(config.region).runWith({ secrets: [bitbucketSecret] }).https.onRequest(async (req, res): Promise<void> => {
    console.debug(`received event from Bitbucket`)
    if ("test" in req.body) {
        // only tests availability from the endpoint
        res.send()
        return
    }
    if (!verifyBitbucketRequest(req)) {
        console.debug(`invalid signature: "${req.header(signatureHeader)}"`)
        res.sendStatus(403)
        return
    }
    const parseResult = bitbucketEventSchema.safeParse(req.body)
    if (!parseResult.success) {
        console.debug(`invalid body`, parseResult.error)
        res.status(400)
        res.send(parseResult.error)
        return
    }
    const event: BitbucketEvent = parseResult.data
    const prId = event.pullRequest.id
    if (event.pullRequest.reviewers.length === 0) {
        await deleteMessage(event)
        console.debug(`PR #${prId} is not public for review yet`)
        return
    }
    if (event.eventKey === "pr:deleted") {
        await deleteMessage(event)
        console.debug(`PR #${prId} was deleted and removed message`)
        return
    }
    await createOrUpdateMessage(event)
    res.send()
})
