"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/layout/CartContext";
import { useSession } from "@/components/auth/SessionContext";
import { getDashboardNavSections } from "@/lib/dashboard-access";
import { cn } from "@/lib/utils";
import { dashboardIcons } from "./icons";
import { UserAvatar } from "./UserAvatar";
import { logoutSession } from "@/lib/auth";

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const { loading, user } = useSession();
  const visibleNavSections = getDashboardNavSections(user);
  const displayName = user?.name?.trim() || (loading ? "..." : "Utilizador");
  const firstName = displayName.split(/\s+/)[0];

  async function handleLogout() {
    await logoutSession();
    setMenuOpen(false);
    router.replace("/login");
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-[72px] w-full border-b border-white/10 bg-black/80 backdrop-blur-xl lg:left-[260px] lg:w-[calc(100%-260px)]">
        <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 lg:hidden">
            <button onClick={() => setMenuOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-white/82" aria-label="Abrir menu"><Menu className="h-5 w-5" /></button>
            <Link href="/dashboard/resumo" className="flex items-center gap-2"><Image src="/assets/logo.png" alt="Noogym" width={42} height={28} className="h-6 w-auto" /><span className="text-lg font-bold">noogym</span></Link>
          </div>
          <p className="hidden text-sm text-white/58 lg:block">A tua jornada Noogym</p>
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <Link href="/dashboard/carrinho" className="relative grid h-10 w-10 place-items-center rounded-md text-white/80 hover:bg-white/8 hover:text-limebrand" aria-label="Abrir carrinho">
              <ShoppingCart className="h-5 w-5" />{count ? <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-limebrand px-1 text-[11px] font-black text-black">{count}</span> : null}
            </Link>
            <Link href="/dashboard/perfil" className="flex items-center gap-3 rounded-md px-2 py-1 hover:bg-white/5">
              <span className="hidden text-right sm:block"><span className="block text-sm font-semibold">Olá, {firstName}</span><span className="block text-xs text-white/55">A minha conta</span></span>
              <UserAvatar alt={displayName} className="hidden sm:block" src={user?.avatarUrl} />
            </Link>
          </div>
        </div>
      </header>

      {menuOpen ? <div className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)}>
        <div className="flex h-full w-[min(100vw,22rem)] flex-col border-r border-white/10 bg-[#061012] shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
            <Link href="/dashboard/resumo" onClick={() => setMenuOpen(false)} className="flex items-center gap-3"><Image src="/assets/logo.png" alt="Noogym" width={44} height={28} className="h-7 w-auto" /><span className="text-xl font-bold">noogym</span></Link>
            <button onClick={() => setMenuOpen(false)} className="grid h-10 w-10 place-items-center rounded-md border border-white/10" aria-label="Fechar menu"><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-5">
            {visibleNavSections.map((section) => <div key={section.label} className="mb-7">
              <p className="mb-3 px-3 text-xs uppercase tracking-wide text-white/48">{section.label}</p>
              <div className="space-y-1">{section.items.map((item) => {
                const Icon = dashboardIcons[item.icon];
                const active = pathname === item.href || (item.href !== "/dashboard/resumo" && pathname.startsWith(item.href));
                return <Link key={item.href} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} onClick={() => setMenuOpen(false)} className={cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition", active ? "bg-limebrand text-black" : "text-white/82 hover:bg-white/8")}><Icon className="h-[18px] w-[18px]" /><span>{item.label}</span></Link>;
              })}</div>
            </div>)}
          </nav>
          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex items-center gap-3 rounded-md border border-white/8 bg-white/[0.035] p-3"><UserAvatar alt={displayName} src={user?.avatarUrl} /><div className="min-w-0"><p className="truncate text-sm font-semibold">{displayName}</p><p className="truncate text-xs text-white/55">A minha conta</p></div></div>
            <button onClick={handleLogout} className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-semibold text-white/78 hover:bg-red-500/10 hover:text-red-200"><LogOut className="h-[18px] w-[18px]" />Sair da conta</button>
          </div>
        </div>
      </div> : null}
    </>
  );
}
