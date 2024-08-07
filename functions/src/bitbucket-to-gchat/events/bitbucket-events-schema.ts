// Generated by ts-to-zod
import { z } from "zod";

export const bitbucketUserTypeSchema = z.union([
  z.literal("NORMAL"),
  z.literal("SERVICE"),
  z.string(),
]);

const linkEntrySchema = z.record(z.string()).nullable();

export const refTypeSchema = z.union([z.literal("BRANCH"), z.string()]);

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

export const pullRequestStateSchema = z.union([
  z.literal("MERGED"),
  z.literal("OPEN"),
  z.literal("DECLINED"),
  z.string(),
]);

export const mergeTargetSchema = z.object({
  id: z.string(),
  displayId: z.string(),
  type: z.string(),
  latestCommit: z.string(),
  latestChangeset: z.string(),
});

export const linksSchema = z.record(z.array(linkEntrySchema));

export const baseProjectSchema = z.object({
  key: z.string(),
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  type: z.string().optional(),
  public: z.boolean(),
  links: linksSchema.optional(),
});

export const normalProjectSchema = baseProjectSchema.extend({
  type: z.literal("NORMAL"),
});

export const bitbucketUserSchema = z.object({
  name: z.string(),
  emailAddress: z.string().nullable(),
  id: z.number(),
  displayName: z.string(),
  active: z.boolean(),
  slug: z.string(),
  type: bitbucketUserTypeSchema,
  links: linksSchema.optional(),
});

export const personalProjectSchema = baseProjectSchema.extend({
  type: z.literal("PERSONAL"),
  owner: bitbucketUserSchema,
});

export const projectSchema = z.union([
  personalProjectSchema,
  normalProjectSchema,
]);

const repositorySchema = z.object({
  slug: z.string(),
  id: z.number(),
  hierarchyId: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  scmId: z.string(),
  state: z.string(),
  statusMessage: z.string(),
  forkable: z.boolean(),
  project: projectSchema,
  public: z.boolean(),
  archived: z.boolean().optional(),
  links: linksSchema.optional(),
});

export const gitRefSchema = z.object({
  id: z.string(),
  displayId: z.string(),
  latestCommit: z.string(),
  repository: repositorySchema,
  type: refTypeSchema.optional(),
});

export const participantSchema = z.object({
  user: bitbucketUserSchema,
  role: participantRoleSchema,
  approved: z.boolean(),
  status: approvalStateSchema,
  lastReviewedCommit: z.string().optional(),
});

export const pullRequestSchema = z.object({
  id: z.number(),
  version: z.number(),
  title: z.string(),
  description: z.string().optional(),
  state: pullRequestStateSchema,
  open: z.boolean(),
  closed: z.boolean(),
  draft: z.boolean(),
  createdDate: z.number(),
  updatedDate: z.number().optional(),
  closedDate: z.number().optional(),
  fromRef: gitRefSchema,
  toRef: gitRefSchema,
  locked: z.literal(false),
  author: participantSchema,
  reviewers: z.array(participantSchema),
  participants: z.array(participantSchema),
  links: linksSchema.optional(),
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
    previousTitle: z.string().optional(),
    previousDescription: z.string().optional(),
    previousTarget: mergeTargetSchema.optional(),
    previousDraft: z.boolean().optional(),
  },
);

export const pullRequestReviewersUpdatedEventSchema =
  basePullRequestEventSchema.extend({
    eventKey: z.literal("pr:reviewer:updated"),
    addedReviewers: z.array(bitbucketUserSchema),
    removedReviewers: z.array(bitbucketUserSchema),
  });

export const pullRequestApprovalEventSchema = basePullRequestEventSchema.extend(
  {
    eventKey: z.union([
      z.literal("pr:reviewer:approved"),
      z.literal("pr:reviewer:unapproved"),
      z.literal("pr:reviewer:needs_work"),
    ]),
    participant: participantSchema,
    previousStatus: approvalStateSchema,
  },
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
    }),
  ),
});

export const pullRequestDeletedEventSchema = basePullRequestEventSchema.extend({
  eventKey: z.literal("pr:deleted"),
});

export const pullRequestOpenedEventSchema = basePullRequestEventSchema.extend({
  eventKey: z.literal("pr:opened"),
});

export const pullRequestDeclinedEventSchema = basePullRequestEventSchema.extend(
  {
    eventKey: z.literal("pr:declined"),
  },
);

export const pullRequestEventSchema = z.union([
  pullRequestOpenedEventSchema,
  pullRequestApprovalEventSchema,
  pullRequestDeletedEventSchema,
  pullRequestDeclinedEventSchema,
  pullRequestMergedEventSchema,
  pullRequestReviewersUpdatedEventSchema,
  pullRequestModifiedEventSchema,
]);

export const bitbucketEventSchema = pullRequestEventSchema;
