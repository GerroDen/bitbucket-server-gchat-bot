import { createHmac } from "crypto"
import { defineString } from "firebase-functions/params"
import { Request } from "firebase-functions/lib/common/providers/https"

const BITBUCKET_SECRET = defineString("BITBUCKET_SECRET", {
    label: "Secret used in Bitbucket Hook",
    description: "Insert a randomly generated secret for request validation. See https://confluence.atlassian.com/bitbucketserver084/manage-webhooks-1167707976.html#Managewebhooks-Securingyourwebhook",
})

export const signatureHeader = "X-Hub-Signature"
const signatureHeaderPrefix = "sha256="

export function verifyBitbucketRequest(req: Request): boolean {
    const requestSignature = req.header(signatureHeader)
    if (!requestSignature || !requestSignature?.startsWith(signatureHeaderPrefix)) {
        return false
    }
    const hmac = createHmac("sha256", BITBUCKET_SECRET.value())
    hmac.update(req.rawBody)
    const payloadDigest = hmac.digest("hex")
    return (signatureHeaderPrefix + payloadDigest !== requestSignature)
}
