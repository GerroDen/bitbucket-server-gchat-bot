import JwksClient from "jwks-rsa"
import {
    logger,
    Request,
} from "firebase-functions"
import { verify } from "jsonwebtoken"
import {
    chatIssuer,
    jwksUri,
} from "./config"
import { defineString } from "firebase-functions/lib/params"

const chatbotProjectId = defineString("CHATBOT_PROJECT_ID")
const issuer = chatIssuer
const bearerPrefix = "Bearer "

const jwksClient = JwksClient({ jwksUri })

// @see https://developers.google.com/chat/how-tos/bots-develop
export async function verifyGChatBearerToken(req: Request): Promise<boolean> {
    const authorizationHeader = req.header("Authorization")
    if (!authorizationHeader?.startsWith(bearerPrefix)) {
        return false
    }
    const token = authorizationHeader?.substring(bearerPrefix.length)
    try {
        const key = await jwksClient.getSigningKey(req.header("kid"))
        await verify(token, key.getPublicKey(), {
            audience: chatbotProjectId.value(),
            issuer,
        })
        return true
    } catch (e) {
        logger.error(`invalid bearer token: ${e}`)
        return false
    }
}
