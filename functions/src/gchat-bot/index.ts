import { region } from "firebase-functions"
import * as config from "@/config"
import { verifyGChatBearerToken } from "@/gchat-bot/verify-gchat-bearer-token"
import { chat_v1 } from "@googleapis/chat"
import {
    addCommandArgsSplit,
    commandPattern,
} from "@/gchat-bot/chat-commands"
import {
    added,
    help,
    missingArguments,
    missingSpaceName,
    unknownCommand,
} from "@/gchat-bot/chat-replies"
import { addRepositoryDataIfMissing } from "@/store"

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
