export const authTokenKey = "noogym:auth-token";
export const userSessionKey = "noogym:user-session";
export const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

export type NoogymUser = {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  avatarUrl?: string | null;
  role?: string;
  status?: string;
  accesses?: string[];
  tokenType?: string;
  expiresIn?: number;
  loginAt?: string;
  provider?: string;
};

export type AuthSessionResponse = {
  token: string;
  tokenType: "Bearer";
  expiresIn: number;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: string;
    status: string;
    avatarUrl: string | null;
    accesses: { scope: string; status: string }[];
  };
};

export type MeResponse = {
  user: AuthSessionResponse["user"];
};

export function saveUserFromSession(session: AuthSessionResponse) {
  saveUserSession({
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    phone: session.user.phone,
    avatarUrl: session.user.avatarUrl,
    role: session.user.role,
    status: session.user.status,
    accesses: session.user.accesses.map((access) => access.scope),
    tokenType: session.tokenType,
    expiresIn: session.expiresIn,
    loginAt: new Date().toISOString(),
  });
}

export function saveUserSession(user: NoogymUser) {
  window.localStorage.setItem(userSessionKey, JSON.stringify(user));
}

export function readUserSession() {
  try {
    const stored = window.localStorage.getItem(userSessionKey);
    return stored ? (JSON.parse(stored) as NoogymUser) : null;
  } catch {
    clearAuthSession();
    return null;
  }
}

export function clearAuthSession() {
  window.localStorage.removeItem(authTokenKey);
  window.localStorage.removeItem(userSessionKey);
}

export async function logoutSession() {
  await fetch("/api/session/logout", { method: "POST" }).catch(() => undefined);
  clearAuthSession();
}

export function saveValidatedUser(user: MeResponse["user"]) {
  const current = readUserSession();
  saveUserSession({
    ...current,
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    avatarUrl: user.avatarUrl,
    role: user.role,
    status: user.status,
    accesses: user.accesses.map((access) => access.scope),
  });
}
