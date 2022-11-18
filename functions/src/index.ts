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
import { ProjectApi } from "./bitbucket-api"
import { z } from "zod"
import { chat_v1 } from "googleapis"
import { verifyGChatBearerToken } from "./verify-gchat-bearer-token"

initializeApp()

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
        await deleteMessage(event)
        console.debug(`PR #${prId} is not public for review yet`)
        return
    }
    if (event.eventKey === "pr:deleted") {
        await deleteMessage(event)
        console.error("deletion not implemented yet")
        return
    }
    await createOrUpdateMessage(event)
    res.send()
})

export const gchatBot = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    const tokenVerified = await verifyGChatBearerToken(req)
    if (!tokenVerified) {
        res.sendStatus(401)
        return
    }
    const chatEvent = req.body as chat_v1.Schema$DeprecatedEvent
    if (chatEvent.type === "ADDED_TO_SPACE") {
        const reply: chat_v1.Schema$Message = {
            text: "Hi, you called me?",
        }
        res.send(reply)
        return
    }
    if (chatEvent.type !== "MESSAGE") {
        res.send()
        return
    }
    const payloadParseResult = registerPayloadSchema.safeParse(chatEvent.message)
    if (!payloadParseResult.success) {
        const reply: chat_v1.Schema$Message = {
            text: "I need a projectKey and repositorySlug",
        }
        res.send(reply)
        return
    }
    const { projectKey, repositorySlug } = payloadParseResult.data
    try {
        const repository = await new ProjectApi().getRepository({ projectKey, repositorySlug })
        const reply: chat_v1.Schema$Message = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            text: `I will now report pull requests from ${repository.project.name}: ${repository.name} here`,
        }
        res.send(reply)
    } catch (e) {
        const reply: chat_v1.Schema$Message = {
            text: `I cannot find an repository ${repositorySlug} within project ${projectKey}`,
        }
        res.send(reply)
    }
})

const registerPayloadSchema = z.object({
    projectKey: z.string(),
    repositorySlug: z.string(),
})
