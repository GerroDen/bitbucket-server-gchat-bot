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
import { chat_v1 } from "@googleapis/chat"
import { verifyGChatBearerToken } from "./verify-gchat-bearer-token"
import { addRepositoryDataIfMissing } from "./store"
import {
    added,
    help,
    missingArguments,
    missingSpaceName,
    unknownCommand,
} from "./chat-replies"
import {
    addCommandArgsSplit,
    commandPattern,
} from "./chat-commands"

initializeApp()

export const bitbucketToGChat = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    console.debug(`received event from Bitbucket`)
    if ("test" in req.body) {
        // only tests availability from the endpoint
        res.send()
        return
    }
    if (!verifyBitbucketRequest(req)) {
        console.debug(`invalid signature: ${req.header(signatureHeader)}`)
        res.sendStatus(403)
        return
    }
    const event: BitbucketEvent = bitbucketEventSchema.parse(req.body)
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

export const gchatBot = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    const tokenVerified = await verifyGChatBearerToken(req)
    if (!tokenVerified) {
        res.sendStatus(401)
        return
    }
    const chatEvent = req.body as chat_v1.Schema$DeprecatedEvent
    console.debug(`received message type ${chatEvent.type}`)
    if (chatEvent.type === "MESSAGE") {
        const commandMatch = commandPattern.exec(chatEvent.message?.text ?? "")
        if (commandMatch) {
            const [, , command, argsString] = commandMatch
            if (command === "/add") {
                const { projectKey, repositorySlug } = addCommandArgsSplit(argsString)
                if (!projectKey || !repositorySlug) {
                    console.debug(`/add: missing projectKey or repositorySlug in "${argsString}"`)
                    res.send(missingArguments(command))
                    return
                }
                const spaceName = chatEvent.space?.name
                if (!spaceName) {
                    console.warn("/add: missing space name in event")
                    res.send(missingSpaceName())
                    return
                }
                await addRepositoryDataIfMissing({ projectKey, repositorySlug, spaceName })
                res.send(added({ projectKey, repositorySlug }))
                return
            }
            res.send(unknownCommand(command))
            return
        }
    }
    res.send(help())
})
