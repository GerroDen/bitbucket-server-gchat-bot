// Deployment region for functions
export const region = "europe-west3"
// Bearer Tokens received by bots will always specify this issuer.
export const chatIssuer = "chat@system.gserviceaccount.com"
// Url to obtain the public jwks for the issuer.
export const jwksUri = `https://www.googleapis.com/service_accounts/v1/metadata/jwk/${chatIssuer}`
// Base URL to your bitbucket server
export const bitbucketBaseUrl = "https://bitbucket.apps.seibert-media.net"
// ID of the used firebase project
export const firebaseProjectId = "bitbucket-server-gchat-bot"
// Space ID to send messages to
export const spaceId = "AAAAM8DCe1U"
