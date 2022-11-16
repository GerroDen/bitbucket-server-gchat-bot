import {
    logger,
    region,
} from "firebase-functions"
import * as config from "./config"
import { chat_v1 } from "googleapis/build/src/apis/chat/v1"
import { verifyGChatBearerToken } from "./verify-gchat-bearer-token"

export const googleChatBot = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    const tokenVerified = await verifyGChatBearerToken(req)
    if (!tokenVerified) {
        res.sendStatus(401)
        return
    }
    const body = req.body as chat_v1.Schema$DeprecatedEvent
    logger.log(JSON.stringify(body))
    const reply: chat_v1.Schema$Message = {
        text: "Hello from Firebase!",
    }
    res.send(reply)
})
