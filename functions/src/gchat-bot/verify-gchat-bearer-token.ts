import JwksClient from "jwks-rsa";
import { Request } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";
import { decode, verify } from "jsonwebtoken";
import { chatbotProjectId, chatIssuer, jwksUri } from "@/config";

const issuer = chatIssuer;
const bearerPrefix = "Bearer ";

const jwksClient = JwksClient({ jwksUri });

/**
 * @see https://developers.google.com/chat/how-tos/apps-develop?hl=en#verify_app_authenticity
 */
export async function verifyGChatBearerToken(req: Request): Promise<boolean> {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader?.startsWith(bearerPrefix)) {
    return false;
  }
  const token = authorizationHeader?.substring(bearerPrefix.length);
  const decodedToken = decode(token, { complete: true });
  if (!decodedToken?.header.kid) {
    console.error("unable to decode KID from JWT header");
    return false;
  }
  try {
    const key = await jwksClient.getSigningKey(decodedToken?.header.kid);
    const publicKey = key.getPublicKey();
    await verify(token, publicKey, {
      audience: chatbotProjectId.value(),
      issuer,
    });
    return true;
  } catch (e) {
    logger.error(`invalid bearer token: ${e}`);
    return false;
  }
}
