"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/components/layout/CartContext";

type ProductCardProps = {
  product: {
    name: string;
    category: string;
    detail: string;
    price: string;
    rating: string;
    reviews: number;
    image: string;
    discount?: string;
  };
  removable?: boolean;
};

export function ProductCard({ product, removable }: ProductCardProps) {
  const { addItem } = useCart();
  const cartProduct: Product = {
    id: product.name.toLowerCase().replace(/\W+/g, "-"),
    name: product.name,
    category: product.category,
    price: Number(product.price.replace(/\D/g, "")),
    rating: Number(product.rating.replace(",", ".")),
    reviews: product.reviews,
    brand: "Noogym",
    store: "Noogym Store",
    discount: product.discount,
    stock: "Em stock",
    delivery: "Entrega em Luanda",
    image: product.image,
  };

  return (
    <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-panel p-4 shadow-card">
      {product.discount ? <span className="absolute left-4 top-4 z-10 rounded bg-limebrand px-2 py-1 text-xs font-black text-black">{product.discount}</span> : null}
      <button className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/8 text-limebrand">
        <Heart className="h-5 w-5 fill-current" />
      </button>
      <div className="grid h-44 place-items-center rounded-md bg-black/18">
        <Image src={product.image} alt={product.name} width={180} height={160} className="max-h-40 w-auto object-contain transition duration-300 group-hover:scale-105" />
      </div>
      <p className="mt-4 text-xs text-white/50">{product.category}</p>
      <h3 className="mt-1 min-h-11 text-sm font-bold leading-5">{product.name}</h3>
      <p className="text-sm text-white/62">{product.detail}</p>
      <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-yellow-300"><Star className="h-4 w-4 fill-current" /> {product.rating} <span className="text-white/48">({product.reviews})</span></p>
      <p className="mt-3 text-lg font-bold">{product.price}</p>
      <div className="mt-3 grid grid-cols-[1fr_42px] gap-2">
        <button onClick={() => addItem(cartProduct)} className="grid h-10 place-items-center rounded-md border border-limebrand/70 text-limebrand hover:bg-limebrand hover:text-black" aria-label={`Adicionar ${product.name} ao carrinho`}>
          <ShoppingCart className="h-5 w-5" />
        </button>
        <button className="grid h-10 place-items-center rounded-md border border-white/10 text-white/74 hover:text-white">
          {removable ? <Trash2 className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
        </button>
      </div>
    </article>
  );
}
