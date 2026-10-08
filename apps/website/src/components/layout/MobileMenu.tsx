"use client";

import Link from "next/link";
import { LoaderCircle, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileMenu({
  open,
  links,
  authenticated = false,
  dashboardLoading = false,
  onClose,
  onDashboard,
  onLogout,
}: {
  open: boolean;
  links: { href: string; label: string }[];
  authenticated?: boolean;
  dashboardLoading?: boolean;
  onClose: () => void;
  onDashboard?: () => void;
  onLogout?: () => void | Promise<void>;
}) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md xl:hidden">
      <div className="ml-auto h-full w-[min(100vw,24rem)] max-w-full overflow-y-auto border-l border-white/12 bg-ink-950 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-limebrand">noogym</span>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-white/10" aria-label="Fechar menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8 grid gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="rounded-md px-3 py-3 text-white/78 hover:bg-white/8 hover:text-limebrand">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex justify-start">
          <LanguageSwitcher align="left" />
        </div>
        <div className="mt-5 grid gap-3">
          {authenticated ? (
            <>
              <Button type="button" onClick={onDashboard} disabled={dashboardLoading}>
                {dashboardLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                Dashboard
              </Button>
              <Button type="button" variant="secondary" onClick={onLogout}>Sair</Button>
            </>
          ) : (
            <>
              <Button href="/login" variant="secondary" onClick={onClose}>Entrar</Button>
              <Button href="/criar-conta" onClick={onClose}>Criar conta</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
