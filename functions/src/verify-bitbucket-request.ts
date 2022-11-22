import { createHmac } from "crypto"
import { Request } from "firebase-functions/lib/common/providers/https"
import { bitbucketSecret } from "./config"

export const signatureHeader = "X-Hub-Signature"
const signatureHeaderPrefix = "sha256="

export function verifyBitbucketRequest(req: Request): boolean {
    const requestSignature = req.header(signatureHeader)
    if (!requestSignature || !requestSignature?.startsWith(signatureHeaderPrefix)) {
        return false
    }
    const hmac = createHmac("sha256", bitbucketSecret.value())
    hmac.update(req.rawBody)
    const payloadDigest = hmac.digest("hex")
    return (signatureHeaderPrefix + payloadDigest === requestSignature)
}
