"use client";

import Link from "next/link";
import { Dumbbell, PackageCheck, ShoppingBag, Tag } from "lucide-react";
import { productCategories } from "@/data/products";

export function CategorySidebar({
  active,
  counts,
  onChange,
}: {
  active: string;
  counts: Record<string, number>;
  onChange: (category: string) => void;
}) {
  return (
    <aside className="glass h-max rounded-lg p-4">
      <h2 className="mb-3 text-base font-bold">Categorias</h2>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {productCategories.map((category, index) => {
          const Icon = index % 3 === 0 ? PackageCheck : index % 3 === 1 ? ShoppingBag : Dumbbell;
          return (
            <button key={category} onClick={() => onChange(category)} className={`flex min-w-max items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition lg:w-full lg:min-w-0 ${active === category ? "bg-limebrand/12 text-limebrand" : "text-white/70 hover:bg-white/8"}`}>
              <Icon className="h-4 w-4 shrink-0" />
              <span className="min-w-0 flex-1 whitespace-nowrap lg:whitespace-normal lg:break-words">{category}</span>
              <span className="rounded-full bg-white/8 px-2 py-0.5 text-xs text-white/50">{counts[category] ?? 0}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-4 lg:mt-6">
        <Tag className="h-5 w-5 text-limebrand" />
        <h3 className="mt-3 text-base font-bold">Seja parceiro Noogym</h3>
        <p className="mt-2 text-xs leading-5 text-white/58">Venda produtos para atletas e ginásios da rede.</p>
        <Link
          className="mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-md bg-limebrand px-4 py-2 text-sm font-bold leading-snug text-black transition hover:bg-limebrand2"
          href="/login?next=%2Fdashboard%2Fperfil%3Ftab%3Dperfis-e-vinculos%23vendedor"
        >
          Solicitar venda
        </Link>
      </div>
    </aside>
  );
}
