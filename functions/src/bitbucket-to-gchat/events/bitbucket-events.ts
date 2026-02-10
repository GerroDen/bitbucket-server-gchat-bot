import { LiteralUnion } from "type-fest";

export interface BasePullRequestEvent {
  eventKey: string;
  date: string;
  actor: BitbucketUser;
  pullRequest: PullRequest;
}

export type BitbucketUserType = LiteralUnion<"NORMAL" | "SERVICE", string>;

export interface BitbucketUser {
  name: string;
  emailAddress: string | null;
  id: number;
  displayName: string;
  active: boolean;
  slug: string;
  type: BitbucketUserType;
  links?: Links;
}

export interface Links {
  [K: string]: LinkEntry[];
}

type LinkEntry = Record<string, string> | null;

export interface BaseProject {
  key: string;
  id: number;
  name: string;
  description?: string;
  type?: string;
  public: boolean;
  links?: Links;
}

export interface PersonalProject extends BaseProject {
  type: "PERSONAL";
  owner: BitbucketUser;
}

export interface NormalProject extends BaseProject {
  type: "NORMAL";
}

export type Project = PersonalProject | NormalProject;

interface Repository {
  slug: string;
  id: number;
  hierarchyId?: string;
  name: string;
  description?: string;
  scmId: string;
  state: string;
  statusMessage: string;
  forkable: boolean;
  project: Project;
  public: boolean;
  archived?: boolean;
  links?: Links;
}

export interface GitRef {
  id: string;
  displayId: string;
  latestCommit: string;
  repository: Repository;
  type?: RefType;
}

export type ApprovalState = LiteralUnion<"APPROVED" | "UNAPPROVED" | "NEEDS_WORK", string>;

export type RefType = LiteralUnion<"BRANCH", string>;

export type ParticipantRole = LiteralUnion<"AUTHOR" | "REVIEWER", string>;

export interface Participant {
  user: BitbucketUser;
  role: ParticipantRole;
  approved: boolean;
  status: ApprovalState;
  lastReviewedCommit?: string;
}

export type PullRequestState = LiteralUnion<"MERGED" | "OPEN" | "DECLINED", string>;

export interface PullRequest {
  id: number;
  version: number;
  title: string;
  description?: string;
  state: PullRequestState;
  open: boolean;
  closed: boolean;
  draft: boolean;
  createdDate: number;
  updatedDate?: number;
  closedDate?: number;
  fromRef: GitRef;
  toRef: GitRef;
  locked: false;
  author: Participant;
  reviewers: Participant[];
  participants: Participant[];
  links?: Links;
}

export interface MergeTarget {
  id: string;
  displayId: string;
  type: string;
  latestCommit: string;
  latestChangeset: string;
}

export interface PullRequestModifiedEvent extends BasePullRequestEvent {
  eventKey: "pr:modified";
  previousTitle?: string;
  previousDescription?: string;
  previousTarget?: MergeTarget;
  previousDraft?: boolean;
}

export interface PullRequestReviewersUpdatedEvent extends BasePullRequestEvent {
  eventKey: "pr:reviewer:updated";
  addedReviewers: BitbucketUser[];
  removedReviewers: BitbucketUser[];
}

export interface PullRequestApprovalEvent extends BasePullRequestEvent {
  eventKey: "pr:reviewer:approved" | "pr:reviewer:unapproved" | "pr:reviewer:needs_work";
  participant: Participant;
  previousStatus: ApprovalState;
}

export interface PullRequestMergedEvent extends BasePullRequestEvent {
  eventKey: "pr:merged";
  pullRequest: PullRequest & {
    properties: {
      mergeCommit: {
        displayId: string;
        id: string;
      };
    };
  };
}

export interface PullRequestDeletedEvent extends BasePullRequestEvent {
  eventKey: "pr:deleted";
}

export interface PullRequestOpenedEvent extends BasePullRequestEvent {
  eventKey: "pr:opened";
}

export interface PullRequestDeclinedEvent extends BasePullRequestEvent {
  eventKey: "pr:declined";
}

export type PullRequestEvent =
  | PullRequestOpenedEvent
  | PullRequestApprovalEvent
  | PullRequestDeletedEvent
  | PullRequestDeclinedEvent
  | PullRequestMergedEvent
  | PullRequestReviewersUpdatedEvent
  | PullRequestModifiedEvent;

export type BitbucketEvent = PullRequestEvent;
