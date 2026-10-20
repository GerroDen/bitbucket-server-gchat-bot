import { initializeApp } from "firebase-admin/app";
import { setGlobalOptions } from "firebase-functions/v2";
import { region } from "@/config";

setGlobalOptions({
  region,
  memory: "512MiB",
  timeoutSeconds: 600,
});
initializeApp();

const { bitbucketToGChat } = await import("@/bitbucket-to-gchat");
const { gchatBot } = await import("@/gchat-bot");

export { bitbucketToGChat, gchatBot };
