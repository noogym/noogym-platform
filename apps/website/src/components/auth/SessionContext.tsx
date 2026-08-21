"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  clearAuthSession,
  demoMode,
  logoutSession,
  readUserSession,
  saveValidatedUser,
  type MeResponse,
  type NoogymUser,
} from "@/lib/auth";

type SessionContextValue = {
  user: NoogymUser | null;
  loading: boolean;
  refresh: () => Promise<NoogymUser | null>;
  logout: () => Promise<void>;
};

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<NoogymUser | null>(null);
  const [loading, setLoading] = useState(!demoMode);

  const refresh = useCallback(async () => {
    if (demoMode) {
      const demoUser = readUserSession();
      setUser(demoUser);
      setLoading(false);
      return demoUser;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/session/me", { cache: "no-store" });
      const payload = (await response.json().catch(() => ({}))) as Partial<MeResponse>;

      if (!response.ok || !payload.user) {
        clearAuthSession();
        setUser(null);
        return null;
      }

      saveValidatedUser(payload.user);
      const nextUser = readUserSession();
      setUser(nextUser);
      return nextUser;
    } catch {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await logoutSession();
    setUser(null);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo(() => ({ user, loading, refresh, logout }), [user, loading, refresh, logout]);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) throw new Error("useSession must be used within SessionProvider.");
  return context;
}
