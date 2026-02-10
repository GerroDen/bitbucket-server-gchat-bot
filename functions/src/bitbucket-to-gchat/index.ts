import { bitbucketSecret } from "@/config";
import { onRequest } from "firebase-functions/v2/https";
import {
  signatureHeader,
  verifyBitbucketRequest,
} from "@/bitbucket-to-gchat/verify-bitbucket-request";
import { BitbucketEvent } from "@/bitbucket-to-gchat/events/bitbucket-events";
import { bitbucketEventSchema } from "@/bitbucket-to-gchat/events/bitbucket-events-schema";
import { createOrUpdateMessage, deleteMessage } from "@/bitbucket-to-gchat/pull-request-messages";

export const bitbucketToGChat = onRequest(
  { secrets: [bitbucketSecret] },
  async (req, res): Promise<void> => {
    try {
      console.debug(`received event from Bitbucket`);
      if ("test" in req.body) {
        // only tests availability from the endpoint
        res.send();
        return;
      }
      if (!verifyBitbucketRequest(req)) {
        console.debug(`invalid signature: "${req.header(signatureHeader)}"`);
        res.sendStatus(403);
        return;
      }
      const parseResult = bitbucketEventSchema.safeParse(req.body);
      if (!parseResult.success) {
        console.debug(`invalid body`, parseResult.error);
        res.status(400).send(parseResult.error);
        return;
      }
      const event: BitbucketEvent = parseResult.data;
      const prId = event.pullRequest.id;
      if (event.pullRequest.reviewers.length === 0) {
        await deleteMessage(event);
        console.debug(`PR #${prId} is not public for review yet`);
        return;
      }
      if (event.eventKey === "pr:deleted") {
        await deleteMessage(event);
        console.debug(`PR #${prId} was deleted and removed message`);
        return;
      }
      if (event.pullRequest.draft) {
        await deleteMessage(event);
        console.debug(`PR #${prId} was marked as draft and removed message`);
        return;
      }
      await createOrUpdateMessage(event);
      res.send();
    } catch (e) {
      console.error("unknown error", e);
      res.status(500).send("unknown error");
    }
  },
);
