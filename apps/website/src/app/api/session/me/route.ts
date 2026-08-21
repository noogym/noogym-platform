import { getSessionToken } from "@/lib/session-cookie";

const apiInternalUrl = process.env.API_INTERNAL_URL ?? "http://localhost:3333";

export async function GET() {
  const token = await getSessionToken();

  if (!token) {
    return Response.json({ message: "Sessao nao informada." }, { status: 401 });
  }

  let response: Response;

  try {
    response = await fetch(new URL("auth/me", `${apiInternalUrl.replace(/\/$/, "")}/`), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
  } catch {
    return Response.json(
      {
        message: "A API Noogym nao esta disponivel agora. Verifique se o backend e o banco de dados estao ativos.",
      },
      { status: 503 },
    );
  }

  const payload = await response.json().catch(() => ({}));

  return Response.json(payload, {
    status: response.status,
    statusText: response.statusText,
  });
}
