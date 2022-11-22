import {
    CollectionReference,
    DocumentData,
    FirestoreDataConverter,
    getFirestore,
} from "firebase-admin/firestore"
import { RepositoryLocator } from "./chat-commands"

export type RepositoryData =
    RepositoryLocator
    & {
    spaceName: string
}

export function repositoryDataCollection(): CollectionReference<RepositoryData> {
    return getFirestore()
        .collection("repositories")
        .withConverter(cast<RepositoryData>())
}

export async function addRepositoryDataIfMissing(repo: RepositoryData): Promise<void> {
    const { projectKey, repositorySlug, spaceName } = repo
    const repoData = await repositoryDataCollection()
        .where("projectKey", "==", projectKey)
        .where("repositorySlug", "==", repositorySlug)
        .where("spaceName", "==", spaceName)
        .get()
    if (repoData.size > 0) return
    await repositoryDataCollection().add(repo)
}

export async function findRepositoryData({ projectKey, repositorySlug }: Pick<RepositoryData, "repositorySlug" | "projectKey">): Promise<RepositoryData | undefined> {
    const snapshot = await repositoryDataCollection()
        .where("projectKey", "==", projectKey)
        .where("repositorySlug", "==", repositorySlug)
        .get()
    if (snapshot.size > 0) {
        return snapshot.docs[0].data()
    }
    return undefined
}

function cast<T>(): FirestoreDataConverter<T> {
    return {
        toFirestore(modelObject): DocumentData {
            return modelObject as DocumentData
        },
        fromFirestore(snapshot): T {
            return snapshot.data() as T
        },
    }
}
