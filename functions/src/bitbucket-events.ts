export interface BasePullRequestEvent {
    eventKey: string;
    date: string,
    actor: BitbucketUser,
    pullRequest: PullRequest,
}

export type BitbucketUserType =
    "NORMAL"
    | string

export interface BitbucketUser {
    name: string
    emailAddress: string
    id: number
    displayName: string
    active: boolean
    slug: string
    type: BitbucketUserType
}

export interface BaseProject {
    key: string
    id: number
    name: string
    type: string
}

export interface PersonalProject extends BaseProject {
    type: "PERSONAL"
    owner: BitbucketUser
}

export interface NormalProject extends BaseProject {
    type: "NORMAL"
}

export type Project =
    PersonalProject
    | NormalProject

interface Repository {
    slug: string
    id: number
    name: string
    scmId: string
    state: string
    statusMessage: string
    forkable: boolean
    project: Project
    public: boolean
}

export interface GitRef {
    id: string
    displayId: string
    latestCommit: string
    repository: Repository
}

export type ApprovalState =
    "APPROVED"
    | "UNAPPROVED"
    | "NEEDS_WORK"
    | string

export type ParticipantRole =
    "AUTHOR"
    | "REVIEWER"
    | string

export interface Participant {
    user: BitbucketUser
    role: ParticipantRole
    approved: boolean
    status: ApprovalState
}

export type PullRequestState =
    "MERGED"
    | "OPEN"
    | "DECLINED"
    | string

export interface PullRequest {
    id: number
    version: number
    title: string
    description: string
    state: PullRequestState
    open: boolean
    closed: boolean
    createdDate: number
    updatedDate: number
    fromRef: GitRef
    toRef: GitRef
    locked: false
    author: Participant
    reviewers: Participant[]
    participants: BitbucketUser[]
}

export interface MergeTarget {
    id: string
    displayId: string
    type: string
    latestCommit: string
    latestChangeset: string
}

export interface PullRequestModifiedEvent extends BasePullRequestEvent {
    eventKey: "pr:modified",
    previousTitle: string,
    previousDescription: string,
    previousTarget: MergeTarget
}

export interface PullRequestReviewersUpdatedEvent extends BasePullRequestEvent {
    eventKey: "pr:reviewer:updated",
    addedReviewers: BitbucketUser[],
    removedReviewers: BitbucketUser[]
}

export interface PullRequestApprovalEvent extends BasePullRequestEvent {
    eventKey: "pr:reviewer:approved" | "pr:reviewer:unapproved" | "pr:reviewer:needs_work",
    participant: Participant,
    previousStatus: ApprovalState
}

export interface PullRequestMergedEvent extends BasePullRequestEvent {
    eventKey: "pr:merged",
    pullRequest: PullRequest & {
        properties: {
            mergeCommit: {
                displayId: string,
                id: string
            }
        },
    }
}

export interface PullRequestDeletedEvent extends BasePullRequestEvent {
    eventKey: "pr:deleted"
}

export type PullRequestEvent =
    PullRequestApprovalEvent
    | PullRequestDeletedEvent
    | PullRequestMergedEvent
    | PullRequestReviewersUpdatedEvent
    | PullRequestModifiedEvent

export type BitbucketEvent = PullRequestEvent

