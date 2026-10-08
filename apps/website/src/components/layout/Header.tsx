"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LoaderCircle, Menu, ShoppingCart } from "lucide-react";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useSession } from "@/components/auth/SessionContext";
import { useCart } from "./CartContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Início" },
  { href: "/explorar-ginasios", label: "Explorar Ginásios" },
  { href: "/planos", label: "Planos" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/eventos", label: "Eventos" },
  { href: "/para-ginasios", label: "Para Ginásios" },
  { href: "/blog", label: "Blog" },
];

function isAuthPage(pathname: string) {
  return pathname === "/login" || pathname === "/esqueci-senha" || pathname.startsWith("/criar-conta");
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openingDashboard, startOpeningDashboard] = useTransition();
  const { count } = useCart();
  const { loading, logout, user } = useSession();

  if (isAuthPage(pathname) || pathname.startsWith("/dashboard")) return null;

  async function handleLogout() {
    await logout();
    setMenuOpen(false);
  }

  function openDashboard() {
    setMenuOpen(false);
    router.prefetch("/dashboard/resumo");
    startOpeningDashboard(() => {
      router.push("/dashboard/resumo");
    });
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/82 backdrop-blur-xl">
        <div className="container-page flex h-20 min-w-0 items-center justify-between gap-3 sm:gap-5">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/assets/logo.png" alt="Noogym" width={38} height={24} className="h-6 w-auto" />
            <span className="text-xl font-bold tracking-normal">noogym</span>
          </Link>
          <nav className="hidden items-center gap-6 xl:flex">
            {links.map((link) => {
              const marketplaceFlow = ["/carrinho", "/finalizar-compra", "/checkout"].includes(pathname);
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) || (link.href === "/marketplace" && marketplaceFlow);
              return (
                <Link key={link.href} href={link.href} className={cn("relative py-7 text-sm font-medium text-white/74 transition hover:text-white", active && "text-limebrand")}>
                  {link.label}
                  {active ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-limebrand" /> : null}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <LanguageSwitcher className="hidden md:block" />
            <Link href="/carrinho" className="relative rounded-md p-3 text-white/72 hover:bg-white/8 hover:text-limebrand" aria-label="Abrir carrinho">
              <ShoppingCart className="h-5 w-5" />
              {count ? <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-limebrand px-1 text-xs font-bold text-black">{count}</span> : null}
            </Link>
            {loading ? (
              <span className="hidden h-9 w-36 rounded-md border border-white/10 bg-white/[0.03] xl:inline-flex" aria-hidden="true" />
            ) : user ? (
              <>
                <Button type="button" size="sm" className="hidden xl:inline-flex" onClick={openDashboard} disabled={openingDashboard}>
                  {openingDashboard ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LayoutDashboard className="h-4 w-4" />}
                  Dashboard
                </Button>
                <Button type="button" variant="secondary" size="sm" className="hidden xl:inline-flex" onClick={handleLogout}>Sair</Button>
              </>
            ) : (
              <>
                <Button href="/login" variant="secondary" size="sm" className="hidden xl:inline-flex">Entrar</Button>
                <Button href="/criar-conta" size="sm" className="hidden xl:inline-flex">Criar conta</Button>
              </>
            )}
            <button onClick={() => setMenuOpen(true)} className="rounded-md p-3 xl:hidden" aria-label="Abrir menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} links={links} authenticated={Boolean(user)} dashboardLoading={openingDashboard} onClose={() => setMenuOpen(false)} onDashboard={openDashboard} onLogout={handleLogout} />
    </>
  );
}
