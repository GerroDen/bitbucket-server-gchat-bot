import {createHmac} from "crypto"
import {Request} from "firebase-functions/v2/https"
import {bitbucketSecret} from "@/config"

export const signatureHeader = "X-Hub-Signature"
const signatureHeaderPrefix = "sha256="

export function verifyBitbucketRequest(req: Request): boolean {
    const requestSignature = req.header(signatureHeader)?.trim()
    if (!requestSignature || !requestSignature?.startsWith(signatureHeaderPrefix)) {
        return false
    }
    const hmac = createHmac("sha256", bitbucketSecret.value())
    hmac.update(req.rawBody)
    const payloadDigest = hmac.digest("hex").trim()
    return (signatureHeaderPrefix + payloadDigest === requestSignature)
}
