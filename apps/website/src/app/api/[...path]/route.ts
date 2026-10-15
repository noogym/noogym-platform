import { type NextRequest } from "next/server";
import { getSessionToken } from "@/lib/session-cookie";

const apiInternalUrl = process.env.API_INTERNAL_URL ?? "http://localhost:3333";

type RouteContext = {
  params: Promise<{
    path: string[];
  }>;
};

async function proxyRequest(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  const upstreamUrl = new URL(path.join("/"), `${apiInternalUrl.replace(/\/$/, "")}/`);
  upstreamUrl.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("connection");
  headers.delete("content-length");
  headers.delete("expect");
  headers.delete("transfer-encoding");
  const sessionToken = await getSessionToken();
  if (sessionToken && !headers.has("authorization")) {
    headers.set("authorization", `Bearer ${sessionToken}`);
  }

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const body = hasBody ? await request.arrayBuffer() : undefined;

  let response: Response;

  try {
    response = await fetch(upstreamUrl, {
      method: request.method,
      headers,
      body,
      redirect: "manual",
    });
  } catch {
    return Response.json(
      {
        message: "A API Noogym não está disponível agora. Verifique se o backend e o banco de dados estão ativos.",
      },
      { status: 503 },
    );
  }

  const responseHeaders = new Headers(response.headers);
  responseHeaders.delete("content-encoding");
  responseHeaders.delete("content-length");

  return new Response(request.method === "HEAD" ? null : response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}

export {
  proxyRequest as DELETE,
  proxyRequest as GET,
  proxyRequest as HEAD,
  proxyRequest as OPTIONS,
  proxyRequest as PATCH,
  proxyRequest as POST,
  proxyRequest as PUT,
};
