import { Suspense } from "react";
import { AdminAuthGate } from "@/components/auth/AdminAuthGate";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<ManagementLoading />}>
      <AdminAuthGate>{children}</AdminAuthGate>
    </Suspense>
  );
}

function ManagementLoading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#030708] px-5 text-center text-white">
      <div>
        <div className="mx-auto h-12 w-12 rounded-md border border-limebrand/35 bg-limebrand/10" />
        <p className="mt-4 text-sm text-white/62">A preparar gestão...</p>
      </div>
    </div>
  );
}
