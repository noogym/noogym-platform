"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { logoutSession } from "@/lib/auth";
import { useSession } from "@/components/auth/SessionContext";
import { getDashboardNavSections } from "@/lib/dashboard-access";
import { dashboardIcons } from "./icons";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useSession();
  const visibleNavSections = getDashboardNavSections(user);

  async function handleLogout() {
    await logoutSession();
    router.replace("/login");
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[260px] flex-col border-r border-white/10 bg-[#061012]/92 backdrop-blur-xl lg:flex">
      <Link href="/dashboard/resumo" className="flex h-[72px] items-center gap-3 border-b border-white/10 px-7">
        <Image src="/assets/logo.png" alt="Noogym" width={48} height={30} className="h-8 w-auto" />
        <span className="text-2xl font-bold tracking-normal">noogym</span>
      </Link>

      <nav className="flex-1 overflow-y-auto px-4 py-5">
        {visibleNavSections.map((section) => (
          <div key={section.label} className="mb-7">
            <p className="mb-3 px-3 text-xs uppercase tracking-wide text-white/58">{section.label}</p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = dashboardIcons[item.icon];
                const active = pathname === item.href || (item.href !== "/dashboard/resumo" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className={cn(
                      "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-white/86 transition",
                      active ? "bg-limebrand text-black shadow-glow" : "hover:bg-white/8 hover:text-white",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-semibold text-white/78 transition hover:bg-red-500/10 hover:text-red-200"
        >
          <LogOut className="h-[18px] w-[18px]" />
          <span>Sair da conta</span>
        </button>
      </div>
    </aside>
  );
}
