import type { ReactNode } from "react";
import { Suspense } from "react";
import { DashboardAuthGate } from "@/components/auth/DashboardAuthGate";
import { AppHeader } from "@/components/dashboard/AppHeader";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { ServiceConnectionsProvider } from "@/components/dashboard/ServiceConnections";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardAuthGate>
        <ServiceConnectionsProvider>
          <div className="min-h-screen bg-[#030708] text-white">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_5%,rgba(182,255,0,.08),transparent_28rem),radial-gradient(circle_at_85%_20%,rgba(42,161,255,.06),transparent_28rem),linear-gradient(180deg,#030506,#071113)]" />
            <AppSidebar />
            <AppHeader />
            <div className="pt-[72px] lg:pl-[260px]">
              <main className="mx-auto w-full max-w-[1540px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">{children}</main>
            </div>
          </div>
        </ServiceConnectionsProvider>
      </DashboardAuthGate>
    </Suspense>
  );
}

function DashboardLoading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#030708] px-5 text-center text-white">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-limebrand">Noogym</p>
        <p className="mt-3 text-sm text-white/62">A preparar o dashboard...</p>
      </div>
    </div>
  );
}
