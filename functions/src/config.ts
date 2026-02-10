import { defineSecret, defineString, projectID } from "firebase-functions/params"; // Deployment region for functions

// Deployment region for functions
export const region = "europe-west3";
// Bearer Tokens received by bots will always specify this issuer.
export const chatIssuer = "chat@system.gserviceaccount.com";
// Url to obtain the public jwks for the issuer.
export const jwksUri = `https://www.googleapis.com/service_accounts/v1/metadata/jwk/${chatIssuer}`;

/**
 * Base URL to your bitbucket server.
 */
export const bitbucketBaseUrl = defineString("BITBUCKET_BASE_URL", {
  label: "Base URL to your bitbucket server",
});

/**
 * ID of the used firebase project
 */
export const firebaseProjectId = projectID;

/**
 * A secret to verify Bitbucket requests.
 * @see https://confluence.atlassian.com/bitbucketserver084/manage-webhooks-1167707976.html#Managewebhooks-Securingyourwebhook
 */
export const bitbucketSecret = defineSecret("BITBUCKET_SECRET");
