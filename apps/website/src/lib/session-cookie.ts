import { cookies } from "next/headers";

export const sessionCookieName = "noogym_session";

export async function getSessionToken() {
  return (await cookies()).get(sessionCookieName)?.value ?? null;
}

export async function setSessionToken(token: string, maxAgeSeconds: number) {
  (await cookies()).set({
    name: sessionCookieName,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAgeSeconds,
  });
}

export async function clearSessionToken() {
  (await cookies()).set({
    name: sessionCookieName,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
