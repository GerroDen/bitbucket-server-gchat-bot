import { initializeApp } from "firebase-admin/app";
import { setGlobalOptions } from "firebase-functions/v2";
import * as config from "@/config";

setGlobalOptions({ region: config.region });
initializeApp();

export * from "@/bitbucket-to-gchat";
export * from "@/gchat-bot";
