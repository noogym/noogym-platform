import { type NextRequest } from "next/server";
import { setSessionToken } from "@/lib/session-cookie";

const apiInternalUrl = process.env.API_INTERNAL_URL ?? "http://localhost:3333";

export async function POST(request: NextRequest) {
  let response: Response;

  try {
    response = await fetch(new URL("auth/login", `${apiInternalUrl.replace(/\/$/, "")}/`), {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("content-type") ?? "application/json",
      },
      body: await request.text(),
      redirect: "manual",
    });
  } catch {
    return Response.json(
      {
        message: "A API Noogym nao esta disponivel agora. Verifique se o backend e o banco de dados estao ativos.",
      },
      { status: 503 },
    );
  }

  const envelope = await response.json().catch(() => null);
  const payload = envelope?.success === true && "data" in envelope ? envelope.data : envelope;

  const token = payload?.accessToken ?? payload?.token;
  if (response.ok && token) {
    await setSessionToken(token, 60 * 60 * 24);
  }

  return Response.json(response.ok && payload?.user ? { user: payload.user } : payload ?? {}, {
    status: response.status,
    statusText: response.statusText,
  });
}
