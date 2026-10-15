"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSession } from "@/components/auth/SessionContext";
import { hasAdminAccess } from "@/lib/dashboard-access";

export function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loading, refresh, user } = useSession();
  const [checked, setChecked] = useState(false);
  const bootstrapRoute = pathname === "/gestao/usuarios";

  useEffect(() => {
    let active = true;

    async function validate() {
      const nextUser = user ?? (await refresh());
      if (!active) return;
      setChecked(true);

      if (!nextUser && !bootstrapRoute) {
        const query = searchParams.toString();
        const next = `${pathname}${query ? `?${query}` : ""}`;
        router.replace(`/login?next=${encodeURIComponent(next)}`);
      }
    }

    void validate();

    return () => {
      active = false;
    };
  }, [bootstrapRoute, pathname, refresh, router, searchParams, user]);

  if (loading || !checked) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#030708] px-5 text-center text-white">
        <div>
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-md border border-limebrand/35 bg-limebrand/10">
            <ShieldCheck className="h-6 w-6 text-limebrand" />
          </div>
          <p className="mt-4 text-sm text-white/62">A validar permissão de gestão...</p>
        </div>
      </div>
    );
  }

  if (!hasAdminAccess(user) && !bootstrapRoute) {
    return (
      <section className="container-page grid min-h-[70vh] place-items-center py-12 text-center">
        <div className="max-w-md">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-md border border-white/12 bg-white/[0.035]">
            <ShieldCheck className="h-7 w-7 text-limebrand" />
          </div>
          <h1 className="mt-5 text-2xl font-black">Acesso restrito</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Esta área é reservada para administradores Noogym. Para criar o primeiro admin, use a tela de usuários com a chave de bootstrap.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/gestao/usuarios" variant="secondary">Criar primeiro admin</Button>
            <Button href="/dashboard/resumo">Voltar ao dashboard</Button>
          </div>
          <Link href="/login?next=/gestao" className="mt-5 inline-flex text-sm font-bold text-limebrand">
            Entrar com outra conta
          </Link>
        </div>
      </section>
    );
  }

  return <>{children}</>;
}
