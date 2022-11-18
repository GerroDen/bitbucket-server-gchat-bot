/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddSshKeyRequest
 */
export interface AddSshKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    algorithmType?: string;
    /**
     * 
     * @type {number}
     * @memberof AddSshKeyRequest
     */
    bitLength?: number;
    /**
     * 
     * @type {number}
     * @memberof AddSshKeyRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    readonly label?: string;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    text?: string;
}
/**
 * 
 * @export
 * @interface AdminPasswordUpdate
 */
export interface AdminPasswordUpdate {
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    passwordConfirm?: string;
}
/**
 * 
 * @export
 * @interface ApplicationUser
 */
export interface ApplicationUser {
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicationUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    type?: ApplicationUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    name?: string;
}


/**
 * @export
 */
export const ApplicationUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type ApplicationUserTypeEnum = typeof ApplicationUserTypeEnum[keyof typeof ApplicationUserTypeEnum];

/**
 * 
 * @export
 * @interface AssignParticipantRoleRequest
 */
export interface AssignParticipantRoleRequest {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof AssignParticipantRoleRequest
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequest
     */
    role?: AssignParticipantRoleRequestRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequest
     */
    status?: AssignParticipantRoleRequestStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequest
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AssignParticipantRoleRequest
     */
    approved?: boolean;
}


/**
 * @export
 */
export const AssignParticipantRoleRequestRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type AssignParticipantRoleRequestRoleEnum = typeof AssignParticipantRoleRequestRoleEnum[keyof typeof AssignParticipantRoleRequestRoleEnum];

/**
 * @export
 */
export const AssignParticipantRoleRequestStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type AssignParticipantRoleRequestStatusEnum = typeof AssignParticipantRoleRequestStatusEnum[keyof typeof AssignParticipantRoleRequestStatusEnum];

/**
 * 
 * @export
 * @interface AssignParticipantRoleRequestUser
 */
export interface AssignParticipantRoleRequestUser {
    /**
     * 
     * @type {object}
     * @memberof AssignParticipantRoleRequestUser
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof AssignParticipantRoleRequestUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignParticipantRoleRequestUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    type?: AssignParticipantRoleRequestUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignParticipantRoleRequestUser
     */
    avatarUrl?: string;
}


/**
 * @export
 */
export const AssignParticipantRoleRequestUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type AssignParticipantRoleRequestUserTypeEnum = typeof AssignParticipantRoleRequestUserTypeEnum[keyof typeof AssignParticipantRoleRequestUserTypeEnum];

/**
 * 
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * 
     * @type {string}
     * @memberof Context
     */
    commitMessage?: string;
}
/**
 * 
 * @export
 * @interface DeleteBranchRequest
 */
