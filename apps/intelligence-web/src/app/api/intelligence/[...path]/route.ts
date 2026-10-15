import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export async function POST(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export async function PATCH(request: Request, context: RouteContext) {
  return proxy(request, context);
}

async function proxy(request: Request, context: RouteContext) {
  const { path } = await context.params;
  const apiUrl = process.env.INTELLIGENCE_API_URL ?? "http://localhost:3340";
  const apiKey = process.env.INTELLIGENCE_API_KEY ?? "dev-intelligence-key";
  const target = `${apiUrl.replace(/\/$/, "")}/${path.join("/")}${new URL(request.url).search}`;
  const body = request.method === "GET" ? undefined : await request.text();

  try {
    const response = await fetch(target, {
      method: request.method,
      headers: {
        "content-type": request.headers.get("content-type") ?? "application/json",
        "x-api-key": apiKey,
      },
      body,
      cache: "no-store",
    });
    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    return NextResponse.json({ message: "Intelligence API indisponivel." }, { status: 503 });
  }
}
