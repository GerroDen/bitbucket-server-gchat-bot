import glob from "fast-glob"
import {
    bitbucketEventSchema,
    bitbucketUserTypeSchema,
    pullRequestApprovalEventSchema,
    pullRequestModifiedEventSchema,
    pullRequestReviewersUpdatedEventSchema,
} from "@/bitbucket-to-gchat/events/bitbucket-events-schema"
import * as path from "path"

describe("bitbucketEventSchema", () => {
    const eventDataFiles = glob.sync("__test-data__/bitbucket-events/*.json", { cwd: __dirname })
    for (const eventDataFile of eventDataFiles) {
        it(`parses ${path.basename(eventDataFile)}`, async () => {
            const eventData = await import("./" + eventDataFile)

            const result = bitbucketEventSchema.parse(eventData)

            expect(eventData).toEqual(expect.objectContaining(result))
        })
    }
})

describe("pullRequestApprovalEventSchema", () => {
    it("parses reviewer approved event", async () => {
        const eventData = await import("../__test-data__/bitbucket-events/pr-reviewer-approved.json")

        const result = pullRequestApprovalEventSchema.parse(eventData)

        expect(eventData).toEqual(expect.objectContaining(result))
    })

    it("parses reviewer needs work event", async () => {
        const eventData = await import("../__test-data__/bitbucket-events/pr-reviewer-needs-work.json")

        const result = pullRequestApprovalEventSchema.parse(eventData)

        expect(eventData).toEqual(expect.objectContaining(result))
    })
})

describe("pullRequestReviewersUpdatedEventSchema", () => {
    it("parses reviewer updated event", async () => {
        const eventData = await import("../__test-data__/bitbucket-events/pr-reviewer-updated.json")

        const result = pullRequestReviewersUpdatedEventSchema.parse(eventData)

        expect(eventData).toEqual(expect.objectContaining(result))
    })
})

describe("pullRequestModifiedEventSchema", () => {
    it("parses pr modified event", async () => {
        const eventData = await import("../__test-data__/bitbucket-events/pr-modified.json")

        const result = pullRequestModifiedEventSchema.parse(eventData)

        expect(eventData).toEqual(expect.objectContaining(result))
    })
})

describe("bitbucketUserTypeSchema", () => {
    it("parses NORMAL", () => {
        const result = bitbucketUserTypeSchema.parse("NORMAL")

        expect(result).toBe("NORMAL")
    })

    it("parses anything", () => {
        const result = bitbucketUserTypeSchema.parse("anything")

        expect(result).toBe("anything")
    })
})
