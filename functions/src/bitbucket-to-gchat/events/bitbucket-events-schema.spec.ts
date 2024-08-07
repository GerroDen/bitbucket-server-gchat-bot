import glob from "fast-glob";
import {
  bitbucketEventSchema,
  bitbucketUserTypeSchema,
  pullRequestApprovalEventSchema,
  pullRequestModifiedEventSchema,
  pullRequestReviewersUpdatedEventSchema,
} from "@/bitbucket-to-gchat/events/bitbucket-events-schema";
import { basename } from "path";
import { JsonValue } from "type-fest";

describe("bitbucket-events-schema", () => {
  describe("bitbucketEventSchema", () => {
    const eventDataFiles = glob.sync("__test-data__/*.json", {
      cwd: __dirname,
    });
    for (const eventDataFile of eventDataFiles) {
      it(`parses ${basename(eventDataFile)}`, async () => {
        const eventData = (await import("./" + eventDataFile)) as JsonValue;

        const result = bitbucketEventSchema.parse(eventData);

        expect(eventData).toEqual(expect.objectContaining(result));
      });
    }
  });

  describe("pullRequestApprovalEventSchema", () => {
    it("parses reviewer approved event", async () => {
      const eventData = await import(
        "@/bitbucket-to-gchat/events/__test-data__/pr-reviewer-approved.json"
      );

      const result = pullRequestApprovalEventSchema.parse(eventData);

      expect(eventData).toEqual(expect.objectContaining(result));
    });

    it("parses reviewer needs work event", async () => {
      const eventData = await import(
        "@/bitbucket-to-gchat/events/__test-data__/pr-reviewer-needs-work.json"
      );

      const result = pullRequestApprovalEventSchema.parse(eventData);

      expect(eventData).toEqual(expect.objectContaining(result));
    });
  });

  describe("pullRequestReviewersUpdatedEventSchema", () => {
    it("parses reviewer updated event", async () => {
      const eventData = await import(
        "@/bitbucket-to-gchat/events/__test-data__/pr-reviewer-updated.json"
      );

      const result = pullRequestReviewersUpdatedEventSchema.parse(eventData);

      expect(eventData).toEqual(expect.objectContaining(result));
    });
  });

  describe("pullRequestModifiedEventSchema", () => {
    it("parses pr modified event", async () => {
      const eventData = await import(
        "@/bitbucket-to-gchat/events/__test-data__/pr-modified.json"
      );

      const result = pullRequestModifiedEventSchema.parse(eventData);

      expect(eventData).toEqual(expect.objectContaining(result));
    });
  });

  describe("bitbucketUserTypeSchema", () => {
    it("parses NORMAL", () => {
      const result = bitbucketUserTypeSchema.parse("NORMAL");

      expect(result).toBe("NORMAL");
    });

    it("parses anything", () => {
      const result = bitbucketUserTypeSchema.parse("anything");

      expect(result).toBe("anything");
    });
  });
});
