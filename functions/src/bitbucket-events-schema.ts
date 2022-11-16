// Generated by ts-to-zod
import { z } from "zod";

export const bitbucketUserTypeSchema = z.union([
  z.literal("NORMAL"),
  z.string(),
]);

export const bitbucketUserSchema = z.object({
  name: z.string(),
  emailAddress: z.string(),
  id: z.number(),
  displayName: z.string(),
  active: z.boolean(),
  slug: z.string(),
  type: bitbucketUserTypeSchema,
});

export const baseProjectSchema = z.object({
  key: z.string(),
  id: z.number(),
  name: z.string(),
  type: z.string(),
});

export const personalProjectSchema = baseProjectSchema.extend({
  type: z.literal("PERSONAL"),
  owner: bitbucketUserSchema,
});

export const normalProjectSchema = baseProjectSchema.extend({
  type: z.literal("NORMAL"),
});

export const projectSchema = z.union([
  personalProjectSchema,
  normalProjectSchema,
]);

const repositorySchema = z.object({
  slug: z.string(),
  id: z.number(),
  name: z.string(),
  scmId: z.string(),
  state: z.string(),
  statusMessage: z.string(),
  forkable: z.boolean(),
  project: projectSchema,
  public: z.boolean(),
});

export const gitRefSchema = z.object({
  id: z.string(),
  displayId: z.string(),
  latestCommit: z.string(),
  repository: repositorySchema,
});

export const approvalStateSchema = z.union([
  z.literal("APPROVED"),
  z.literal("UNAPPROVED"),
  z.literal("NEEDS_WORK"),
  z.string(),
]);

export const participantRoleSchema = z.union([
  z.literal("AUTHOR"),
  z.literal("REVIEWER"),
  z.string(),
]);

export const participantSchema = z.object({
  user: bitbucketUserSchema,
  role: participantRoleSchema,
  approved: z.boolean(),
  status: approvalStateSchema,
});

export const pullRequestStateSchema = z.union([
  z.literal("MERGED"),
  z.literal("OPEN"),
  z.literal("DECLINED"),
  z.string(),
]);

export const pullRequestSchema = z.object({
  id: z.number(),
  version: z.number(),
  title: z.string(),
  description: z.string(),
  state: pullRequestStateSchema,
  open: z.boolean(),
  closed: z.boolean(),
  createdDate: z.number(),
  updatedDate: z.number(),
  fromRef: gitRefSchema,
  toRef: gitRefSchema,
  locked: z.literal(false),
  author: participantSchema,
  reviewers: z.array(participantSchema),
  participants: z.array(bitbucketUserSchema),
});

export const mergeTargetSchema = z.object({
  id: z.string(),
  displayId: z.string(),
  type: z.string(),
  latestCommit: z.string(),
  latestChangeset: z.string(),
});

export const textEventSchema = z.object({
  test: z.literal(true),
});

export const basePullRequestEventSchema = z.object({
  eventKey: z.string(),
  date: z.string(),
  actor: bitbucketUserSchema,
  pullRequest: pullRequestSchema,
});

export const pullRequestModifiedEventSchema = basePullRequestEventSchema.extend(
  {
    eventKey: z.literal("pr:modified"),
    previousTitle: z.string(),
    previousDescription: z.string(),
    previousTarget: mergeTargetSchema,
  }
);

export const pullRequestReviewersUpdatedEventSchema = basePullRequestEventSchema.extend(
  {
    eventKey: z.literal("pr:reviewer:updated"),
    addedReviewers: z.array(bitbucketUserSchema),
    removedReviewers: z.array(bitbucketUserSchema),
  }
);

export const pullRequestApprovalEventSchema = basePullRequestEventSchema.extend(
  {
    eventKey: z.union([
      z.literal("pr:reviewer:approved"),
      z.literal("pr:reviewer:unapproved"),
      z.literal("pr:reviewer:needs_work"),
    ]),
    participant: participantSchema,
    previousStatus: approvalStateSchema,
  }
);

export const pullRequestMergedEventSchema = basePullRequestEventSchema.extend({
  eventKey: z.literal("pr:merged"),
  pullRequest: pullRequestSchema.and(
    z.object({
      properties: z.object({
        mergeCommit: z.object({
          displayId: z.string(),
          id: z.string(),
        }),
      }),
    })
  ),
});

export const pullRequestDeletedEventSchema = basePullRequestEventSchema.extend({
  eventKey: z.literal("pr:deleted"),
});

export const pullRequestEventSchema = z.union([
  pullRequestApprovalEventSchema,
  pullRequestDeletedEventSchema,
  pullRequestMergedEventSchema,
  pullRequestReviewersUpdatedEventSchema,
  pullRequestModifiedEventSchema,
]);

export const bitbucketEventSchema = z.union([
  textEventSchema,
  pullRequestEventSchema,
]);
