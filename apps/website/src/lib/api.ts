export type ApiErrorResponse = {
  message?: string | string[];
  error?: string;
};

export async function readApiPayload<T>(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return {
      message: response.ok
        ? undefined
        : "A API Noogym nao devolveu uma resposta valida. Verifique se o backend e o banco de dados estao ativos.",
    } as T | ApiErrorResponse;
  }

  try {
    return (await response.json()) as T | ApiErrorResponse;
  } catch {
    return {
      message: "A API Noogym nao devolveu uma resposta valida. Verifique se o backend e o banco de dados estao ativos.",
    } as T | ApiErrorResponse;
  }
}

export function getApiErrorMessage(payload: unknown, fallback = "Nao foi possivel concluir esta acao agora.") {
  if (payload && typeof payload === "object" && "message" in payload) {
    const message = (payload as ApiErrorResponse).message;

    if (Array.isArray(message)) {
      return message[0] ?? fallback;
    }

    if (message) {
      return message;
    }
  }

  return fallback;
}
