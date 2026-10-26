
/**
 * CCA Eldoret Area — Church Assistant Service
 *
 * This file is the frontend's communication layer for a future
 * church-assistant backend.
 *
 * Security:
 * - Never put AI provider API keys in this frontend project.
 * - Configure the backend URL using an environment variable.
 * - The backend must authenticate requests where appropriate,
 *   validate input, and keep provider credentials server-side.
 */

export type ChurchAssistantMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type ChurchAssistantRequest = {
  message: string
  history?: ChurchAssistantMessage[]
}

export type ChurchAssistantResponse = {
  answer: string
}

const API_BASE_URL = (
  import.meta.env.VITE_CHURCH_ASSISTANT_API_URL as
    | string
    | undefined
)?.replace(/\/+$/, '')

/**
 * Sends a question to the future CCA assistant backend.
 *
 * Example:
 * const result = await askChurchAssistant({
 *   message: 'Which churches belong to Kipkaren Pastorate?',
 * })
 * console.log(result.answer)
 */
export async function askChurchAssistant(
  request: ChurchAssistantRequest,
): Promise<ChurchAssistantResponse> {
  if (!API_BASE_URL) {
    throw new Error(
      'The church assistant is not configured yet. Set VITE_CHURCH_ASSISTANT_API_URL when the backend is ready.',
    )
  }

  const message = request.message.trim()

  if (!message) {
    throw new Error('Please enter a question.')
  }

  const response = await fetch(`${API_BASE_URL}/api/assistant/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      history: request.history ?? [],
    }),
  })

  if (!response.ok) {
    throw new Error(
      `The church assistant request failed (${response.status}). Please try again later.`,
    )
  }

  const data: unknown = await response.json()

  if (
    typeof data !== 'object' ||
    data === null ||
    !('answer' in data) ||
    typeof data.answer !== 'string'
  ) {
    throw new Error(
      'The church assistant returned an unexpected response.',
    )
  }

  return {
    answer: data.answer,
  }
}
