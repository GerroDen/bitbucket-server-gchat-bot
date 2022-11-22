import {
    defineSecret,
    defineString,
    projectID,
} from "firebase-functions/params"

// Deployment region for functions
export const region = "europe-west3"
// Bearer Tokens received by bots will always specify this issuer.
export const chatIssuer = "chat@system.gserviceaccount.com"
// Url to obtain the public jwks for the issuer.
export const jwksUri = `https://www.googleapis.com/service_accounts/v1/metadata/jwk/${chatIssuer}`

/**
 * Base URL to your bitbucket server.
 */
export const bitbucketBaseUrl = defineString("BITBUCKET_BASE_URL", {
    label: "Base URL to your bitbucket server",
})

/**
 * ID of the used firebase project
 */
export const firebaseProjectId = projectID

/**
 * The Firebase project ID for token verification of Google chat requests.
 * @see https://developers.google.com/chat/how-tos/apps-develop?hl=en#verify_app_authenticity
 */
export const chatbotProjectId = defineString("CHATBOT_PROJECT_ID", {
    label: "Chatbot project ID",
    description: "The Firebase project ID for token verification of Google chat requests. See https://developers.google.com/chat/how-tos/apps-develop?hl=en#verify_app_authenticity",
})

/**
 * A secret to verify Bitbucket requests.
 * @see https://confluence.atlassian.com/bitbucketserver084/manage-webhooks-1167707976.html#Managewebhooks-Securingyourwebhook
 */
export const bitbucketSecret = defineSecret("BITBUCKET_SECRET")

/**
 * HTTP auth token for REST API
 */
export const bitbucketUser = defineString("BITBUCKET_USER")

/**
 * HTTP auth token for REST API
 */
export const bitbucketToken = defineSecret("BITBUCKET_TOKEN")
