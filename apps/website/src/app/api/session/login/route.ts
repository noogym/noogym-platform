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

  const payload = await response.json().catch(() => null);

  if (response.ok && payload?.token && payload?.expiresIn) {
    await setSessionToken(payload.token, payload.expiresIn);
  }

  return Response.json(payload ?? {}, {
    status: response.status,
    statusText: response.statusText,
  });
}
