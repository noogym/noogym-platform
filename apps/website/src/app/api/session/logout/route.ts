import { clearSessionToken } from "@/lib/session-cookie";

export async function POST() {
  await clearSessionToken();

  return Response.json({ success: true });
}