export interface DeleteBranchRequest {
    [key: string]: object | any;
    /**
     * Don't actually delete the ref name, just do a dry run
     * @type {boolean}
     * @memberof DeleteBranchRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeleteBranchRequest
     */
    empty?: boolean;
    /**
     * Commit ID that the provided ref name is expected to point to
     * @type {string}
     * @memberof DeleteBranchRequest
     */
    endPoint?: string;
    /**
     * Name of the ref to be deleted
     * @type {string}
     * @memberof DeleteBranchRequest
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface EnrichedRepository
 */
export interface EnrichedRepository {
    /**
     * 
     * @type {EnrichedRepositoryProperties}
     * @memberof EnrichedRepository
     */
    properties?: EnrichedRepositoryProperties;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly defaultBranch?: string;
    /**
     * 
     * @type {EnrichedRepositoryOrigin}
     * @memberof EnrichedRepository
     */
    origin?: EnrichedRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly state?: EnrichedRepositoryStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepository
     */
    links?: object;
}


/**
 * @export
 */
export const EnrichedRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type EnrichedRepositoryStateEnum = typeof EnrichedRepositoryStateEnum[keyof typeof EnrichedRepositoryStateEnum];

/**
 * 
 * @export
 * @interface EnrichedRepositoryOrigin
 */
export interface EnrichedRepositoryOrigin {
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly defaultBranch?: string;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly partition?: number;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly state?: EnrichedRepositoryOriginStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepositoryOrigin
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepositoryOrigin
     */
    links?: object;
}


/**
 * @export
 */
export const EnrichedRepositoryOriginStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type EnrichedRepositoryOriginStateEnum = typeof EnrichedRepositoryOriginStateEnum[keyof typeof EnrichedRepositoryOriginStateEnum];

/**
 * 
 * @export
 * @interface EnrichedRepositoryProperties
 */
export interface EnrichedRepositoryProperties {
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    defaultBranchId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    metadataHash?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    contentHash?: string;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestDeclineRequest
 */
export interface EntityHolderRestPullRequestDeclineRequest {
    /**
     * 
     * @type {EntityHolderRestPullRequestDeclineRequestEntity}
     * @memberof EntityHolderRestPullRequestDeclineRequest
     */
    entity?: EntityHolderRestPullRequestDeclineRequestEntity;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestDeclineRequestEntity
 */
export interface EntityHolderRestPullRequestDeclineRequestEntity {
    /**
     * 
     * @type {string}
     * @memberof EntityHolderRestPullRequestDeclineRequestEntity
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityHolderRestPullRequestDeclineRequestEntity
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestMergeRequest
 */
export interface EntityHolderRestPullRequestMergeRequest {
    /**
     * 
     * @type {EntityHolderRestPullRequestMergeRequestEntity}
     * @memberof EntityHolderRestPullRequestMergeRequest
     */
    entity?: EntityHolderRestPullRequestMergeRequestEntity;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestMergeRequestEntity
 */
export interface EntityHolderRestPullRequestMergeRequestEntity {
    /**
     * 
     * @type {string}
     * @memberof EntityHolderRestPullRequestMergeRequestEntity
     */
    autoSubject?: string;
    /**
     * 
     * @type {object}
     * @memberof EntityHolderRestPullRequestMergeRequestEntity
     */
    context?: object;
    /**
     * 
     * @type {string}
     * @memberof EntityHolderRestPullRequestMergeRequestEntity
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityHolderRestPullRequestMergeRequestEntity
     */
    strategyId?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityHolderRestPullRequestMergeRequestEntity
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestReopenRequest
 */
export interface EntityHolderRestPullRequestReopenRequest {
    /**
     * 
     * @type {EntityHolderRestPullRequestReopenRequestEntity}
     * @memberof EntityHolderRestPullRequestReopenRequest
     */
    entity?: EntityHolderRestPullRequestReopenRequestEntity;
}
/**
 * 
 * @export
 * @interface EntityHolderRestPullRequestReopenRequestEntity
 */
export interface EntityHolderRestPullRequestReopenRequestEntity {
    /**
     * 
     * @type {number}
     * @memberof EntityHolderRestPullRequestReopenRequestEntity
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface ExampleFiles
 */
export interface ExampleFiles {
    /**
     * 
     * @type {ExampleJsonLastModifiedCallback}
     * @memberof ExampleFiles
     */
    files?: ExampleJsonLastModifiedCallback;
}
/**
 * 
 * @export
 * @interface ExampleJsonLastModifiedCallback
 */
export interface ExampleJsonLastModifiedCallback {
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    latestCommit?: RestChangesetToCommit;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    pomXml?: RestChangesetToCommit;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    readmeMd?: RestChangesetToCommit;
}
/**
 * 
 * @export
 * @interface ExamplePreviewMigration
 */
export interface ExamplePreviewMigration {
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof ExamplePreviewMigration
     */
    repositories?: Array<RestRepository>;
}
/**
 * 
 * @export
 * @interface ExamplePutMultipartFormData
 */
export interface ExamplePutMultipartFormData {
    /**
     * The hook script contents.
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    content?: string;
    /**
     * A description of the hook script (useful when querying registered hook scripts).
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    description?: string;
    /**
     * The name of the hook script (useful when querying registered hook scripts).
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface ExampleRequirements
 */
export interface ExampleRequirements {
    /**
     * 
     * @type {string}
     * @memberof ExampleRequirements
     */
    count?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExampleRequirements
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface ExampleSettings
 */
export interface ExampleSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ExampleSettings
     */
    booleanValue?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    doubleValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    integerValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    longValue?: number;
    /**
     * 
     * @type {string}
     * @memberof ExampleSettings
     */
    stringValue?: string;
}
/**
 * 
 * @export
 * @interface ExampleSettingsMap
 */
export interface ExampleSettingsMap {
    /**
     * 
     * @type {boolean}
     * @memberof ExampleSettingsMap
     */
    booleanKey?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ExampleSettingsMap
     */
    stringKey?: string;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettingsMap
     */
    longKey?: number;
}
/**
 * 
 * @export
 * @interface ExampleSocketAddress
 */
export interface ExampleSocketAddress {
    /**
     * 
     * @type {string}
     * @memberof ExampleSocketAddress
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof ExampleSocketAddress
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface ExampleStatus
 */
export interface ExampleStatus {
    /**
     * 
     * @type {string}
     * @memberof ExampleStatus
     */
    serverId?: string;
    /**
     * 
     * @type {number}
     * @memberof ExampleStatus
     */
    currentNumberOfUsers?: number;
}
/**
 * 
 * @export
 * @interface FilePart
 */
export interface FilePart {
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    contentType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FilePart
     */
    formField?: boolean;
    /**
     * 
     * @type {object}
     * @memberof FilePart
     */
    inputStream?: object;
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof FilePart
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface FindBranches200Response
 */
export interface FindBranches200Response {
    /**
     * 
     * @type {Array<RestMinimalRef>}
     * @memberof FindBranches200Response
     */
    values?: Array<RestMinimalRef>;
    /**
     * 
     * @type {number}
     * @memberof FindBranches200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof FindBranches200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FindBranches200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FindBranches200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof FindBranches200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface FindUsersInGroup200Response
 */
export interface FindUsersInGroup200Response {
    /**
     * 
     * @type {Array<RestDetailedUser>}
     * @memberof FindUsersInGroup200Response
     */
    values?: Array<RestDetailedUser>;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FindUsersInGroup200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetActivities200Response
 */
export interface GetActivities200Response {
    /**
     * 
     * @type {Array<RestPullRequestActivity>}
     * @memberof GetActivities200Response
     */
    values?: Array<RestPullRequestActivity>;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetActivities200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetAll1200Response
 */
export interface GetAll1200Response {
    /**
     * 
     * @type {Array<RestUserRateLimitSettings>}
     * @memberof GetAll1200Response
     */
    values?: Array<RestUserRateLimitSettings>;
    /**
     * 
     * @type {number}
     * @memberof GetAll1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetAll1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAll1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetAll200Response
 */
export interface GetAll200Response {
    /**
     * 
     * @type {Array<RestAccessToken>}
     * @memberof GetAll200Response
     */
    values?: Array<RestAccessToken>;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetAll200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetAll401Response
 */
export interface GetAll401Response {
    /**
     * 
     * @type {Array<RestErrorMessage>}
     * @memberof GetAll401Response
     */
    errors?: Array<RestErrorMessage>;
}
/**
 * 
 * @export
 * @interface GetAllMeshMigrationSummaries200Response
 */
export interface GetAllMeshMigrationSummaries200Response {
    /**
     * 
     * @type {Array<RestMeshMigrationSummary>}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    values?: Array<RestMeshMigrationSummary>;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetAllReposForProject200Response
 */
export interface GetAllReposForProject200Response {
    /**
     * 
     * @type {Array<EnrichedRepository>}
     * @memberof GetAllReposForProject200Response
     */
    values?: Array<EnrichedRepository>;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllReposForProject200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetBranches200Response
 */
export interface GetBranches200Response {
    /**
     * 
     * @type {Array<RestBranch>}
     * @memberof GetBranches200Response
     */
    values?: Array<RestBranch>;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetBranches200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetBuildStatus200Response
 */
export interface GetBuildStatus200Response {
    /**
     * 
     * @type {Array<RestBuildStatus>}
     * @memberof GetBuildStatus200Response
     */
    values?: Array<RestBuildStatus>;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetBuildStatus200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetChanges1200Response
 */
export interface GetChanges1200Response {
    /**
     * 
     * @type {Array<RestChange>}
     * @memberof GetChanges1200Response
     */
    values?: Array<RestChange>;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetChanges1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetComments200Response
 */
export interface GetComments200Response {
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof GetComments200Response
     */
    values?: Array<RestComment>;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetComments200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetCommits200Response
 */
export interface GetCommits200Response {
    /**
     * 
     * @type {Array<RestChangeset>}
     * @memberof GetCommits200Response
     */
    values?: Array<RestChangeset>;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetCommits200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetCommits200Response1
 */
export interface GetCommits200Response1 {
    /**
     * 
     * @type {Array<RestCommit>}
     * @memberof GetCommits200Response1
     */
    values?: Array<RestCommit>;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response1
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response1
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetCommits200Response1
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response1
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response1
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetConfigurations200Response
 */
export interface GetConfigurations200Response {
    /**
     * 
     * @type {Array<RestHookScriptConfig>}
     * @memberof GetConfigurations200Response
     */
    values?: Array<RestHookScriptConfig>;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetConfigurations200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetExportJobMessages200Response
 */
export interface GetExportJobMessages200Response {
    /**
     * 
     * @type {Array<RestJobMessage>}
     * @memberof GetExportJobMessages200Response
     */
    values?: Array<RestJobMessage>;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetExportJobMessages200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetForRepository200Response
 */
export interface GetForRepository200Response {
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof GetForRepository200Response
     */
    values?: Array<RestSshAccessKey>;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetForRepository200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetGroups1200Response
 */
export interface GetGroups1200Response {
    /**
     * 
     * @type {Array<RestDetailedGroup>}
     * @memberof GetGroups1200Response
     */
    values?: Array<RestDetailedGroup>;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetGroups1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetGroups200Response
 */
export interface GetGroups200Response {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetGroups200Response
     */
    values?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetGroups200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetGroupsWithAnyPermission200Response
 */
export interface GetGroupsWithAnyPermission200Response {
    /**
     * 
     * @type {Array<RestPermittedGroup>}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    values?: Array<RestPermittedGroup>;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetHistory200Response
 */
export interface GetHistory200Response {
    /**
     * 
     * @type {Array<RestAggregateRejectCounter>}
     * @memberof GetHistory200Response
     */
    values?: Array<RestAggregateRejectCounter>;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetHistory200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetKeysForUser200Response
 */
export interface GetKeysForUser200Response {
    /**
     * 
     * @type {Array<RestGpgKey>}
     * @memberof GetKeysForUser200Response
     */
    values?: Array<RestGpgKey>;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetKeysForUser200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetLabelables200Response
 */
export interface GetLabelables200Response {
    /**
     * 
     * @type {Array<RestLabelable>}
     * @memberof GetLabelables200Response
     */
    values?: Array<RestLabelable>;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetLabelables200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetLabels200Response
 */
export interface GetLabels200Response {
    /**
     * 
     * @type {Array<RestLabel>}
     * @memberof GetLabels200Response
     */
    values?: Array<RestLabel>;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetLabels200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetLikers200Response
 */
export interface GetLikers200Response {
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof GetLikers200Response
     */
    values?: Array<RestApplicationUser>;
    /**
     * 
     * @type {number}
     * @memberof GetLikers200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLikers200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetLikers200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLikers200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLikers200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetPage200Response
 */
export interface GetPage200Response {
    /**
     * 
     * @type {Array<RestRequiredBuildCondition>}
     * @memberof GetPage200Response
     */
    values?: Array<RestRequiredBuildCondition>;
    /**
     * 
     * @type {number}
     * @memberof GetPage200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPage200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetPage200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPage200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPage200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetProjects200Response
 */
export interface GetProjects200Response {
    /**
     * 
     * @type {Array<RestProject>}
     * @memberof GetProjects200Response
     */
    values?: Array<RestProject>;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetProjects200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetPullRequestSuggestions200Response
 */
export interface GetPullRequestSuggestions200Response {
    /**
     * 
     * @type {Array<RestPullRequestSuggestion>}
     * @memberof GetPullRequestSuggestions200Response
     */
    values?: Array<RestPullRequestSuggestion>;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetPullRequestSuggestions200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetPullRequests1200Response
 */
export interface GetPullRequests1200Response {
    /**
     * 
     * @type {Array<RestPullRequest>}
     * @memberof GetPullRequests1200Response
     */
    values?: Array<RestPullRequest>;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetPullRequests1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetRefChangeActivity200Response
 */
export interface GetRefChangeActivity200Response {
    /**
     * 
     * @type {Array<RestRepositoryRefChangeActivity>}
     * @memberof GetRefChangeActivity200Response
     */
    values?: Array<RestRepositoryRefChangeActivity>;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetRefChangeActivity200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetReports200Response
 */
export interface GetReports200Response {
    /**
     * 
     * @type {Array<RestInsightReport>}
     * @memberof GetReports200Response
     */
    values?: Array<RestInsightReport>;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetReports200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetRepositoriesRecentlyAccessed200Response
 */
export interface GetRepositoriesRecentlyAccessed200Response {
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    values?: Array<RestRepository>;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetRepositoryHooks1200Response
 */
export interface GetRepositoryHooks1200Response {
    /**
     * 
     * @type {Array<RestRepositoryHook>}
     * @memberof GetRepositoryHooks1200Response
     */
    values?: Array<RestRepositoryHook>;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetRepositoryHooks1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetRestrictions1200Response
 */
export interface GetRestrictions1200Response {
    /**
     * 
     * @type {Array<RestRefRestriction>}
     * @memberof GetRestrictions1200Response
     */
    values?: Array<RestRefRestriction>;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetRestrictions1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetReviewerGroups1200Response
 */
export interface GetReviewerGroups1200Response {
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof GetReviewerGroups1200Response
     */
    values?: Array<RestReviewerGroup>;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetReviewerGroups1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetSshKeys200Response
 */
export interface GetSshKeys200Response {
    /**
     * 
     * @type {Array<RestSshKey>}
     * @memberof GetSshKeys200Response
     */
    values?: Array<RestSshKey>;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetSshKeys200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetTags200Response
 */
export interface GetTags200Response {
    /**
     * 
     * @type {Array<RestTag>}
     * @memberof GetTags200Response
     */
    values?: Array<RestTag>;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetTags200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface GetUsersWithAnyPermission1200Response
 */
export interface GetUsersWithAnyPermission1200Response {
    /**
     * 
     * @type {Array<RestPermittedUser>}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    values?: Array<RestPermittedUser>;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface GroupAndUsers
 */
export interface GroupAndUsers {
    /**
     * 
     * @type {string}
     * @memberof GroupAndUsers
     */
    group?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof GroupAndUsers
     */
    users: Set<string>;
}
/**
 * 
 * @export
 * @interface ListMirrors200Response
 */
export interface ListMirrors200Response {
    /**
     * 
     * @type {Array<RestMirrorServer>}
     * @memberof ListMirrors200Response
     */
    values?: Array<RestMirrorServer>;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListMirrors200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface ListParticipants200Response
 */
export interface ListParticipants200Response {
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof ListParticipants200Response
     */
    values?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListParticipants200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface ListRequests200Response
 */
export interface ListRequests200Response {
    /**
     * 
     * @type {Array<RestMirroringRequest>}
     * @memberof ListRequests200Response
     */
    values?: Array<RestMirroringRequest>;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListRequests200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface ListUpstreamServers200Response
 */
export interface ListUpstreamServers200Response {
    /**
     * 
     * @type {Array<RestUpstreamServer>}
     * @memberof ListUpstreamServers200Response
     */
    values?: Array<RestUpstreamServer>;
    /**
     * 
     * @type {number}
     * @memberof ListUpstreamServers200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListUpstreamServers200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListUpstreamServers200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListUpstreamServers200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListUpstreamServers200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface MinimalRef
 */
export interface MinimalRef {
    /**
     * 
     * @type {string}
     * @memberof MinimalRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof MinimalRef
     */
    id?: string;
    /**
     * 
     * @type {any}
     * @memberof MinimalRef
     */
    type?: any | null;
}
/**
 * Page of refs
 * @export
 * @interface PageOfRefs
 */
export interface PageOfRefs {
    [key: string]: object | any;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRefs
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRefs
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageOfRefs
     */
    lastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageOfRefs
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfRefs
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfRefs
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageOfRefs
     */
    start?: number;
    /**
     * 
     * @type {Array<MinimalRef>}
     * @memberof PageOfRefs
     */
    values?: Array<MinimalRef>;
}
/**
 * 
 * @export
 * @interface RepositoryHookDetails
 */
export interface RepositoryHookDetails {
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    configFormKey?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RepositoryHookDetails
     */
    supportedScopes?: Set<RepositoryHookDetailsSupportedScopesEnum>;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    type?: RepositoryHookDetailsTypeEnum;
}


/**
 * @export
 */
export const RepositoryHookDetailsSupportedScopesEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RepositoryHookDetailsSupportedScopesEnum = typeof RepositoryHookDetailsSupportedScopesEnum[keyof typeof RepositoryHookDetailsSupportedScopesEnum];

/**
 * @export
 */
export const RepositoryHookDetailsTypeEnum = {
    PreReceive: 'PRE_RECEIVE',
    PrePullRequestMerge: 'PRE_PULL_REQUEST_MERGE',
    PostReceive: 'POST_RECEIVE'
} as const;
export type RepositoryHookDetailsTypeEnum = typeof RepositoryHookDetailsTypeEnum[keyof typeof RepositoryHookDetailsTypeEnum];

/**
 * 
 * @export
 * @interface RestAccessToken
 */
export interface RestAccessToken {
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestAccessTokenRequest
 */
export interface RestAccessTokenRequest {
    /**
     * 
     * @type {number}
     * @memberof RestAccessTokenRequest
     */
    expiryDays?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAccessTokenRequest
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestAccessTokenRequest
     */
    permissions?: Set<string>;
}
/**
 * 
 * @export
 * @interface RestAggregateRejectCounter
 */
export interface RestAggregateRejectCounter {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestAggregateRejectCounter
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {number}
     * @memberof RestAggregateRejectCounter
     */
    lastRejectTime?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAggregateRejectCounter
     */
    rejectCount?: number;
}
/**
 * 
 * @export
 * @interface RestAnalyticsSettings
 */
export interface RestAnalyticsSettings {
    /**
     * 
     * @type {string}
     * @memberof RestAnalyticsSettings
     */
    supportEntitlementNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestAnalyticsSettings
     */
    canCollectAnalytics?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAnalyticsSettings
     */
    serverTime?: number;
}
/**
 * 
 * @export
 * @interface RestAnnouncementBanner
 */
export interface RestAnnouncementBanner {
    /**
     * 
     * @type {boolean}
     * @memberof RestAnnouncementBanner
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestAnnouncementBanner
     */
    audience?: RestAnnouncementBannerAudienceEnum;
    /**
     * 
     * @type {string}
     * @memberof RestAnnouncementBanner
     */
    message?: string;
}


/**
 * @export
 */
export const RestAnnouncementBannerAudienceEnum = {
    Authenticated: 'AUTHENTICATED',
    All: 'ALL'
} as const;
export type RestAnnouncementBannerAudienceEnum = typeof RestAnnouncementBannerAudienceEnum[keyof typeof RestAnnouncementBannerAudienceEnum];

/**
 * 
 * @export
 * @interface RestApplicationProperties
 */
export interface RestApplicationProperties {
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    buildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    displayName?: string;
}
/**
 * 
 * @export
 * @interface RestApplicationUser
 */
export interface RestApplicationUser {
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUser
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestApplicationUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestApplicationUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    type?: RestApplicationUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    avatarUrl?: string;
}


/**
 * @export
 */
export const RestApplicationUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestApplicationUserTypeEnum = typeof RestApplicationUserTypeEnum[keyof typeof RestApplicationUserTypeEnum];

/**
 * 
 * @export
 * @interface RestApplicationUserWithPermissions
 */
export interface RestApplicationUserWithPermissions {
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUserWithPermissions
     */
    effectivePermissions?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestApplicationUserWithPermissions
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof RestApplicationUserWithPermissions
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    type?: RestApplicationUserWithPermissionsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUserWithPermissions
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    avatarUrl?: string;
}


/**
 * @export
 */
export const RestApplicationUserWithPermissionsTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestApplicationUserWithPermissionsTypeEnum = typeof RestApplicationUserWithPermissionsTypeEnum[keyof typeof RestApplicationUserWithPermissionsTypeEnum];

/**
 * 
 * @export
 * @interface RestApplySuggestionRequest
 */
export interface RestApplySuggestionRequest {
    /**
     * 
     * @type {RestApplySuggestionRequestCommentVersion}
     * @memberof RestApplySuggestionRequest
     */
    commentVersion?: RestApplySuggestionRequestCommentVersion;
    /**
     * 
     * @type {string}
     * @memberof RestApplySuggestionRequest
     */
    commitMessage?: string;
    /**
     * 
     * @type {RestApplySuggestionRequestPullRequestVersion}
     * @memberof RestApplySuggestionRequest
     */
    pullRequestVersion?: RestApplySuggestionRequestPullRequestVersion;
    /**
     * 
     * @type {RestApplySuggestionRequestSuggestionIndex}
     * @memberof RestApplySuggestionRequest
     */
    suggestionIndex?: RestApplySuggestionRequestSuggestionIndex;
}
/**
 * 
 * @export
 * @interface RestApplySuggestionRequestCommentVersion
 */
export interface RestApplySuggestionRequestCommentVersion {
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequestCommentVersion
     */
    asInt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestApplySuggestionRequestCommentVersion
     */
    present?: boolean;
}
/**
 * 
 * @export
 * @interface RestApplySuggestionRequestPullRequestVersion
 */
export interface RestApplySuggestionRequestPullRequestVersion {
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequestPullRequestVersion
     */
    asInt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestApplySuggestionRequestPullRequestVersion
     */
    present?: boolean;
}
/**
 * 
 * @export
 * @interface RestApplySuggestionRequestSuggestionIndex
 */
export interface RestApplySuggestionRequestSuggestionIndex {
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequestSuggestionIndex
     */
    asInt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestApplySuggestionRequestSuggestionIndex
     */
    present?: boolean;
}
/**
 * 
 * @export
 * @interface RestAttachmentMetadata
 */
export interface RestAttachmentMetadata {
    /**
     * 
     * @type {string}
     * @memberof RestAttachmentMetadata
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAttachmentMetadata
     */
    metadata?: string;
    /**
     * 
     * @type {number}
     * @memberof RestAttachmentMetadata
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestAuthenticationRequest
 */
export interface RestAuthenticationRequest {
    /**
     * 
     * @type {RestUsernamePasswordCredentials}
     * @memberof RestAuthenticationRequest
     */
    credentials: RestUsernamePasswordCredentials;
    /**
     * 
     * @type {number}
     * @memberof RestAuthenticationRequest
     */
    repositoryId?: number;
}
/**
 * 
 * @export
 * @interface RestAutoDeclineSettings
 */
export interface RestAutoDeclineSettings {
    /**
     * 
     * @type {RestAutoDeclineSettingsScope}
     * @memberof RestAutoDeclineSettings
     */
    scope?: RestAutoDeclineSettingsScope;
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoDeclineSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoDeclineSettings
     */
    inactivityWeeks?: number;
}
/**
 * 
 * @export
 * @interface RestAutoDeclineSettingsRequest
 */
export interface RestAutoDeclineSettingsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoDeclineSettingsRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoDeclineSettingsRequest
     */
    inactivityWeeks?: number;
}
/**
 * 
 * @export
 * @interface RestAutoDeclineSettingsScope
 */
export interface RestAutoDeclineSettingsScope {
    /**
     * 
     * @type {number}
     * @memberof RestAutoDeclineSettingsScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAutoDeclineSettingsScope
     */
    type?: RestAutoDeclineSettingsScopeTypeEnum;
}


/**
 * @export
 */
export const RestAutoDeclineSettingsScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestAutoDeclineSettingsScopeTypeEnum = typeof RestAutoDeclineSettingsScopeTypeEnum[keyof typeof RestAutoDeclineSettingsScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestBitbucketLicense
 */
export interface RestBitbucketLicense {
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeGracePeriodExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeMaintenanceExpiry?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    readonly supportEntitlementNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestBitbucketLicense
     */
    readonly unlimitedNumberOfUsers?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    license?: string;
    /**
     * 
     * @type {RestBitbucketLicenseStatus}
     * @memberof RestBitbucketLicense
     */
    status?: RestBitbucketLicenseStatus;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly expiryDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly purchaseDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly maximumNumberOfUsers?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly maintenanceExpiryDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly gracePeriodEndDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly daysBeforeExpiry?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    readonly serverId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly creationDate?: number;
}
/**
 * 
 * @export
 * @interface RestBitbucketLicenseStatus
 */
export interface RestBitbucketLicenseStatus {
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicenseStatus
     */
    serverId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicenseStatus
     */
    currentNumberOfUsers?: number;
}
/**
 * 
 * @export
 * @interface RestBranch
 */
export interface RestBranch {
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly displayId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestBranch
     */
    readonly _default?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RestBranch
     */
    type?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly latestCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly latestChangeset?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestBranchCreateRequest
 */
export interface RestBranchCreateRequest {
    [key: string]: object | any;
    /**
     * 
     * @type {boolean}
     * @memberof RestBranchCreateRequest
     */
    empty?: boolean;
    /**
     * Name of the branch to be created
     * @type {string}
     * @memberof RestBranchCreateRequest
     */
    name?: string;
    /**
     * Commit ID from which the branch is created
     * @type {string}
     * @memberof RestBranchCreateRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestBranchDeleteRequest
 */
export interface RestBranchDeleteRequest {
    [key: string]: object | any;
    /**
     * Don't actually delete the ref name, just do a dry run
     * @type {boolean}
     * @memberof RestBranchDeleteRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestBranchDeleteRequest
     */
    empty?: boolean;
    /**
     * Commit ID that the provided ref name is expected to point to
     * @type {string}
     * @memberof RestBranchDeleteRequest
     */
    endPoint?: string;
    /**
     * Name of the ref to be deleted
     * @type {string}
     * @memberof RestBranchDeleteRequest
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestBuildCapabilities
 */
export interface RestBuildCapabilities {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestBuildCapabilities
     */
    buildStatus?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestBuildStats
 */
export interface RestBuildStats {
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    cancelled?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    successful?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    inProgress?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    unknown?: number;
}
/**
 * 
 * @export
 * @interface RestBuildStatus
 */
export interface RestBuildStatus {
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    buildNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    updatedDate?: number;
    /**
     * 
     * @type {RestBuildStatusTestResults}
     * @memberof RestBuildStatus
     */
    testResults?: RestBuildStatusTestResults;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    state?: RestBuildStatusStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    ref?: string;
}


/**
 * @export
 */
export const RestBuildStatusStateEnum = {
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    Inprogress: 'INPROGRESS',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestBuildStatusStateEnum = typeof RestBuildStatusStateEnum[keyof typeof RestBuildStatusStateEnum];

/**
 * 
 * @export
 * @interface RestBuildStatusSetRequest
 */
export interface RestBuildStatusSetRequest {
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    buildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequest
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequest
     */
    lastUpdated?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    state: RestBuildStatusSetRequestStateEnum;
    /**
     * 
     * @type {RestBuildStatusSetRequestTestResults}
     * @memberof RestBuildStatusSetRequest
     */
    testResults?: RestBuildStatusSetRequestTestResults;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    url: string;
}


/**
 * @export
 */
export const RestBuildStatusSetRequestStateEnum = {
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    Inprogress: 'INPROGRESS',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestBuildStatusSetRequestStateEnum = typeof RestBuildStatusSetRequestStateEnum[keyof typeof RestBuildStatusSetRequestStateEnum];

/**
 * 
 * @export
 * @interface RestBuildStatusSetRequestTestResults
 */
export interface RestBuildStatusSetRequestTestResults {
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequestTestResults
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequestTestResults
     */
    skipped?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequestTestResults
     */
    successful?: number;
}
/**
 * 
 * @export
 * @interface RestBuildStatusTestResults
 */
export interface RestBuildStatusTestResults {
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    skipped?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    successful?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    failed?: number;
}
/**
 * 
 * @export
 * @interface RestBulkAddInsightAnnotationRequest
 */
export interface RestBulkAddInsightAnnotationRequest {
    /**
     * 
     * @type {Array<RestSingleAddInsightAnnotationRequest>}
     * @memberof RestBulkAddInsightAnnotationRequest
     */
    annotations?: Array<RestSingleAddInsightAnnotationRequest>;
}
/**
 * 
 * @export
 * @interface RestBulkUserRateLimitSettingsUpdateRequest
 */
export interface RestBulkUserRateLimitSettingsUpdateRequest {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    usernames?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestBulkUserRateLimitSettingsUpdateRequestSettings
 */
export interface RestBulkUserRateLimitSettingsUpdateRequestSettings {
    /**
     * 
     * @type {number}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequestSettings
     */
    capacity?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequestSettings
     */
    fillRate?: number;
}
/**
 * 
 * @export
 * @interface RestChange
 */
export interface RestChange {
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    nodeType?: RestChangeNodeTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestChange
     */
    executable?: boolean;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestChange
     */
    srcPath?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {RestChangeConflict}
     * @memberof RestChange
     */
    conflict?: RestChangeConflict;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    contentId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    fromContentId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChange
     */
    percentUnchanged?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestChange
     */
    srcExecutable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    type?: RestChangeTypeEnum;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestChange
     */
    path?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {object}
     * @memberof RestChange
     */
    links?: object;
}


/**
 * @export
 */
export const RestChangeNodeTypeEnum = {
    Directory: 'DIRECTORY',
    File: 'FILE',
    Submodule: 'SUBMODULE'
} as const;
export type RestChangeNodeTypeEnum = typeof RestChangeNodeTypeEnum[keyof typeof RestChangeNodeTypeEnum];

/**
 * @export
 */
export const RestChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestChangeTypeEnum = typeof RestChangeTypeEnum[keyof typeof RestChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestChangeConflict
 */
export interface RestChangeConflict {
    /**
     * 
     * @type {RestChangeConflictTheirChange}
     * @memberof RestChangeConflict
     */
    theirChange?: RestChangeConflictTheirChange;
    /**
     * 
     * @type {RestChangeConflictTheirChange}
     * @memberof RestChangeConflict
     */
    ourChange?: RestChangeConflictTheirChange;
}
/**
 * 
 * @export
 * @interface RestChangeConflictTheirChange
 */
export interface RestChangeConflictTheirChange {
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestChangeConflictTheirChange
     */
    srcPath?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {string}
     * @memberof RestChangeConflictTheirChange
     */
    type?: RestChangeConflictTheirChangeTypeEnum;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestChangeConflictTheirChange
     */
    path?: RestCommentThreadDiffAnchorSrcPath;
}


/**
 * @export
 */
export const RestChangeConflictTheirChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestChangeConflictTheirChangeTypeEnum = typeof RestChangeConflictTheirChangeTypeEnum[keyof typeof RestChangeConflictTheirChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestChangeset
 */
export interface RestChangeset {
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestChangeset
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {RestChangesetChanges}
     * @memberof RestChangeset
     */
    changes?: RestChangesetChanges;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestChangeset
     */
    fromCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof RestChangeset
     */
    toCommit?: RestChangesetToCommit;
    /**
     * 
     * @type {object}
     * @memberof RestChangeset
     */
    links?: object;
}
/**
 * 
 * @export
 * @interface RestChangesetChanges
 */
export interface RestChangesetChanges {
    /**
     * 
     * @type {object}
     * @memberof RestChangesetChanges
     */
    values?: object;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetChanges
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface RestChangesetFromCommit
 */
export interface RestChangesetFromCommit {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetFromCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetFromCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestChangesetRepository
 */
export interface RestChangesetRepository {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly defaultBranch?: string;
    /**
     * 
     * @type {EnrichedRepositoryOrigin}
     * @memberof RestChangesetRepository
     */
    origin?: EnrichedRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly state?: RestChangesetRepositoryStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepository
     */
    links?: object;
}


/**
 * @export
 */
export const RestChangesetRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestChangesetRepositoryStateEnum = typeof RestChangesetRepositoryStateEnum[keyof typeof RestChangesetRepositoryStateEnum];

/**
 * 
 * @export
 * @interface RestChangesetToCommit
 */
export interface RestChangesetToCommit {
    /**
     * 
     * @type {Array<RestMinimalCommit>}
     * @memberof RestChangesetToCommit
     */
    parents?: Array<RestMinimalCommit>;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestChangesetToCommit
     */
    author?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetToCommit
     */
    authorTimestamp?: number;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestChangesetToCommit
     */
    committer?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetToCommit
     */
    committerTimestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestChangesetToCommitAuthor
 */
export interface RestChangesetToCommitAuthor {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestClusterInformation
 */
export interface RestClusterInformation {
    /**
     * 
     * @type {Array<RestClusterNode>}
     * @memberof RestClusterInformation
     */
    nodes?: Array<RestClusterNode>;
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterInformation
     */
    running?: boolean;
    /**
     * 
     * @type {RestClusterInformationLocalNode}
     * @memberof RestClusterInformation
     */
    localNode?: RestClusterInformationLocalNode;
}
/**
 * 
 * @export
 * @interface RestClusterInformationLocalNode
 */
export interface RestClusterInformationLocalNode {
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterInformationLocalNode
     */
    local?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    buildVersion?: string;
    /**
     * 
     * @type {RestClusterNodeAddress}
     * @memberof RestClusterInformationLocalNode
     */
    address?: RestClusterNodeAddress;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestClusterNode
 */
export interface RestClusterNode {
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterNode
     */
    local?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    buildVersion?: string;
    /**
     * 
     * @type {RestClusterNodeAddress}
     * @memberof RestClusterNode
     */
    address?: RestClusterNodeAddress;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestClusterNodeAddress
 */
export interface RestClusterNodeAddress {
    /**
     * 
     * @type {string}
     * @memberof RestClusterNodeAddress
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof RestClusterNodeAddress
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface RestComment
 */
export interface RestComment {
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    readonly html?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    text?: string;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    severity?: string;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestComment
     */
    readonly comments?: Array<RestComment>;
    /**
     * 
     * @type {RestUserReactionCommentAnchor}
     * @memberof RestComment
     */
    anchor?: RestUserReactionCommentAnchor;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {RestUserReactionCommentAuthor}
     * @memberof RestComment
     */
    author?: RestUserReactionCommentAuthor;
    /**
     * 
     * @type {RestUserReactionCommentParent}
     * @memberof RestComment
     */
    parent?: RestUserReactionCommentParent;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    state?: string;
    /**
     * 
     * @type {object}
     * @memberof RestComment
     */
    properties?: object;
}
/**
 * 
 * @export
 * @interface RestCommentJiraIssue
 */
export interface RestCommentJiraIssue {
    /**
     * 
     * @type {string}
     * @memberof RestCommentJiraIssue
     */
    issueKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentJiraIssue
     */
    commentId?: number;
}
/**
 * 
 * @export
 * @interface RestCommentThreadDiffAnchor
 */
export interface RestCommentThreadDiffAnchor {
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchor
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    diffType?: RestCommentThreadDiffAnchorDiffTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    lineType?: RestCommentThreadDiffAnchorLineTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    fileType?: RestCommentThreadDiffAnchorFileTypeEnum;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorPullRequest}
     * @memberof RestCommentThreadDiffAnchor
     */
    pullRequest?: RestCommentThreadDiffAnchorPullRequest;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestCommentThreadDiffAnchor
     */
    srcPath?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    toHash?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentThreadDiffAnchor
     */
    readonly lineComment?: boolean;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestCommentThreadDiffAnchor
     */
    path?: RestCommentThreadDiffAnchorSrcPath;
}


/**
 * @export
 */
export const RestCommentThreadDiffAnchorDiffTypeEnum = {
    Commit: 'COMMIT',
    Effective: 'EFFECTIVE',
    Range: 'RANGE'
} as const;
export type RestCommentThreadDiffAnchorDiffTypeEnum = typeof RestCommentThreadDiffAnchorDiffTypeEnum[keyof typeof RestCommentThreadDiffAnchorDiffTypeEnum];

/**
 * @export
 */
export const RestCommentThreadDiffAnchorLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestCommentThreadDiffAnchorLineTypeEnum = typeof RestCommentThreadDiffAnchorLineTypeEnum[keyof typeof RestCommentThreadDiffAnchorLineTypeEnum];

/**
 * @export
 */
export const RestCommentThreadDiffAnchorFileTypeEnum = {
    From: 'FROM',
    To: 'TO'
} as const;
export type RestCommentThreadDiffAnchorFileTypeEnum = typeof RestCommentThreadDiffAnchorFileTypeEnum[keyof typeof RestCommentThreadDiffAnchorFileTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentThreadDiffAnchorPullRequest
 */
export interface RestCommentThreadDiffAnchorPullRequest {
    /**
     * 
     * @type {RestPullRequestToRef}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    toRef?: RestPullRequestToRef;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    htmlDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    closedDate?: number;
    /**
     * 
     * @type {RestPullRequestToRef}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    fromRef?: RestPullRequestToRef;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    participants?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    reviewers?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    updatedDate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    state?: RestCommentThreadDiffAnchorPullRequestStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestCommentThreadDiffAnchorPullRequest
     */
    links?: object;
}


/**
 * @export
 */
export const RestCommentThreadDiffAnchorPullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type RestCommentThreadDiffAnchorPullRequestStateEnum = typeof RestCommentThreadDiffAnchorPullRequestStateEnum[keyof typeof RestCommentThreadDiffAnchorPullRequestStateEnum];

/**
 * 
 * @export
 * @interface RestCommentThreadDiffAnchorSrcPath
 */
export interface RestCommentThreadDiffAnchorSrcPath {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestCommentThreadDiffAnchorSrcPath
     */
    components?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorSrcPath
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorSrcPath
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchorSrcPath
     */
    extension?: string;
}
/**
 * 
 * @export
 * @interface RestCommit
 */
export interface RestCommit {
    /**
     * 
     * @type {Array<RestMinimalCommit>}
     * @memberof RestCommit
     */
    parents?: Array<RestMinimalCommit>;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestCommit
     */
    author?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestCommit
     */
    authorTimestamp?: number;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestCommit
     */
    committer?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestCommit
     */
    committerTimestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestConflict
 */
export interface RestConflict {
    /**
     * 
     * @type {RestChangeConflictTheirChange}
     * @memberof RestConflict
     */
    theirChange?: RestChangeConflictTheirChange;
    /**
     * 
     * @type {RestChangeConflictTheirChange}
     * @memberof RestConflict
     */
    ourChange?: RestChangeConflictTheirChange;
}
/**
 * 
 * @export
 * @interface RestConflictChange
 */
export interface RestConflictChange {
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestConflictChange
     */
    srcPath?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {string}
     * @memberof RestConflictChange
     */
    type?: RestConflictChangeTypeEnum;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestConflictChange
     */
    path?: RestCommentThreadDiffAnchorSrcPath;
}


/**
 * @export
 */
export const RestConflictChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestConflictChangeTypeEnum = typeof RestConflictChangeTypeEnum[keyof typeof RestConflictChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestConnectivitySummary
 */
export interface RestConnectivitySummary {
    /**
     * 
     * @type {string}
     * @memberof RestConnectivitySummary
     */
    errorMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof RestConnectivitySummary
     */
    roundTripTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestConnectivitySummary
     */
    reachable?: boolean;
}
/**
 * 
 * @export
 * @interface RestCreateBranchRequest
 */
export interface RestCreateBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestCreateTagRequest
 */
export interface RestCreateTagRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestDefaultBranch
 */
export interface RestDefaultBranch {
    /**
     * 
     * @type {string}
     * @memberof RestDefaultBranch
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestDefaultReviewersRequest
 */
export interface RestDefaultReviewersRequest {
    /**
     * 
     * @type {number}
     * @memberof RestDefaultReviewersRequest
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestDefaultReviewersRequest
     */
    reviewers?: Array<RestApplicationUser>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultReviewersRequest
     */
    sourceMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultReviewersRequest
     */
    targetMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestDeployment
 */
export interface RestDeployment {
    /**
     * 
     * @type {number}
     * @memberof RestDeployment
     */
    deploymentSequenceNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    description?: string;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestDeployment
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {number}
     * @memberof RestDeployment
     */
    lastUpdated?: number;
    /**
     * 
     * @type {RestDeploymentEnvironment}
     * @memberof RestDeployment
     */
    environment?: RestDeploymentEnvironment;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestDeployment
     */
    fromCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestDeployment
     */
    toCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    state?: RestDeploymentStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    displayName?: string;
}


/**
 * @export
 */
export const RestDeploymentStateEnum = {
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    RolledBack: 'ROLLED_BACK',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestDeploymentStateEnum = typeof RestDeploymentStateEnum[keyof typeof RestDeploymentStateEnum];

/**
 * 
 * @export
 * @interface RestDeploymentEnvironment
 */
export interface RestDeploymentEnvironment {
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    displayName: string;
}
/**
 * 
 * @export
 * @interface RestDeploymentSetRequest
 */
export interface RestDeploymentSetRequest {
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentSetRequest
     */
    deploymentSequenceNumber: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    displayName: string;
    /**
     * 
     * @type {RestDeploymentEnvironment}
     * @memberof RestDeploymentSetRequest
     */
    environment: RestDeploymentEnvironment;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentSetRequest
     */
    lastUpdated?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    state: RestDeploymentSetRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    url: string;
}


/**
 * @export
 */
export const RestDeploymentSetRequestStateEnum = {
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    RolledBack: 'ROLLED_BACK',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestDeploymentSetRequestStateEnum = typeof RestDeploymentSetRequestStateEnum[keyof typeof RestDeploymentSetRequestStateEnum];

/**
 * 
 * @export
 * @interface RestDetailedGroup
 */
export interface RestDetailedGroup {
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedGroup
     */
    deletable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedGroup
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestDetailedUser
 */
export interface RestDetailedUser {
    /**
     * 
     * @type {number}
     * @memberof RestDetailedUser
     */
    lastAuthenticationTimestamp?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    mutableGroups?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    mutableDetails?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    deletable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    directoryName?: string;
    /**
     * 
     * @type {object}
     * @memberof RestDetailedUser
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    type?: RestDetailedUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    avatarUrl?: string;
}


/**
 * @export
 */
export const RestDetailedUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestDetailedUserTypeEnum = typeof RestDetailedUserTypeEnum[keyof typeof RestDetailedUserTypeEnum];

/**
 * 
 * @export
 * @interface RestDiff
 */
export interface RestDiff {
    /**
     * 
     * @type {Array<RestDiffHunk>}
     * @memberof RestDiff
     */
    hunks?: Array<RestDiffHunk>;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiff
     */
    binary?: boolean;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestDiff
     */
    destination?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestDiff
     */
    source?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiff
     */
    truncated?: boolean;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestDiff
     */
    lineComments?: Array<RestComment>;
    /**
     * 
     * @type {object}
     * @memberof RestDiff
     */
    properties?: object;
}
/**
 * 
 * @export
 * @interface RestDiffHunk
 */
export interface RestDiffHunk {
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    sourceLine?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    destinationSpan?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    sourceSpan?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    destinationLine?: number;
    /**
     * 
     * @type {Array<RestDiffSegment>}
     * @memberof RestDiffHunk
     */
    segments?: Array<RestDiffSegment>;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffHunk
     */
    truncated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDiffHunk
     */
    context?: string;
}
/**
 * 
 * @export
 * @interface RestDiffLine
 */
export interface RestDiffLine {
    /**
     * 
     * @type {string}
     * @memberof RestDiffLine
     */
    line?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDiffLine
     */
    destination?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffLine
     */
    source?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof RestDiffLine
     */
    commentIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof RestDiffLine
     */
    conflictMarker?: RestDiffLineConflictMarkerEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffLine
     */
    truncated?: boolean;
}


/**
 * @export
 */
export const RestDiffLineConflictMarkerEnum = {
    Marker: 'MARKER',
    Ours: 'OURS',
    Theirs: 'THEIRS'
} as const;
export type RestDiffLineConflictMarkerEnum = typeof RestDiffLineConflictMarkerEnum[keyof typeof RestDiffLineConflictMarkerEnum];

/**
 * 
 * @export
 * @interface RestDiffSegment
 */
export interface RestDiffSegment {
    /**
     * 
     * @type {Array<RestDiffLine>}
     * @memberof RestDiffSegment
     */
    lines?: Array<RestDiffLine>;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffSegment
     */
    truncated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDiffSegment
     */
    type?: RestDiffSegmentTypeEnum;
}


/**
 * @export
 */
export const RestDiffSegmentTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestDiffSegmentTypeEnum = typeof RestDiffSegmentTypeEnum[keyof typeof RestDiffSegmentTypeEnum];

/**
 * 
 * @export
 * @interface RestEmoticon
 */
export interface RestEmoticon {
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    shortcut?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestEnhancedEntityLink
 */
export interface RestEnhancedEntityLink {
    /**
     * 
     * @type {number}
     * @memberof RestEnhancedEntityLink
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    applicationLinkId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    displayUrl?: string;
}
/**
 * 
 * @export
 * @interface RestErasedUser
 */
export interface RestErasedUser {
    /**
     * 
     * @type {string}
     * @memberof RestErasedUser
     */
    newIdentifier?: string;
}
/**
 * 
 * @export
 * @interface RestErrorMessage
 */
export interface RestErrorMessage {
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    exceptionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    context?: string;
}
/**
 * 
 * @export
 * @interface RestErrors
 */
export interface RestErrors {
    /**
     * 
     * @type {Array<RestErrorMessage>}
     * @memberof RestErrors
     */
    errors?: Array<RestErrorMessage>;
}
/**
 * 
 * @export
 * @interface RestExportRequest
 */
export interface RestExportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestExportRequest
     */
    exportLocation?: string;
    /**
     * 
     * @type {RestExportRequestRepositoriesRequest}
     * @memberof RestExportRequest
     */
    repositoriesRequest: RestExportRequestRepositoriesRequest;
}
/**
 * 
 * @export
 * @interface RestExportRequestRepositoriesRequest
 */
export interface RestExportRequestRepositoriesRequest {
    /**
     * 
     * @type {Set<RestRepositorySelector>}
     * @memberof RestExportRequestRepositoriesRequest
     */
    includes: Set<RestRepositorySelector>;
}
/**
 * 
 * @export
 * @interface RestGitTagCreateRequest
 */
export interface RestGitTagCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestGitTagCreateRequest
     */
    force?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    startPoint?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    type?: RestGitTagCreateRequestTypeEnum;
}


/**
 * @export
 */
export const RestGitTagCreateRequestTypeEnum = {
    Annotated: 'ANNOTATED',
    Lightweight: 'LIGHTWEIGHT'
} as const;
export type RestGitTagCreateRequestTypeEnum = typeof RestGitTagCreateRequestTypeEnum[keyof typeof RestGitTagCreateRequestTypeEnum];

/**
 * 
 * @export
 * @interface RestGpgKey
 */
export interface RestGpgKey {
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    text?: string;
    /**
     * 
     * @type {number}
     * @memberof RestGpgKey
     */
    readonly expiryDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {Array<RestGpgSubKey>}
     * @memberof RestGpgKey
     */
    readonly subKeys?: Array<RestGpgSubKey>;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly fingerprint?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly id?: string;
}
/**
 * 
 * @export
 * @interface RestGpgSubKey
 */
export interface RestGpgSubKey {
    /**
     * 
     * @type {string}
     * @memberof RestGpgSubKey
     */
    expiryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGpgSubKey
     */
    fingerprint?: string;
}
/**
 * 
 * @export
 * @interface RestHookScript
 */
export interface RestHookScript {
    /**
     * 
     * @type {number}
     * @memberof RestHookScript
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    updatedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScript
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    type?: RestHookScriptTypeEnum;
}


/**
 * @export
 */
export const RestHookScriptTypeEnum = {
    Post: 'POST',
    Pre: 'PRE'
} as const;
export type RestHookScriptTypeEnum = typeof RestHookScriptTypeEnum[keyof typeof RestHookScriptTypeEnum];

/**
 * 
 * @export
 * @interface RestHookScriptConfig
 */
export interface RestHookScriptConfig {
    /**
     * 
     * @type {RestAutoDeclineSettingsScope}
     * @memberof RestHookScriptConfig
     */
    scope?: RestAutoDeclineSettingsScope;
    /**
     * 
     * @type {RestHookScriptConfigScript}
     * @memberof RestHookScriptConfig
     */
    script?: RestHookScriptConfigScript;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestHookScriptConfig
     */
    triggerIds?: Set<string>;
}
/**
 * 
 * @export
 * @interface RestHookScriptConfigScript
 */
export interface RestHookScriptConfigScript {
    /**
     * 
     * @type {number}
     * @memberof RestHookScriptConfigScript
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    updatedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScriptConfigScript
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    type?: RestHookScriptConfigScriptTypeEnum;
}


/**
 * @export
 */
export const RestHookScriptConfigScriptTypeEnum = {
    Post: 'POST',
    Pre: 'PRE'
} as const;
export type RestHookScriptConfigScriptTypeEnum = typeof RestHookScriptConfigScriptTypeEnum[keyof typeof RestHookScriptConfigScriptTypeEnum];

/**
 * 
 * @export
 * @interface RestHookScriptTriggers
 */
export interface RestHookScriptTriggers {
    /**
     * 
     * @type {Set<string>}
     * @memberof RestHookScriptTriggers
     */
    triggerIds?: Set<string>;
}
/**
 * 
 * @export
 * @interface RestImportRequest
 */
export interface RestImportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestImportRequest
     */
    archivePath?: string;
}
/**
 * 
 * @export
 * @interface RestInsightAnnotation
 */
export interface RestInsightAnnotation {
    /**
     * 
     * @type {number}
     * @memberof RestInsightAnnotation
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    reportKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    path?: string;
}
/**
 * 
 * @export
 * @interface RestInsightAnnotationsResponse
 */
export interface RestInsightAnnotationsResponse {
    /**
     * 
     * @type {Array<RestInsightAnnotation>}
     * @memberof RestInsightAnnotationsResponse
     */
    annotations?: Array<RestInsightAnnotation>;
}
/**
 * 
 * @export
 * @interface RestInsightReport
 */
export interface RestInsightReport {
    /**
     * 
     * @type {Array<RestInsightReportData>}
     * @memberof RestInsightReport
     */
    data?: Array<RestInsightReportData>;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    details?: string;
    /**
     * 
     * @type {number}
     * @memberof RestInsightReport
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    reporter?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    result?: RestInsightReportResultEnum;
}


/**
 * @export
 */
export const RestInsightReportResultEnum = {
    Fail: 'FAIL',
    Pass: 'PASS'
} as const;
export type RestInsightReportResultEnum = typeof RestInsightReportResultEnum[keyof typeof RestInsightReportResultEnum];

/**
 * 
 * @export
 * @interface RestInsightReportData
 */
export interface RestInsightReportData {
    /**
     * 
     * @type {string}
     * @memberof RestInsightReportData
     */
    title?: string;
    /**
     * 
     * @type {object}
     * @memberof RestInsightReportData
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReportData
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestJiraIssue
 */
export interface RestJiraIssue {
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestJob
 */
export interface RestJob {
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    endDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    startDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    nodeId?: string;
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestJob
     */
    initiator?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {RestJobProgress}
     * @memberof RestJob
     */
    progress?: RestJobProgress;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    state?: RestJobStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    type?: string;
}


/**
 * @export
 */
export const RestJobStateEnum = {
    Initialising: 'INITIALISING',
    Ready: 'READY',
    Running: 'RUNNING',
    Finalising: 'FINALISING',
    Completed: 'COMPLETED',
    Failed: 'FAILED',
    Canceling: 'CANCELING',
    Canceled: 'CANCELED',
    TimedOut: 'TIMED_OUT',
    Aborted: 'ABORTED'
} as const;
export type RestJobStateEnum = typeof RestJobStateEnum[keyof typeof RestJobStateEnum];

/**
 * 
 * @export
 * @interface RestJobMessage
 */
export interface RestJobMessage {
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    severity?: RestJobMessageSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    id?: string;
}


/**
 * @export
 */
export const RestJobMessageSeverityEnum = {
    Info: 'INFO',
    Warn: 'WARN',
    Error: 'ERROR'
} as const;
export type RestJobMessageSeverityEnum = typeof RestJobMessageSeverityEnum[keyof typeof RestJobMessageSeverityEnum];

/**
 * 
 * @export
 * @interface RestJobProgress
 */
export interface RestJobProgress {
    /**
     * 
     * @type {number}
     * @memberof RestJobProgress
     */
    percentage?: number;
    /**
     * 
     * @type {string}
     * @memberof RestJobProgress
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface RestLabel
 */
export interface RestLabel {
    /**
     * 
     * @type {string}
     * @memberof RestLabel
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestLabelable
 */
export interface RestLabelable {
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    labelableType?: RestLabelableLabelableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly defaultBranch?: string;
    /**
     * 
     * @type {EnrichedRepositoryOrigin}
     * @memberof RestLabelable
     */
    origin?: EnrichedRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestLabelable
     */
    readonly partition?: number;
    /**
     * 
     * @type {object}
     * @memberof RestLabelable
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestLabelable
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly state?: RestLabelableStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestLabelable
     */
    links?: object;
}


/**
 * @export
 */
export const RestLabelableLabelableTypeEnum = {
    Repository: 'REPOSITORY'
} as const;
export type RestLabelableLabelableTypeEnum = typeof RestLabelableLabelableTypeEnum[keyof typeof RestLabelableLabelableTypeEnum];

/**
 * @export
 */
export const RestLabelableStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestLabelableStateEnum = typeof RestLabelableStateEnum[keyof typeof RestLabelableStateEnum];

/**
 * 
 * @export
 * @interface RestLogLevel
 */
export interface RestLogLevel {
    /**
     * 
     * @type {string}
     * @memberof RestLogLevel
     */
    logLevel?: string;
}
/**
 * 
 * @export
 * @interface RestMailConfiguration
 */
export interface RestMailConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    senderAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    useStartTls?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    requireStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    protocol?: RestMailConfigurationProtocolEnum;
    /**
     * 
     * @type {number}
     * @memberof RestMailConfiguration
     */
    port?: number;
}


/**
 * @export
 */
export const RestMailConfigurationProtocolEnum = {
    Smtp: 'SMTP',
    Smtps: 'SMTPS'
} as const;
export type RestMailConfigurationProtocolEnum = typeof RestMailConfigurationProtocolEnum[keyof typeof RestMailConfigurationProtocolEnum];

/**
 * 
 * @export
 * @interface RestMarkup
 */
export interface RestMarkup {
    /**
     * 
     * @type {string}
     * @memberof RestMarkup
     */
    html?: string;
}
/**
 * 
 * @export
 * @interface RestMeshConnectivityReport
 */
export interface RestMeshConnectivityReport {
    /**
     * 
     * @type {Array<RestNodeConnectivityReport>}
     * @memberof RestMeshConnectivityReport
     */
    reports?: Array<RestNodeConnectivityReport>;
}
/**
 * 
 * @export
 * @interface RestMeshMigrationRequest
 */
export interface RestMeshMigrationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestMeshMigrationRequest
     */
    all?: boolean;
    /**
     * 
     * @type {RestMeshMigrationRequestMaxBytesPerSecond}
     * @memberof RestMeshMigrationRequest
     */
    maxBytesPerSecond?: RestMeshMigrationRequestMaxBytesPerSecond;
    /**
     * 
     * @type {Set<number>}
     * @memberof RestMeshMigrationRequest
     */
    projectIds?: Set<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof RestMeshMigrationRequest
     */
    repositoryIds?: Set<number>;
}
/**
 * 
 * @export
 * @interface RestMeshMigrationRequestMaxBytesPerSecond
 */
export interface RestMeshMigrationRequestMaxBytesPerSecond {
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationRequestMaxBytesPerSecond
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestMeshMigrationRequestMaxBytesPerSecond
     */
    present?: boolean;
}
/**
 * 
 * @export
 * @interface RestMeshMigrationSummary
 */
export interface RestMeshMigrationSummary {
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    jobId?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    endTime?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    maxBandwidth?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    progress?: number;
    /**
     * 
     * @type {object}
     * @memberof RestMeshMigrationSummary
     */
    queue?: object;
    /**
     * 
     * @type {string}
     * @memberof RestMeshMigrationSummary
     */
    state?: string;
}
/**
 * 
 * @export
 * @interface RestMeshNode
 */
export interface RestMeshNode {
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    rpcId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMeshNode
     */
    offline?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestMeshNode
     */
    lastSeenDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    rpcUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    state?: RestMeshNodeStateEnum;
}


/**
 * @export
 */
export const RestMeshNodeStateEnum = {
    Available: 'AVAILABLE',
    Deleting: 'DELETING',
    Disabled: 'DISABLED',
    Draining: 'DRAINING',
    Offline: 'OFFLINE'
} as const;
export type RestMeshNodeStateEnum = typeof RestMeshNodeStateEnum[keyof typeof RestMeshNodeStateEnum];

/**
 * 
 * @export
 * @interface RestMigrationRepository
 */
export interface RestMigrationRepository {
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestMigrationRepository
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestMigrationRepository
     */
    migrationState?: RestMigrationRepositoryMigrationStateEnum;
}


/**
 * @export
 */
export const RestMigrationRepositoryMigrationStateEnum = {
    Queued: 'QUEUED',
    Staging: 'STAGING',
    Staged: 'STAGED',
    Migrated: 'MIGRATED',
    Failed: 'FAILED',
    Canceled: 'CANCELED',
    Skipped: 'SKIPPED'
} as const;
export type RestMigrationRepositoryMigrationStateEnum = typeof RestMigrationRepositoryMigrationStateEnum[keyof typeof RestMigrationRepositoryMigrationStateEnum];

/**
 * 
 * @export
 * @interface RestMinimalCommit
 */
export interface RestMinimalCommit {
    /**
     * 
     * @type {string}
     * @memberof RestMinimalCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestMinimalRef
 */
export interface RestMinimalRef {
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    type?: RestMinimalRefTypeEnum;
}


/**
 * @export
 */
export const RestMinimalRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestMinimalRefTypeEnum = typeof RestMinimalRefTypeEnum[keyof typeof RestMinimalRefTypeEnum];

/**
 * 
 * @export
 * @interface RestMirrorServer
 */
export interface RestMirrorServer {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMirrorServer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    lastSeenDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    mirrorType?: RestMirrorServerMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    productType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    productVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    id?: string;
}


/**
 * @export
 */
export const RestMirrorServerMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirrorServerMirrorTypeEnum = typeof RestMirrorServerMirrorTypeEnum[keyof typeof RestMirrorServerMirrorTypeEnum];

/**
 * 
 * @export
 * @interface RestMirrorUpgradeRequest
 */
export interface RestMirrorUpgradeRequest {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    addonDescriptorUri?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    productType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    productVersion?: string;
}
/**
 * 
 * @export
 * @interface RestMirroredRepository
 */
export interface RestMirroredRepository {
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    status?: RestMirroredRepositoryStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    repositoryId?: string;
    /**
     * 
     * @type {Array<RestNamedLink>}
     * @memberof RestMirroredRepository
     */
    cloneUrls?: Array<RestNamedLink>;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    mirrorName?: string;
    /**
     * 
     * @type {Array<RestNamedLink>}
     * @memberof RestMirroredRepository
     */
    pushUrls?: Array<RestNamedLink>;
    /**
     * 
     * @type {boolean}
     * @memberof RestMirroredRepository
     */
    available?: boolean;
}


/**
 * @export
 */
export const RestMirroredRepositoryStatusEnum = {
    NotMirrored: 'NOT_MIRRORED',
    Initializing: 'INITIALIZING',
    Available: 'AVAILABLE',
    ErrorInitializing: 'ERROR_INITIALIZING',
    ErrorAvailable: 'ERROR_AVAILABLE'
} as const;
export type RestMirroredRepositoryStatusEnum = typeof RestMirroredRepositoryStatusEnum[keyof typeof RestMirroredRepositoryStatusEnum];

/**
 * 
 * @export
 * @interface RestMirroredRepositoryDescriptor
 */
export interface RestMirroredRepositoryDescriptor {
    /**
     * 
     * @type {RestMirroredRepositoryDescriptorMirrorServer}
     * @memberof RestMirroredRepositoryDescriptor
     */
    mirrorServer?: RestMirroredRepositoryDescriptorMirrorServer;
    /**
     * 
     * @type {object}
     * @memberof RestMirroredRepositoryDescriptor
     */
    links?: object;
}
/**
 * 
 * @export
 * @interface RestMirroredRepositoryDescriptorMirrorServer
 */
export interface RestMirroredRepositoryDescriptorMirrorServer {
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    lastSeenDate: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    mirrorType?: RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    productType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    productVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    id?: string;
}


/**
 * @export
 */
export const RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum = typeof RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum[keyof typeof RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum];

/**
 * 
 * @export
 * @interface RestMirroringRequest
 */
export interface RestMirroringRequest {
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorType?: RestMirroringRequestMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    productType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    productVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    addonDescriptorUri?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorBaseUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof RestMirroringRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    state?: RestMirroringRequestStateEnum;
}


/**
 * @export
 */
export const RestMirroringRequestMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirroringRequestMirrorTypeEnum = typeof RestMirroringRequestMirrorTypeEnum[keyof typeof RestMirroringRequestMirrorTypeEnum];

/**
 * @export
 */
export const RestMirroringRequestStateEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type RestMirroringRequestStateEnum = typeof RestMirroringRequestStateEnum[keyof typeof RestMirroringRequestStateEnum];

/**
 * 
 * @export
 * @interface RestNamedLink
 */
export interface RestNamedLink {
    /**
     * 
     * @type {string}
     * @memberof RestNamedLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNamedLink
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestNode
 */
export interface RestNode {
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    type?: RestNodeTypeEnum;
}


/**
 * @export
 */
export const RestNodeTypeEnum = {
    Bitbucket: 'BITBUCKET',
    Mesh: 'MESH'
} as const;
export type RestNodeTypeEnum = typeof RestNodeTypeEnum[keyof typeof RestNodeTypeEnum];

/**
 * 
 * @export
 * @interface RestNodeConnectivityReport
 */
export interface RestNodeConnectivityReport {
    /**
     * 
     * @type {Array<RestNodeConnectivitySummary>}
     * @memberof RestNodeConnectivityReport
     */
    summaries?: Array<RestNodeConnectivitySummary>;
    /**
     * 
     * @type {RestNodeConnectivityReportNode}
     * @memberof RestNodeConnectivityReport
     */
    node?: RestNodeConnectivityReportNode;
}
/**
 * 
 * @export
 * @interface RestNodeConnectivityReportNode
 */
export interface RestNodeConnectivityReportNode {
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    type?: RestNodeConnectivityReportNodeTypeEnum;
}


/**
 * @export
 */
export const RestNodeConnectivityReportNodeTypeEnum = {
    Bitbucket: 'BITBUCKET',
    Mesh: 'MESH'
} as const;
export type RestNodeConnectivityReportNodeTypeEnum = typeof RestNodeConnectivityReportNodeTypeEnum[keyof typeof RestNodeConnectivityReportNodeTypeEnum];

/**
 * 
 * @export
 * @interface RestNodeConnectivitySummary
 */
export interface RestNodeConnectivitySummary {
    /**
     * 
     * @type {RestNodeConnectivitySummarySummary}
     * @memberof RestNodeConnectivitySummary
     */
    summary?: RestNodeConnectivitySummarySummary;
    /**
     * 
     * @type {RestNodeConnectivityReportNode}
     * @memberof RestNodeConnectivitySummary
     */
    node?: RestNodeConnectivityReportNode;
}
/**
 * 
 * @export
 * @interface RestNodeConnectivitySummarySummary
 */
export interface RestNodeConnectivitySummarySummary {
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivitySummarySummary
     */
    errorMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof RestNodeConnectivitySummarySummary
     */
    roundTripTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestNodeConnectivitySummarySummary
     */
    reachable?: boolean;
}
/**
 * 
 * @export
 * @interface RestPageRestChange
 */
export interface RestPageRestChange {
    /**
     * 
     * @type {object}
     * @memberof RestPageRestChange
     */
    values?: object;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestPageRestChange
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface RestPath
 */
export interface RestPath {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestPath
     */
    components?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    extension?: string;
}
/**
 * 
 * @export
 * @interface RestPermitted
 */
export interface RestPermitted {
    /**
     * 
     * @type {boolean}
     * @memberof RestPermitted
     */
    permitted?: boolean;
}
/**
 * 
 * @export
 * @interface RestPermittedGroup
 */
export interface RestPermittedGroup {
    /**
     * 
     * @type {RestPermittedGroupGroup}
     * @memberof RestPermittedGroup
     */
    group?: RestPermittedGroupGroup;
    /**
     * 
     * @type {string}
     * @memberof RestPermittedGroup
     */
    permission?: string;
}
/**
 * 
 * @export
 * @interface RestPermittedGroupGroup
 */
export interface RestPermittedGroupGroup {
    /**
     * 
     * @type {string}
     * @memberof RestPermittedGroupGroup
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestPermittedUser
 */
export interface RestPermittedUser {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestPermittedUser
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {string}
     * @memberof RestPermittedUser
     */
    permission?: RestPermittedUserPermissionEnum;
}


/**
 * @export
 */
export const RestPermittedUserPermissionEnum = {
    UserAdmin: 'USER_ADMIN',
    ProjectView: 'PROJECT_VIEW',
    RepoRead: 'REPO_READ',
    RepoWrite: 'REPO_WRITE',
    RepoAdmin: 'REPO_ADMIN',
    ProjectRead: 'PROJECT_READ',
    ProjectWrite: 'PROJECT_WRITE',
    RepoCreate: 'REPO_CREATE',
    ProjectAdmin: 'PROJECT_ADMIN',
    LicensedUser: 'LICENSED_USER',
    ProjectCreate: 'PROJECT_CREATE',
    Admin: 'ADMIN',
    SysAdmin: 'SYS_ADMIN'
} as const;
export type RestPermittedUserPermissionEnum = typeof RestPermittedUserPermissionEnum[keyof typeof RestPermittedUserPermissionEnum];

/**
 * 
 * @export
 * @interface RestPerson
 */
export interface RestPerson {
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestProgress
 */
export interface RestProgress {
    /**
     * 
     * @type {number}
     * @memberof RestProgress
     */
    percentage?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface RestProject
 */
export interface RestProject {
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     * @deprecated
     */
    readonly namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProject
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly type?: RestProjectTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestProject
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestProject
     */
    links?: object;
}


/**
 * @export
 */
export const RestProjectTypeEnum = {
    Normal: 'NORMAL',
    Personal: 'PERSONAL'
} as const;
export type RestProjectTypeEnum = typeof RestProjectTypeEnum[keyof typeof RestProjectTypeEnum];

/**
 * 
 * @export
 * @interface RestProperties
 */
export interface RestProperties {
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    defaultBranchId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    metadataHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    contentHash?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequest
 */
export interface RestPullRequest {
    /**
     * 
     * @type {RestPullRequestToRef}
     * @memberof RestPullRequest
     */
    toRef?: RestPullRequestToRef;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    htmlDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    closedDate?: number;
    /**
     * 
     * @type {RestPullRequestToRef}
     * @memberof RestPullRequest
     */
    fromRef?: RestPullRequestToRef;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestPullRequest
     */
    participants?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestPullRequest
     */
    reviewers?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    updatedDate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    state?: RestPullRequestStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequest
     */
    links?: object;
}


/**
 * @export
 */
export const RestPullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type RestPullRequestStateEnum = typeof RestPullRequestStateEnum[keyof typeof RestPullRequestStateEnum];

/**
 * 
 * @export
 * @interface RestPullRequestActivity
 */
export interface RestPullRequestActivity {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestActivity
     */
    action?: RestPullRequestActivityActionEnum;
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestPullRequestActivity
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestActivity
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestActivity
     */
    id?: number;
}


/**
 * @export
 */
export const RestPullRequestActivityActionEnum = {
    Approved: 'APPROVED',
    Commented: 'COMMENTED',
    Declined: 'DECLINED',
    Deleted: 'DELETED',
    Merged: 'MERGED',
    Opened: 'OPENED',
    Reopened: 'REOPENED',
    Rescoped: 'RESCOPED',
    ReviewCommented: 'REVIEW_COMMENTED',
    ReviewDiscarded: 'REVIEW_DISCARDED',
    ReviewFinished: 'REVIEW_FINISHED',
    Reviewed: 'REVIEWED',
    Unapproved: 'UNAPPROVED',
    Updated: 'UPDATED'
} as const;
export type RestPullRequestActivityActionEnum = typeof RestPullRequestActivityActionEnum[keyof typeof RestPullRequestActivityActionEnum];

/**
 * 
 * @export
 * @interface RestPullRequestCondition
 */
export interface RestPullRequestCondition {
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestPullRequestCondition
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestPullRequestCondition
     */
    reviewers?: Array<RestApplicationUser>;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestCondition
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {RestRequiredBuildConditionRefMatcher}
     * @memberof RestPullRequestCondition
     */
    targetRefMatcher?: RestRequiredBuildConditionRefMatcher;
    /**
     * 
     * @type {RestRequiredBuildConditionRefMatcher}
     * @memberof RestPullRequestCondition
     */
    sourceRefMatcher?: RestRequiredBuildConditionRefMatcher;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestCondition
     */
    readonly id?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestConditionScope
 */
export interface RestPullRequestConditionScope {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestConditionScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestConditionScope
     */
    type?: RestPullRequestConditionScopeTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestConditionScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestPullRequestConditionScopeTypeEnum = typeof RestPullRequestConditionScopeTypeEnum[keyof typeof RestPullRequestConditionScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestDeclineRequest
 */
export interface RestPullRequestDeclineRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestDeclineRequest
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestDeclineRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestDeleteRequest
 */
export interface RestPullRequestDeleteRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestDeleteRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestFinishReviewRequest
 */
export interface RestPullRequestFinishReviewRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestFinishReviewRequest
     */
    commentText?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestFinishReviewRequest
     */
    participantStatus?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeConfig
 */
export interface RestPullRequestMergeConfig {
    /**
     * 
     * @type {Array<RestPullRequestMergeStrategy>}
     * @memberof RestPullRequestMergeConfig
     */
    strategies?: Array<RestPullRequestMergeStrategy>;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestMergeConfig
     */
    commitSummaries?: number;
    /**
     * 
     * @type {RestPullRequestMergeConfigDefaultStrategy}
     * @memberof RestPullRequestMergeConfig
     */
    defaultStrategy?: RestPullRequestMergeConfigDefaultStrategy;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfig
     */
    readonly type?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeConfigDefaultStrategy
 */
export interface RestPullRequestMergeConfigDefaultStrategy {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly flag?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    id?: string;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    links?: object;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeRequest
 */
export interface RestPullRequestMergeRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    autoSubject?: string;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequestMergeRequest
     */
    context?: object;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    strategyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestMergeRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeStrategy
 */
export interface RestPullRequestMergeStrategy {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly flag?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    id?: string;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequestMergeStrategy
     */
    links?: object;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeability
 */
export interface RestPullRequestMergeability {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeability
     */
    outcome?: RestPullRequestMergeabilityOutcomeEnum;
    /**
     * 
     * @type {Array<RestRepositoryHookVeto>}
     * @memberof RestPullRequestMergeability
     */
    vetoes?: Array<RestRepositoryHookVeto>;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeability
     */
    conflicted?: boolean;
}


/**
 * @export
 */
export const RestPullRequestMergeabilityOutcomeEnum = {
    Clean: 'CLEAN',
    Conflicted: 'CONFLICTED',
    Unknown: 'UNKNOWN'
} as const;
export type RestPullRequestMergeabilityOutcomeEnum = typeof RestPullRequestMergeabilityOutcomeEnum[keyof typeof RestPullRequestMergeabilityOutcomeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestParticipant
 */
export interface RestPullRequestParticipant {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestPullRequestParticipant
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    role?: RestPullRequestParticipantRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    status?: RestPullRequestParticipantStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestParticipant
     */
    approved?: boolean;
}


/**
 * @export
 */
export const RestPullRequestParticipantRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type RestPullRequestParticipantRoleEnum = typeof RestPullRequestParticipantRoleEnum[keyof typeof RestPullRequestParticipantRoleEnum];

/**
 * @export
 */
export const RestPullRequestParticipantStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type RestPullRequestParticipantStatusEnum = typeof RestPullRequestParticipantStatusEnum[keyof typeof RestPullRequestParticipantStatusEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseRequest
 */
export interface RestPullRequestRebaseRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestRebaseRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestRebaseResult
 */
export interface RestPullRequestRebaseResult {
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChange}
     * @memberof RestPullRequestRebaseResult
     */
    refChange?: RestPullRequestRebaseResultRefChange;
}
/**
 * 
 * @export
 * @interface RestPullRequestRebaseResultRefChange
 */
export interface RestPullRequestRebaseResultRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    type?: RestPullRequestRebaseResultRefChangeTypeEnum;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
}


/**
 * @export
 */
export const RestPullRequestRebaseResultRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestPullRequestRebaseResultRefChangeTypeEnum = typeof RestPullRequestRebaseResultRefChangeTypeEnum[keyof typeof RestPullRequestRebaseResultRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseResultRefChangeRef
 */
export interface RestPullRequestRebaseResultRefChangeRef {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    type?: RestPullRequestRebaseResultRefChangeRefTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestRebaseResultRefChangeRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestPullRequestRebaseResultRefChangeRefTypeEnum = typeof RestPullRequestRebaseResultRefChangeRefTypeEnum[keyof typeof RestPullRequestRebaseResultRefChangeRefTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseability
 */
export interface RestPullRequestRebaseability {
    /**
     * 
     * @type {Array<RestRepositoryHookVeto>}
     * @memberof RestPullRequestRebaseability
     */
    vetoes?: Array<RestRepositoryHookVeto>;
}
/**
 * 
 * @export
 * @interface RestPullRequestRef
 */
export interface RestPullRequestRef {
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestPullRequestRef
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    latestCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    type?: RestPullRequestRefTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestPullRequestRefTypeEnum = typeof RestPullRequestRefTypeEnum[keyof typeof RestPullRequestRefTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestReopenRequest
 */
export interface RestPullRequestReopenRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestReopenRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestSettings
 */
export interface RestPullRequestSettings {
    /**
     * 
     * @type {RestPullRequestSettingsMergeConfig}
     * @memberof RestPullRequestSettings
     */
    mergeConfig?: RestPullRequestSettingsMergeConfig;
}
/**
 * 
 * @export
 * @interface RestPullRequestSettingsMergeConfig
 */
export interface RestPullRequestSettingsMergeConfig {
    /**
     * 
     * @type {Array<RestPullRequestMergeStrategy>}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    strategies?: Array<RestPullRequestMergeStrategy>;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    commitSummaries?: number;
    /**
     * 
     * @type {RestPullRequestMergeConfigDefaultStrategy}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    defaultStrategy?: RestPullRequestMergeConfigDefaultStrategy;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    readonly type?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestSuggestion
 */
export interface RestPullRequestSuggestion {
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestSuggestion
     */
    toRef?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestPullRequestSuggestion
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestSuggestion
     */
    fromRef?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestSuggestion
     */
    changeTme?: number;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChange}
     * @memberof RestPullRequestSuggestion
     */
    refChange?: RestPullRequestRebaseResultRefChange;
}
/**
 * 
 * @export
 * @interface RestPullRequestToRef
 */
export interface RestPullRequestToRef {
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestPullRequestToRef
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestToRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestToRef
     */
    latestCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestToRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestToRef
     */
    type?: RestPullRequestToRefTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestToRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestPullRequestToRefTypeEnum = typeof RestPullRequestToRefTypeEnum[keyof typeof RestPullRequestToRefTypeEnum];

/**
 * 
 * @export
 * @interface RestPushRefChange
 */
export interface RestPushRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    updatedType?: RestPushRefChangeUpdatedTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    type?: RestPushRefChangeTypeEnum;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPushRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
}


/**
 * @export
 */
export const RestPushRefChangeUpdatedTypeEnum = {
    Unknown: 'UNKNOWN',
    Unresolved: 'UNRESOLVED',
    NotForced: 'NOT_FORCED',
    Forced: 'FORCED'
} as const;
export type RestPushRefChangeUpdatedTypeEnum = typeof RestPushRefChangeUpdatedTypeEnum[keyof typeof RestPushRefChangeUpdatedTypeEnum];

/**
 * @export
 */
export const RestPushRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestPushRefChangeTypeEnum = typeof RestPushRefChangeTypeEnum[keyof typeof RestPushRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestRateLimitSettings
 */
export interface RestRateLimitSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestRateLimitSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestRateLimitSettings
     */
    defaultSettings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
}
/**
 * 
 * @export
 * @interface RestRawAccessToken
 */
export interface RestRawAccessToken {
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestRefChange
 */
export interface RestRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    type?: RestRefChangeTypeEnum;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
}


/**
 * @export
 */
export const RestRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestRefChangeTypeEnum = typeof RestRefChangeTypeEnum[keyof typeof RestRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestRefMatcher
 */
export interface RestRefMatcher {
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcher
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcher
     */
    id?: string;
    /**
     * 
     * @type {RestRefMatcherType}
     * @memberof RestRefMatcher
     */
    type?: RestRefMatcherType;
}
/**
 * 
 * @export
 * @interface RestRefMatcherType
 */
export interface RestRefMatcherType {
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcherType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcherType
     */
    id?: RestRefMatcherTypeIdEnum;
}


/**
 * @export
 */
export const RestRefMatcherTypeIdEnum = {
    AnyRef: 'ANY_REF',
    Branch: 'BRANCH',
    Pattern: 'PATTERN',
    ModelCategory: 'MODEL_CATEGORY',
    ModelBranch: 'MODEL_BRANCH'
} as const;
export type RestRefMatcherTypeIdEnum = typeof RestRefMatcherTypeIdEnum[keyof typeof RestRefMatcherTypeIdEnum];

/**
 * 
 * @export
 * @interface RestRefRestriction
 */
export interface RestRefRestriction {
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestRefRestriction
     */
    users?: Array<RestApplicationUser>;
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestRefRestriction
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRefRestriction
     */
    groups?: Array<string>;
    /**
     * 
     * @type {RestRequiredBuildConditionRefMatcher}
     * @memberof RestRefRestriction
     */
    matcher?: RestRequiredBuildConditionRefMatcher;
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof RestRefRestriction
     */
    accessKeys?: Array<RestSshAccessKey>;
    /**
     * 
     * @type {number}
     * @memberof RestRefRestriction
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRefRestriction
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestRefSyncRequest
 */
export interface RestRefSyncRequest {
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncRequest
     */
    action?: RestRefSyncRequestActionEnum;
    /**
     * 
     * @type {Context}
     * @memberof RestRefSyncRequest
     */
    context?: Context;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncRequest
     */
    refId?: string;
}


/**
 * @export
 */
export const RestRefSyncRequestActionEnum = {
    Discard: 'DISCARD',
    Merge: 'MERGE',
    Rebase: 'REBASE'
} as const;
export type RestRefSyncRequestActionEnum = typeof RestRefSyncRequestActionEnum[keyof typeof RestRefSyncRequestActionEnum];

/**
 * 
 * @export
 * @interface RestRefSyncStatus
 */
export interface RestRefSyncStatus {
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatus
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestRefSyncStatus
     */
    readonly lastSync?: number;
    /**
     * 
     * @type {RestRefSyncStatusOrphanedRefs}
     * @memberof RestRefSyncStatus
     */
    orphanedRefs?: RestRefSyncStatusOrphanedRefs;
    /**
     * 
     * @type {RestRefSyncStatusOrphanedRefs}
     * @memberof RestRefSyncStatus
     */
    divergedRefs?: RestRefSyncStatusOrphanedRefs;
    /**
     * 
     * @type {RestRefSyncStatusOrphanedRefs}
     * @memberof RestRefSyncStatus
     */
    aheadRefs?: RestRefSyncStatusOrphanedRefs;
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatus
     */
    readonly available?: boolean;
}
/**
 * 
 * @export
 * @interface RestRefSyncStatusOrphanedRefs
 */
export interface RestRefSyncStatusOrphanedRefs {
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatusOrphanedRefs
     */
    tag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusOrphanedRefs
     */
    state?: RestRefSyncStatusOrphanedRefsStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusOrphanedRefs
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusOrphanedRefs
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusOrphanedRefs
     */
    type?: RestRefSyncStatusOrphanedRefsTypeEnum;
}


/**
 * @export
 */
export const RestRefSyncStatusOrphanedRefsStateEnum = {
    Ahead: 'AHEAD',
    Diverged: 'DIVERGED',
    Orphaned: 'ORPHANED'
} as const;
export type RestRefSyncStatusOrphanedRefsStateEnum = typeof RestRefSyncStatusOrphanedRefsStateEnum[keyof typeof RestRefSyncStatusOrphanedRefsStateEnum];

/**
 * @export
 */
export const RestRefSyncStatusOrphanedRefsTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestRefSyncStatusOrphanedRefsTypeEnum = typeof RestRefSyncStatusOrphanedRefsTypeEnum[keyof typeof RestRefSyncStatusOrphanedRefsTypeEnum];

/**
 * 
 * @export
 * @interface RestRejectedRef
 */
export interface RestRejectedRef {
    /**
     * 
     * @type {boolean}
     * @memberof RestRejectedRef
     */
    tag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    state?: RestRejectedRefStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    type?: RestRejectedRefTypeEnum;
}


/**
 * @export
 */
export const RestRejectedRefStateEnum = {
    Ahead: 'AHEAD',
    Diverged: 'DIVERGED',
    Orphaned: 'ORPHANED'
} as const;
export type RestRejectedRefStateEnum = typeof RestRejectedRefStateEnum[keyof typeof RestRejectedRefStateEnum];

/**
 * @export
 */
export const RestRejectedRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestRejectedRefTypeEnum = typeof RestRejectedRefTypeEnum[keyof typeof RestRejectedRefTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositoriesExportRequest
 */
export interface RestRepositoriesExportRequest {
    /**
     * 
     * @type {Set<RestRepositorySelector>}
     * @memberof RestRepositoriesExportRequest
     */
    includes: Set<RestRepositorySelector>;
}
/**
 * 
 * @export
 * @interface RestRepository
 */
export interface RestRepository {
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly defaultBranch?: string;
    /**
     * 
     * @type {EnrichedRepositoryOrigin}
     * @memberof RestRepository
     */
    origin?: EnrichedRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {object}
     * @memberof RestRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly state?: RestRepositoryStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestRepository
     */
    links?: object;
}


/**
 * @export
 */
export const RestRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestRepositoryStateEnum = typeof RestRepositoryStateEnum[keyof typeof RestRepositoryStateEnum];

/**
 * 
 * @export
 * @interface RestRepositoryHook
 */
export interface RestRepositoryHook {
    /**
     * 
     * @type {RestAutoDeclineSettingsScope}
     * @memberof RestRepositoryHook
     */
    scope?: RestAutoDeclineSettingsScope;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryHook
     */
    enabled?: boolean;
    /**
     * 
     * @type {RepositoryHookDetails}
     * @memberof RestRepositoryHook
     */
    details?: RepositoryHookDetails;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryHook
     */
    configured?: boolean;
}
/**
 * 
 * @export
 * @interface RestRepositoryHookVeto
 */
export interface RestRepositoryHookVeto {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryHookVeto
     */
    detailedMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryHookVeto
     */
    summaryMessage?: string;
}
/**
 * 
 * @export
 * @interface RestRepositoryMirrorEvent
 */
export interface RestRepositoryMirrorEvent {
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryMirrorEvent
     */
    mirrorRepoId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMirrorEvent
     */
    type?: RestRepositoryMirrorEventTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMirrorEvent
     */
    upstreamRepoId?: string;
}


/**
 * @export
 */
export const RestRepositoryMirrorEventTypeEnum = {
    Synchronized: 'SYNCHRONIZED',
    SynchronizationFailed: 'SYNCHRONIZATION_FAILED'
} as const;
export type RestRepositoryMirrorEventTypeEnum = typeof RestRepositoryMirrorEventTypeEnum[keyof typeof RestRepositoryMirrorEventTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositoryPolicy
 */
export interface RestRepositoryPolicy {
    /**
     * The permission required to delete repositories. Must be one of: "SYS_ADMIN", "ADMIN", "PROJECT_ADMIN", "REPO_ADMIN".
     * @type {string}
     * @memberof RestRepositoryPolicy
     */
    permission?: RestRepositoryPolicyPermissionEnum;
}


/**
 * @export
 */
export const RestRepositoryPolicyPermissionEnum = {
    SysAdmin: 'SYS_ADMIN',
    Admin: 'ADMIN',
    ProjectAdmin: 'PROJECT_ADMIN',
    RepoAdmin: 'REPO_ADMIN'
} as const;
export type RestRepositoryPolicyPermissionEnum = typeof RestRepositoryPolicyPermissionEnum[keyof typeof RestRepositoryPolicyPermissionEnum];

/**
 * 
 * @export
 * @interface RestRepositoryPullRequestSettings
 */
export interface RestRepositoryPullRequestSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredAllTasksComplete?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredApproversDeprecated?: number;
    /**
     * 
     * @type {RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredSuccessfulBuilds?: RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredSuccessfulBuildsDeprecated?: number;
    /**
     * 
     * @type {RestPullRequestSettingsMergeConfig}
     * @memberof RestRepositoryPullRequestSettings
     */
    mergeConfig?: RestPullRequestSettingsMergeConfig;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredAllApprovers?: boolean;
    /**
     * 
     * @type {RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredApprovers?: RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds;
}
/**
 * 
 * @export
 * @interface RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds
 */
export interface RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds
     */
    count?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettingsRequiredSuccessfulBuilds
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestRepositoryRefChangeActivity
 */
export interface RestRepositoryRefChangeActivity {
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestRepositoryRefChangeActivity
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivity
     */
    trigger?: string;
    /**
     * 
     * @type {RestRepositoryRefChangeActivityRefChange}
     * @memberof RestRepositoryRefChangeActivity
     */
    refChange?: RestRepositoryRefChangeActivityRefChange;
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestRepositoryRefChangeActivity
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryRefChangeActivity
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryRefChangeActivity
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestRepositoryRefChangeActivityRefChange
 */
export interface RestRepositoryRefChangeActivityRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    updatedType?: RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    type?: RestRepositoryRefChangeActivityRefChangeTypeEnum;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
}


/**
 * @export
 */
export const RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum = {
    Unknown: 'UNKNOWN',
    Unresolved: 'UNRESOLVED',
    NotForced: 'NOT_FORCED',
    Forced: 'FORCED'
} as const;
export type RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum = typeof RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum[keyof typeof RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum];

/**
 * @export
 */
export const RestRepositoryRefChangeActivityRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestRepositoryRefChangeActivityRefChangeTypeEnum = typeof RestRepositoryRefChangeActivityRefChangeTypeEnum[keyof typeof RestRepositoryRefChangeActivityRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositorySelector
 */
export interface RestRepositorySelector {
    /**
     * 
     * @type {string}
     * @memberof RestRepositorySelector
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositorySelector
     */
    slug?: string;
}
/**
 * 
 * @export
 * @interface RestRequiredBuildCondition
 */
export interface RestRequiredBuildCondition {
    /**
     * A non-empty list of build parent keys that require green builds for this merge check to pass
     * @type {Array<string>}
     * @memberof RestRequiredBuildCondition
     */
    buildParentKeys?: Array<string>;
    /**
     * 
     * @type {RestRequiredBuildConditionRefMatcher}
     * @memberof RestRequiredBuildCondition
     */
    refMatcher?: RestRequiredBuildConditionRefMatcher;
    /**
     * 
     * @type {RestRequiredBuildConditionRefMatcher}
     * @memberof RestRequiredBuildCondition
     */
    exemptRefMatcher?: RestRequiredBuildConditionRefMatcher;
    /**
     * 
     * @type {number}
     * @memberof RestRequiredBuildCondition
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestRequiredBuildConditionRefMatcher
 */
export interface RestRequiredBuildConditionRefMatcher {
    /**
     * 
     * @type {string}
     * @memberof RestRequiredBuildConditionRefMatcher
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRequiredBuildConditionRefMatcher
     */
    id?: string;
    /**
     * 
     * @type {RestRefMatcherType}
     * @memberof RestRequiredBuildConditionRefMatcher
     */
    type?: RestRefMatcherType;
}
/**
 * 
 * @export
 * @interface RestRequiredBuildConditionSetRequest
 */
export interface RestRequiredBuildConditionSetRequest {
    /**
     * A non-empty list of build parent keys that require green builds for this merge check to pass
     * @type {Array<string>}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    buildParentKeys: Array<string>;
    /**
     * 
     * @type {RestRefMatcher}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    exemptRefMatcher?: RestRefMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    refMatcher: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestRestrictionRequest
 */
export interface RestRestrictionRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof RestRestrictionRequest
     */
    accessKeyIds?: Array<number>;
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof RestRestrictionRequest
     */
    accessKeys?: Array<RestSshAccessKey>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    groupNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    groups?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RestRestrictionRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRestrictionRequest
     */
    matcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestRestrictionRequest
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {string}
     * @memberof RestRestrictionRequest
     */
    type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    userSlugs?: Array<string>;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestRestrictionRequest
     */
    users?: Array<RestApplicationUser>;
}
/**
 * 
 * @export
 * @interface RestReviewerGroup
 */
export interface RestReviewerGroup {
    /**
     * 
     * @type {Array<ApplicationUser>}
     * @memberof RestReviewerGroup
     */
    users?: Array<ApplicationUser>;
    /**
     * 
     * @type {RestAutoDeclineSettingsScope}
     * @memberof RestReviewerGroup
     */
    scope?: RestAutoDeclineSettingsScope;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestReviewerGroup
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestScope
 */
export interface RestScope {
    /**
     * 
     * @type {number}
     * @memberof RestScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestScope
     */
    type?: RestScopeTypeEnum;
}


/**
 * @export
 */
export const RestScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestScopeTypeEnum = typeof RestScopeTypeEnum[keyof typeof RestScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestScopesExample
 */
export interface RestScopesExample {
    /**
     * 
     * @type {Array<object>}
     * @memberof RestScopesExample
     */
    scopes?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof RestScopesExample
     */
    links?: object;
}
/**
 * 
 * @export
 * @interface RestSecretScanningAllowlistRule
 */
export interface RestSecretScanningAllowlistRule {
    /**
     * If present, regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    lineRegex?: string;
    /**
     * If present, regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    pathRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    name?: string;
    /**
     * The ID of the rule
     * @type {number}
     * @memberof RestSecretScanningAllowlistRule
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestSecretScanningAllowlistRuleSetRequest
 */
export interface RestSecretScanningAllowlistRuleSetRequest {
    /**
     * Regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    name?: string;
    /**
     * Regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    pathRegex?: string;
}
/**
 * 
 * @export
 * @interface RestSecretScanningRule
 */
export interface RestSecretScanningRule {
    /**
     * 
     * @type {RestSecretScanningRuleScope}
     * @memberof RestSecretScanningRule
     */
    scope?: RestSecretScanningRuleScope;
    /**
     * If present, regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    lineRegex?: string;
    /**
     * If present, regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    pathRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    name?: string;
    /**
     * The ID of the rule
     * @type {number}
     * @memberof RestSecretScanningRule
     */
    id?: number;
}
/**
 * The scope in which this rule was configured for.
 * @export
 * @interface RestSecretScanningRuleScope
 */
export interface RestSecretScanningRuleScope {
    /**
     * 
     * @type {number}
     * @memberof RestSecretScanningRuleScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSecretScanningRuleScope
     */
    type?: RestSecretScanningRuleScopeTypeEnum;
}


/**
 * @export
 */
export const RestSecretScanningRuleScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestSecretScanningRuleScopeTypeEnum = typeof RestSecretScanningRuleScopeTypeEnum[keyof typeof RestSecretScanningRuleScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestSecretScanningRuleSetRequest
 */
export interface RestSecretScanningRuleSetRequest {
    /**
     * Regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    name?: string;
    /**
     * Regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    pathRegex?: string;
}
/**
 * 
 * @export
 * @interface RestSetInsightReportRequest
 */
export interface RestSetInsightReportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    coverageProviderKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSetInsightReportRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {Array<RestInsightReportData>}
     * @memberof RestSetInsightReportRequest
     */
    data: Array<RestInsightReportData>;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    reporter?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    title: string;
}
/**
 * 
 * @export
 * @interface RestSingleAddInsightAnnotationRequest
 */
export interface RestSingleAddInsightAnnotationRequest {
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    severity: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestSshAccessKey
 */
export interface RestSshAccessKey {
    /**
     * 
     * @type {RestSshAccessKeyProject}
     * @memberof RestSshAccessKey
     */
    project?: RestSshAccessKeyProject;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestSshAccessKey
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {RestSshAccessKeyKey}
     * @memberof RestSshAccessKey
     */
    key?: RestSshAccessKeyKey;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKey
     */
    permission?: RestSshAccessKeyPermissionEnum;
}


/**
 * @export
 */
export const RestSshAccessKeyPermissionEnum = {
    UserAdmin: 'USER_ADMIN',
    ProjectView: 'PROJECT_VIEW',
    RepoRead: 'REPO_READ',
    RepoWrite: 'REPO_WRITE',
    RepoAdmin: 'REPO_ADMIN',
    ProjectRead: 'PROJECT_READ',
    ProjectWrite: 'PROJECT_WRITE',
    RepoCreate: 'REPO_CREATE',
    ProjectAdmin: 'PROJECT_ADMIN',
    LicensedUser: 'LICENSED_USER',
    ProjectCreate: 'PROJECT_CREATE',
    Admin: 'ADMIN',
    SysAdmin: 'SYS_ADMIN'
} as const;
export type RestSshAccessKeyPermissionEnum = typeof RestSshAccessKeyPermissionEnum[keyof typeof RestSshAccessKeyPermissionEnum];

/**
 * 
 * @export
 * @interface RestSshAccessKeyKey
 */
export interface RestSshAccessKeyKey {
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyKey
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyKey
     */
    readonly label?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyKey
     */
    algorithmType?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshAccessKeyKey
     */
    bitLength?: number;
    /**
     * 
     * @type {number}
     * @memberof RestSshAccessKeyKey
     */
    readonly id?: number;
}
/**
 * 
 * @export
 * @interface RestSshAccessKeyLocations
 */
export interface RestSshAccessKeyLocations {
    /**
     * 
     * @type {RestProject}
     * @memberof RestSshAccessKeyLocations
     */
    projects?: RestProject;
    /**
     * 
     * @type {RestRepository}
     * @memberof RestSshAccessKeyLocations
     */
    repositories?: RestRepository;
}
/**
 * 
 * @export
 * @interface RestSshAccessKeyProject
 */
export interface RestSshAccessKeyProject {
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     * @deprecated
     */
    readonly namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshAccessKeyProject
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKeyProject
     */
    readonly type?: RestSshAccessKeyProjectTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestSshAccessKeyProject
     */
    readonly _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestSshAccessKeyProject
     */
    links?: object;
}


/**
 * @export
 */
export const RestSshAccessKeyProjectTypeEnum = {
    Normal: 'NORMAL',
    Personal: 'PERSONAL'
} as const;
export type RestSshAccessKeyProjectTypeEnum = typeof RestSshAccessKeyProjectTypeEnum[keyof typeof RestSshAccessKeyProjectTypeEnum];

/**
 * 
 * @export
 * @interface RestSshKey
 */
export interface RestSshKey {
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    readonly label?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    algorithmType?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshKey
     */
    bitLength?: number;
    /**
     * 
     * @type {number}
     * @memberof RestSshKey
     */
    readonly id?: number;
}
/**
 * 
 * @export
 * @interface RestSshSettings
 */
export interface RestSshSettings {
    /**
     * 
     * @type {string}
     * @memberof RestSshSettings
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestSshSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSshSettings
     */
    accessKeysEnabled?: boolean;
    /**
     * 
     * @type {SimpleSshKeyFingerprint}
     * @memberof RestSshSettings
     */
    fingerprint?: SimpleSshKeyFingerprint;
    /**
     * 
     * @type {number}
     * @memberof RestSshSettings
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface RestSyncProgress
 */
export interface RestSyncProgress {
    /**
     * 
     * @type {number}
     * @memberof RestSyncProgress
     */
    syncedRepos?: number;
    /**
     * 
     * @type {number}
     * @memberof RestSyncProgress
     */
    totalRepos?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestSyncProgress
     */
    discovering?: boolean;
}
/**
 * 
 * @export
 * @interface RestTag
 */
export interface RestTag {
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    readonly latestCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    readonly latestChangeset?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    type?: RestTagTypeEnum;
}


/**
 * @export
 */
export const RestTagTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestTagTypeEnum = typeof RestTagTypeEnum[keyof typeof RestTagTypeEnum];

/**
 * 
 * @export
 * @interface RestTestResults
 */
export interface RestTestResults {
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    skipped?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    successful?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    failed?: number;
}
/**
 * 
 * @export
 * @interface RestTokenBucketSettings
 */
export interface RestTokenBucketSettings {
    /**
     * 
     * @type {number}
     * @memberof RestTokenBucketSettings
     */
    capacity?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTokenBucketSettings
     */
    fillRate?: number;
}
/**
 * 
 * @export
 * @interface RestUpstreamServer
 */
export interface RestUpstreamServer {
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    apiBaseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    state?: RestUpstreamServerStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    type?: RestUpstreamServerTypeEnum;
}


/**
 * @export
 */
export const RestUpstreamServerStateEnum = {
    Initializing: 'INITIALIZING',
    Pending: 'PENDING',
    Installed: 'INSTALLED',
    Unknown: 'UNKNOWN',
    Removed: 'REMOVED'
} as const;
export type RestUpstreamServerStateEnum = typeof RestUpstreamServerStateEnum[keyof typeof RestUpstreamServerStateEnum];

/**
 * @export
 */
export const RestUpstreamServerTypeEnum = {
    Server: 'BITBUCKET_SERVER',
    Cloud: 'BITBUCKET_CLOUD'
} as const;
export type RestUpstreamServerTypeEnum = typeof RestUpstreamServerTypeEnum[keyof typeof RestUpstreamServerTypeEnum];

/**
 * 
 * @export
 * @interface RestUpstreamSettings
 */
export interface RestUpstreamSettings {
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamSettings
     */
    mode?: RestUpstreamSettingsModeEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestUpstreamSettings
     */
    projectIds?: Set<string>;
}


/**
 * @export
 */
export const RestUpstreamSettingsModeEnum = {
    AllProjects: 'ALL_PROJECTS',
    SelectedProjects: 'SELECTED_PROJECTS'
} as const;
export type RestUpstreamSettingsModeEnum = typeof RestUpstreamSettingsModeEnum[keyof typeof RestUpstreamSettingsModeEnum];

/**
 * 
 * @export
 * @interface RestUserRateLimitSettings
 */
export interface RestUserRateLimitSettings {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestUserRateLimitSettings
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestUserRateLimitSettings
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserRateLimitSettings
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestUserRateLimitSettingsUpdateRequest
 */
export interface RestUserRateLimitSettingsUpdateRequest {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestUserRateLimitSettingsUpdateRequest
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserRateLimitSettingsUpdateRequest
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestUserReaction
 */
export interface RestUserReaction {
    /**
     * 
     * @type {AssignParticipantRoleRequestUser}
     * @memberof RestUserReaction
     */
    user?: AssignParticipantRoleRequestUser;
    /**
     * 
     * @type {RestUserReactionEmoticon}
     * @memberof RestUserReaction
     */
    emoticon?: RestUserReactionEmoticon;
    /**
     * 
     * @type {RestUserReactionComment}
     * @memberof RestUserReaction
     */
    comment?: RestUserReactionComment;
}
/**
 * 
 * @export
 * @interface RestUserReactionComment
 */
export interface RestUserReactionComment {
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    readonly html?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    text?: string;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    severity?: string;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestUserReactionComment
     */
    readonly comments?: Array<RestComment>;
    /**
     * 
     * @type {RestUserReactionCommentAnchor}
     * @memberof RestUserReactionComment
     */
    anchor?: RestUserReactionCommentAnchor;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {RestUserReactionCommentAuthor}
     * @memberof RestUserReactionComment
     */
    author?: RestUserReactionCommentAuthor;
    /**
     * 
     * @type {RestUserReactionCommentParent}
     * @memberof RestUserReactionComment
     */
    parent?: RestUserReactionCommentParent;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    state?: string;
    /**
     * 
     * @type {object}
     * @memberof RestUserReactionComment
     */
    properties?: object;
}
/**
 * 
 * @export
 * @interface RestUserReactionCommentAnchor
 */
export interface RestUserReactionCommentAnchor {
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentAnchor
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAnchor
     */
    diffType?: RestUserReactionCommentAnchorDiffTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAnchor
     */
    lineType?: RestUserReactionCommentAnchorLineTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAnchor
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAnchor
     */
    fileType?: RestUserReactionCommentAnchorFileTypeEnum;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorPullRequest}
     * @memberof RestUserReactionCommentAnchor
     */
    pullRequest?: RestCommentThreadDiffAnchorPullRequest;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestUserReactionCommentAnchor
     */
    srcPath?: RestCommentThreadDiffAnchorSrcPath;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAnchor
     */
    toHash?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionCommentAnchor
     */
    readonly lineComment?: boolean;
    /**
     * 
     * @type {RestCommentThreadDiffAnchorSrcPath}
     * @memberof RestUserReactionCommentAnchor
     */
    path?: RestCommentThreadDiffAnchorSrcPath;
}


/**
 * @export
 */
export const RestUserReactionCommentAnchorDiffTypeEnum = {
    Commit: 'COMMIT',
    Effective: 'EFFECTIVE',
    Range: 'RANGE'
} as const;
export type RestUserReactionCommentAnchorDiffTypeEnum = typeof RestUserReactionCommentAnchorDiffTypeEnum[keyof typeof RestUserReactionCommentAnchorDiffTypeEnum];

/**
 * @export
 */
export const RestUserReactionCommentAnchorLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestUserReactionCommentAnchorLineTypeEnum = typeof RestUserReactionCommentAnchorLineTypeEnum[keyof typeof RestUserReactionCommentAnchorLineTypeEnum];

/**
 * @export
 */
export const RestUserReactionCommentAnchorFileTypeEnum = {
    From: 'FROM',
    To: 'TO'
} as const;
export type RestUserReactionCommentAnchorFileTypeEnum = typeof RestUserReactionCommentAnchorFileTypeEnum[keyof typeof RestUserReactionCommentAnchorFileTypeEnum];

/**
 * 
 * @export
 * @interface RestUserReactionCommentAuthor
 */
export interface RestUserReactionCommentAuthor {
    /**
     * 
     * @type {object}
     * @memberof RestUserReactionCommentAuthor
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionCommentAuthor
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentAuthor
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    type?: RestUserReactionCommentAuthorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentAuthor
     */
    avatarUrl?: string;
}


/**
 * @export
 */
export const RestUserReactionCommentAuthorTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestUserReactionCommentAuthorTypeEnum = typeof RestUserReactionCommentAuthorTypeEnum[keyof typeof RestUserReactionCommentAuthorTypeEnum];

/**
 * 
 * @export
 * @interface RestUserReactionCommentParent
 */
export interface RestUserReactionCommentParent {
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentParent
     */
    readonly html?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionCommentParent
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentParent
     */
    text?: string;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentParent
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentParent
     */
    severity?: string;
    /**
     * 
     * @type {RestUserReactionCommentAnchor}
     * @memberof RestUserReactionCommentParent
     */
    anchor?: RestUserReactionCommentAnchor;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentParent
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentParent
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionCommentParent
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionCommentParent
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {RestUserReactionCommentAuthor}
     * @memberof RestUserReactionCommentParent
     */
    author?: RestUserReactionCommentAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionCommentParent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionCommentParent
     */
    state?: string;
    /**
     * 
     * @type {object}
     * @memberof RestUserReactionCommentParent
     */
    properties?: object;
}
/**
 * 
 * @export
 * @interface RestUserReactionEmoticon
 */
export interface RestUserReactionEmoticon {
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    shortcut?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestUsernamePasswordCredentials
 */
export interface RestUsernamePasswordCredentials {
    /**
     * 
     * @type {string}
     * @memberof RestUsernamePasswordCredentials
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof RestUsernamePasswordCredentials
     */
    username: string;
}
/**
 * 
 * @export
 * @interface RestWebhook
 */
export interface RestWebhook {
    /**
     * 
     * @type {string}
     * @memberof RestWebhook
     */
    url?: string;
    /**
     * 
     * @type {object}
     * @memberof RestWebhook
     */
    _configuration?: object;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestWebhook
     */
    events?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RestWebhook
     */
    active?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestWebhook
     */
    statistics?: object;
    /**
     * 
     * @type {string}
     * @memberof RestWebhook
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RevokeManyRequest
 */
export interface RevokeManyRequest {
    /**
     * 
     * @type {RestProject}
     * @memberof RevokeManyRequest
     */
    projects?: RestProject;
    /**
     * 
     * @type {RestRepository}
     * @memberof RevokeManyRequest
     */
    repositories?: RestRepository;
}
/**
 * 
 * @export
 * @interface Search2200Response
 */
export interface Search2200Response {
    /**
     * 
     * @type {Array<RestSecretScanningAllowlistRule>}
     * @memberof Search2200Response
     */
    values?: Array<RestSecretScanningAllowlistRule>;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Search2200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface Search3200Response
 */
export interface Search3200Response {
    /**
     * 
     * @type {Array<RestSecretScanningRule>}
     * @memberof Search3200Response
     */
    values?: Array<RestSecretScanningRule>;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Search3200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface SearchMeshMigrationRepos200Response
 */
export interface SearchMeshMigrationRepos200Response {
    /**
     * 
     * @type {Array<RestMigrationRepository>}
     * @memberof SearchMeshMigrationRepos200Response
     */
    values?: Array<RestMigrationRepository>;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMeshMigrationRepos200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface SetBannerRequest
 */
export interface SetBannerRequest {
    /**
     * 
     * @type {string}
     * @memberof SetBannerRequest
     */
    audience: SetBannerRequestAudienceEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SetBannerRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetBannerRequest
     */
    message?: string;
}


/**
 * @export
 */
export const SetBannerRequestAudienceEnum = {
    Authenticated: 'AUTHENTICATED',
    All: 'ALL'
} as const;
export type SetBannerRequestAudienceEnum = typeof SetBannerRequestAudienceEnum[keyof typeof SetBannerRequestAudienceEnum];

/**
 * 
 * @export
 * @interface SetDefaultBranchRequest
 */
export interface SetDefaultBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultBranchRequest
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface SetMailConfigRequest
 */
export interface SetMailConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    password?: string;
    /**
     * 
     * @type {number}
     * @memberof SetMailConfigRequest
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    protocol?: SetMailConfigRequestProtocolEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SetMailConfigRequest
     */
    requireStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    senderAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SetMailConfigRequest
     */
    useStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    username?: string;
}


/**
 * @export
 */
export const SetMailConfigRequestProtocolEnum = {
    Smtp: 'SMTP',
    Smtps: 'SMTPS'
} as const;
export type SetMailConfigRequestProtocolEnum = typeof SetMailConfigRequestProtocolEnum[keyof typeof SetMailConfigRequestProtocolEnum];

/**
 * 
 * @export
 * @interface SimpleSshKeyFingerprint
 */
export interface SimpleSshKeyFingerprint {
    /**
     * 
     * @type {string}
     * @memberof SimpleSshKeyFingerprint
     */
    algorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleSshKeyFingerprint
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface StartMeshMigrationRequest
 */
export interface StartMeshMigrationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof StartMeshMigrationRequest
     */
    all?: boolean;
    /**
     * 
     * @type {Set<number>}
     * @memberof StartMeshMigrationRequest
     */
    projectIds?: Set<number>;
    /**
     * 
     * @type {StartMeshMigrationRequestMaxBytesPerSecond}
     * @memberof StartMeshMigrationRequest
     */
    maxBytesPerSecond?: StartMeshMigrationRequestMaxBytesPerSecond;
    /**
     * 
     * @type {Set<number>}
     * @memberof StartMeshMigrationRequest
     */
    repositoryIds?: Set<number>;
}
/**
 * 
 * @export
 * @interface StartMeshMigrationRequestMaxBytesPerSecond
 */
export interface StartMeshMigrationRequestMaxBytesPerSecond {
    /**
     * 
     * @type {boolean}
     * @memberof StartMeshMigrationRequestMaxBytesPerSecond
     */
    present?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StartMeshMigrationRequestMaxBytesPerSecond
     */
    asLong?: number;
}
/**
 * 
 * @export
 * @interface StreamDiff200Response
 */
export interface StreamDiff200Response {
    /**
     * 
     * @type {Array<RestDiff>}
     * @memberof StreamDiff200Response
     */
    values?: Array<RestDiff>;
    /**
     * 
     * @type {number}
     * @memberof StreamDiff200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamDiff200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StreamDiff200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StreamDiff200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamDiff200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface StreamFiles200Response
 */
export interface StreamFiles200Response {
    /**
     * 
     * @type {Array<any>}
     * @memberof StreamFiles200Response
     */
    values?: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    start?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StreamFiles200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1Request
 */
export interface UpdatePullRequestCondition1Request {
    /**
     * 
     * @type {number}
     * @memberof UpdatePullRequestCondition1Request
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof UpdatePullRequestCondition1Request
     */
    reviewers?: Array<RestApplicationUser>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof UpdatePullRequestCondition1Request
     */
    sourceMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof UpdatePullRequestCondition1Request
     */
    targetMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1RequestSourceMatcher
 */
export interface UpdatePullRequestCondition1RequestSourceMatcher {
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    id?: string;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcherType}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    type?: UpdatePullRequestCondition1RequestSourceMatcherType;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1RequestSourceMatcherType
 */
export interface UpdatePullRequestCondition1RequestSourceMatcherType {
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcherType
     */
    id?: UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcherType
     */
    name?: string;
}


/**
 * @export
 */
export const UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum = {
    AnyRef: 'ANY_REF',
    Branch: 'BRANCH',
    Pattern: 'PATTERN',
    ModelCategory: 'MODEL_CATEGORY',
    ModelBranch: 'MODEL_BRANCH'
} as const;
export type UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum = typeof UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum[keyof typeof UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum];

/**
 * 
 * @export
 * @interface UserAndGroups
 */
export interface UserAndGroups {
    /**
     * 
     * @type {Set<string>}
     * @memberof UserAndGroups
     */
    groups: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof UserAndGroups
     */
    user?: string;
}
/**
 * 
 * @export
 * @interface UserPasswordUpdate
 */
export interface UserPasswordUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    oldPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    passwordConfirm?: string;
}
/**
 * 
 * @export
 * @interface UserPickerContext
 */
export interface UserPickerContext {
    /**
     * 
     * @type {string}
     * @memberof UserPickerContext
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPickerContext
     */
    itemName?: string;
}
/**
 * 
 * @export
 * @interface UserRename
 */
export interface UserRename {
    /**
     * 
     * @type {string}
     * @memberof UserRename
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRename
     */
    newName?: string;
}
/**
 * 
 * @export
 * @interface UserUpdate
 */
export interface UserUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    name?: string;
}
