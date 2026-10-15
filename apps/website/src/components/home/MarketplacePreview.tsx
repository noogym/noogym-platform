import { Dumbbell, Package, Shirt, ShoppingBag, Store } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MarketplacePreview() {
  const cats = [
    [Package, "Suplementos"],
    [Dumbbell, "Acessorios"],
    [Shirt, "Vestuario"],
    [ShoppingBag, "Equipamentos"],
  ];
  const stores = Array.from(new Set(products.map((product) => product.store))).slice(0, 4);

  return (
    <section className="container-page py-12">
      <SectionHeader
        title={<>Marketplace <span className="text-limebrand">Noogym</span></>}
        subtitle="Produtos, lojas e parceiros dentro da mesma jornada fitness."
      />
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stores.map((store) => (
          <div key={store} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
            <Store className="h-7 w-7 text-limebrand" />
            <p className="mt-3 text-sm font-bold">{store}</p>
            <p className="mt-1 text-xs text-white/48">Loja parceira</p>
          </div>
        ))}
      </div>
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map(([Icon, label]) => (
          <div key={label as string} className="rounded-lg border border-white/12 bg-white/[0.035] p-5 text-center">
            <Icon className="mx-auto h-7 w-7 text-limebrand" />
            <p className="mt-3 text-sm">{label as string}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} showCartAction={false} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href="/marketplace" variant="ghost">
          Ver todos os Produtos
        </Button>
      </div>
    </section>
  );
}
