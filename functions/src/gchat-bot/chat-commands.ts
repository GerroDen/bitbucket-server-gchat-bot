export const commandPattern = /^\s*(@.+)\s+(\/\w+)\s*(.*)\s*$/u;
export const addCommandSignature = "`/add <projectKey> <repositorySlug>`";

export interface RepositoryLocator {
  projectKey: string;
  repositorySlug: string;
}

export function addCommandArgsSplit(argsString: string): RepositoryLocator {
  const [projectKey, repositorySlug] = argsString.split(/\s+/);
  return { projectKey, repositorySlug };
}
