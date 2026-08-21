"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/layout/CartContext";
import { formatKz } from "@/lib/utils";
import { RightPanelCard } from "./RightPanelCard";

export function DashboardCartSummary() {
  const { items, clear } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <RightPanelCard title="Seu carrinho" action={items.length ? <Link href="/carrinho" className="text-sm text-limebrand">Ver carrinho</Link> : null}>
      {items.length === 0 ? (
        <div className="rounded-md border border-white/10 bg-black/18 p-5 text-center text-white/60">
          <ShoppingCart className="mx-auto mb-3 h-8 w-8 text-limebrand" />
          O seu carrinho ainda está vazio.
        </div>
      ) : (
        <>
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="mb-4 flex items-center gap-3">
              <Image src={item.image} alt={item.name} width={54} height={54} className="h-14 w-14 rounded bg-white/5 object-contain" />
              <div className="min-w-0">
                <p className="truncate font-bold">{item.name}</p>
                <p className="text-sm text-white/62">{formatKz(item.price)}</p>
              </div>
              <span className="ml-auto text-sm">{item.qty}x</span>
            </div>
          ))}
          {items.length > 3 ? <p className="mb-4 text-sm text-white/58">+{items.length - 3} item(ns) no carrinho</p> : null}
          <div className="mt-5 flex justify-between border-t border-white/10 pt-5">
            <span>Subtotal</span>
            <b>{formatKz(subtotal)}</b>
          </div>
          <div className="mt-5 grid gap-2">
            <Link href="/finalizar-compra" className="grid h-11 w-full place-items-center rounded-md bg-limebrand font-bold text-black">Finalizar compra</Link>
            <button onClick={clear} className="h-10 w-full rounded-md border border-white/10 text-sm text-white/72">Limpar carrinho</button>
          </div>
        </>
      )}
    </RightPanelCard>
  );
}
