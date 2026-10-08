"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Heart, PackageCheck, ShoppingCart, Star, Truck } from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { cn, formatKz } from "@/lib/utils";
import { useCart } from "@/components/layout/CartContext";

type ProductCardProps = {
  product: Product;
  showCartAction?: boolean;
};

export function ProductCard({ product, showCartAction = true }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const cartItem = showCartAction ? items.find((item) => item.id === product.id) : undefined;

  useEffect(() => {
    if (!justAdded) return;
    const timeout = window.setTimeout(() => setJustAdded(false), 1400);
    return () => window.clearTimeout(timeout);
  }, [justAdded]);

  function handleAdd() {
    addItem(product);
    setJustAdded(true);
  }

  return (
    <div className={cn("rounded-lg border bg-white/[0.035] p-3 transition hover:-translate-y-1 hover:border-limebrand/45", cartItem ? "border-limebrand/55" : "border-white/12")}>
      <div className="relative h-48 overflow-hidden rounded-md bg-black sm:h-52">
        <Image src={product.image} alt={product.name} fill className="object-cover opacity-85" />
        <div className="absolute inset-0 bg-black/25" />
        {product.discount ? <span className="absolute left-3 top-3 rounded-md bg-limebrand px-2 py-1 text-xs font-bold text-black">{product.discount}</span> : null}
        {cartItem ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-black/78 px-3 py-1 text-xs font-black text-limebrand">{cartItem.qty} no carrinho</span>
        ) : product.badge ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-black/78 px-3 py-1 text-xs font-black text-white">{product.badge}</span>
        ) : null}
        <Heart className="absolute right-3 top-3 h-5 w-5 text-white/72" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-white/50">
        <span className="truncate font-semibold text-white/68">{product.brand}</span>
        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> {product.rating} ({product.reviews})</span>
      </div>
      <h3 className="mt-2 min-h-11 break-words text-sm font-bold leading-snug">{product.name}</h3>
      <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
        <strong className="text-xl">{formatKz(product.price)}</strong>
        {product.oldPrice ? <span className="text-sm text-white/42 line-through">{formatKz(product.oldPrice)}</span> : null}
      </div>
      <div className="mt-3 grid gap-1.5 text-xs text-white/58">
        <span className="flex min-w-0 items-center gap-2"><PackageCheck className="h-3.5 w-3.5 shrink-0 text-limebrand" /> {product.stock}</span>
        <span className="flex min-w-0 items-center gap-2"><Truck className="h-3.5 w-3.5 shrink-0 text-limebrand" /> {product.delivery}</span>
      </div>
      <p className="mt-2 break-words text-xs text-white/45">{product.store}</p>
      {showCartAction ? (
        <Button className={cn("mt-3 w-full", justAdded && "bg-white text-black hover:bg-white")} onClick={handleAdd}>
          {justAdded ? "Adicionado" : cartItem ? "Adicionar mais" : "Adicionar ao carrinho"}
          {justAdded ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
        </Button>
      ) : null}
    </div>
  );
}
