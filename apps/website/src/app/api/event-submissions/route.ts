import { NextResponse } from "next/server";

const requiredFields = ["name", "organizer", "category", "date", "province", "city", "contact", "description"];

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ message: "Payload invalido." }, { status: 400 });
  }

  const record = payload as Record<string, unknown>;
  if (typeof record.website === "string" && record.website.trim().length > 0) {
    return NextResponse.json({ message: "Submissao rejeitada." }, { status: 400 });
  }

  const missing = requiredFields.filter((field) => typeof record[field] !== "string" || String(record[field]).trim().length === 0);

  if (missing.length > 0) {
    return NextResponse.json({ message: `Campos obrigatorios ausentes: ${missing.join(", ")}.` }, { status: 400 });
  }

  const intelligenceApiUrl = process.env.INTELLIGENCE_API_URL;
  const apiKey = process.env.INTELLIGENCE_API_KEY;
  const submission = {
    ...record,
    source: "user_submission",
    status: "pending_review",
  };

  if (!intelligenceApiUrl) {
    return NextResponse.json({ accepted: true, status: "pending_review", mode: "local-placeholder" }, { status: 202 });
  }

  const response = await fetch(`${intelligenceApiUrl.replace(/\/$/, "")}/submissions/events`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(apiKey ? { "x-api-key": apiKey } : {}),
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "Nao foi possivel encaminhar a submissao." }, { status: 502 });
  }

  return NextResponse.json({ accepted: true, status: "pending_review" }, { status: 202 });
}
