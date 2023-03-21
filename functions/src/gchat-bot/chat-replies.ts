import { chat_v1 } from "@googleapis/chat"
import {
    addCommandSignature,
    RepositoryLocator,
} from "@/gchat-bot/chat-commands"

export function help(): chat_v1.Schema$Message {
    return {
        text: `Hi, you called me?\nCall me with ${addCommandSignature} to report pull requests here.`,
    }
}

export function added({ projectKey, repositorySlug }: RepositoryLocator): chat_v1.Schema$Message {
    return {
        text: `I will now send you pull requests from repository ${repositorySlug} within project ${projectKey}`,
    }
}

export function missingArguments(command: string): chat_v1.Schema$Message {
    return {
        text: `I know \`${command}\`. But I need ${addCommandSignature}.`,
    }
}

export function unknownCommand(command: string): chat_v1.Schema$Message {
    return {
        text: `I do not know what to do with "${command}" 🤷`,
    }
}

export function missingSpaceName(): chat_v1.Schema$Message {
    return {
        text: "What space is this?",
    }
}
