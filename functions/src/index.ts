import { initializeApp } from "firebase-admin/app";
import { setGlobalOptions } from "firebase-functions/v2";
import { region } from "@/config";

setGlobalOptions({ region });
initializeApp();

export * from "@/bitbucket-to-gchat";
export * from "@/gchat-bot";
