"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { clearAuthSession, demoMode, saveValidatedUser, type MeResponse } from "@/lib/auth";

export function DashboardAuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState(demoMode);

  useEffect(() => {
    let active = true;

    async function validateSession() {
      if (demoMode) {
        setAuthorized(true);
        return;
      }

      try {
        const response = await fetch("/api/session/me", { cache: "no-store" });
        const payload = await readApiPayload<MeResponse>(response);

        if (!response.ok) {
          throw new Error(getApiErrorMessage(payload, "Sessao invalida ou expirada."));
        }

        if (active && "user" in payload) {
          saveValidatedUser(payload.user);
          setAuthorized(true);
        }
      } catch {
        clearAuthSession();
        if (active) redirectToLogin();
      }
    }

    function redirectToLogin() {
      const query = searchParams.toString();
      const next = `${pathname}${query ? `?${query}` : ""}`;
      router.replace(`/login?next=${encodeURIComponent(next)}`);
    }

    void validateSession();

    return () => {
      active = false;
    };
  }, [pathname, router, searchParams]);

  if (!authorized) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#030708] px-5 text-center text-white">
        <div className="w-full max-w-sm">
          <div className="mx-auto h-12 w-12 rounded-md border border-limebrand/35 bg-limebrand/10 shadow-glow" />
          <p className="mt-5 text-xs font-bold uppercase tracking-wide text-limebrand">Noogym Dashboard</p>
          <p className="mt-3 text-sm text-white/62">A validar a sua sessão...</p>
          <div className="mx-auto mt-5 h-1.5 max-w-40 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-2/3 animate-pulse rounded-full bg-limebrand" />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
