"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  CreditCard,
  PackageCheck,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Store,
  Truck,
  X,
} from "lucide-react";
import { CategorySidebar } from "@/components/marketplace/CategorySidebar";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Input } from "@/components/ui/Input";
import { partnerBrands, products, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Todos os precos", value: "all" },
  { label: "Ate 5.000 Kz", value: "0-5000" },
  { label: "5.000 - 10.000 Kz", value: "5000-10000" },
  { label: "10.000 - 20.000 Kz", value: "10000-20000" },
  { label: "Acima de 20.000 Kz", value: "20000-plus" },
];

const sortOptions = [
  { label: "Mais populares", value: "popular" },
  { label: "Menor preco", value: "price-asc" },
  { label: "Maior preco", value: "price-desc" },
  { label: "Melhor avaliacao", value: "rating" },
  { label: "Maiores descontos", value: "discount" },
];

export function MarketplaceClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Suplementos");
  const [brand, setBrand] = useState("Todas");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("popular");

  const categoryCounts = useMemo(() => {
    return products.reduce<Record<string, number>>(
      (counts, product) => {
        counts.Suplementos += 1;
        counts[product.category] = (counts[product.category] ?? 0) + 1;
        if (product.discount) counts.Ofertas += 1;
        return counts;
      },
      { Suplementos: 0, Ofertas: 0 },
    );
  }, []);

  const storeSummaries = useMemo(() => {
    return Object.values(
      products.reduce<Record<string, StoreSummary>>((summaries, product) => {
        const current = summaries[product.store] ?? {
          categories: new Set<string>(),
          products: 0,
          rating: 0,
          reviews: 0,
          store: product.store,
        };

        current.categories.add(product.category);
        current.products += 1;
        current.rating += product.rating;
        current.reviews += product.reviews;
        summaries[product.store] = current;

        return summaries;
      }, {}),
    ).sort((first, second) => second.reviews - first.reviews);
  }, []);

  const filtered = useMemo(() => {
    return products
      .filter((product) => {
        const haystack = `${product.name} ${product.store} ${product.category} ${product.brand}`.toLowerCase();
        const queryOk = haystack.includes(query.trim().toLowerCase());
        const categoryOk =
          category === "Suplementos" || (category === "Ofertas" ? Boolean(product.discount) : product.category === category);
        const brandOk = brand === "Todas" || product.brand === brand;
        const priceOk = matchesPriceRange(product, priceRange);

        return queryOk && categoryOk && brandOk && priceOk;
      })
      .sort((first, second) => sortProducts(first, second, sort));
  }, [brand, category, priceRange, query, sort]);

  const hasActiveFilters = query || category !== "Suplementos" || brand !== "Todas" || priceRange !== "all" || sort !== "popular";

  function clearFilters() {
    setQuery("");
    setCategory("Suplementos");
    setBrand("Todas");
    setPriceRange("all");
    setSort("popular");
  }

  return (
    <section className="container-page py-10">
      <div className="grid gap-5 lg:grid-cols-[250px_1fr]">
        <div className="lg:pt-28">
          <CategorySidebar active={category} counts={categoryCounts} onChange={setCategory} />
        </div>

        <div>
          <div className="max-w-3xl">
            <div>
              <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
                Marketplace <span className="text-limebrand">Noogym</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/64">
                Produtos, lojas e parceiros verificados para apoiar a evolucao dentro e fora do treino.
              </p>
            </div>
          </div>

          <div className="my-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <FeatureCard icon={Truck} title="Entrega rapida" text="Receba em Luanda." />
            <FeatureCard icon={ShieldCheck} title="Produtos originais" text="Parceiros verificados." />
            <FeatureCard icon={CreditCard} title="Pagamento seguro" text="Facilitado e protegido." />
            <FeatureCard icon={Star} title="Descontos exclusivos" text="Ofertas para membros." />
          </div>

          <div className="mb-5 rounded-lg border border-white/12 bg-white/[0.03] p-5">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-lg font-black">Lojas em destaque</p>
                <p className="text-sm text-white/50">Compre por parceiro e descubra ofertas dentro da rede Noogym.</p>
              </div>
              {query ? (
                <button onClick={() => setQuery("")} className="text-sm font-bold text-limebrand hover:text-limebrand2">
                  Ver todas
                </button>
              ) : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {storeSummaries.map((store) => (
                <button
                  key={store.store}
                  onClick={() => {
                    setQuery(store.store);
                    setCategory("Suplementos");
                    setBrand("Todas");
                  }}
                  className={cn(
                    "rounded-md border p-4 text-left transition hover:border-limebrand/70",
                    query === store.store ? "border-limebrand bg-limebrand/10" : "border-white/10 bg-black/18",
                  )}
                >
                  <Store className="h-6 w-6 text-limebrand" />
                  <h2 className="mt-3 font-bold">{store.store}</h2>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/58">
                    <span>{store.products} produtos</span>
                    <span>{store.categories.size} categorias</span>
                    <span>{(store.rating / store.products).toFixed(1)} estrela</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5 rounded-lg border border-white/12 bg-white/[0.03] p-3">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-lg font-black">Mais vendidos</p>
                <p className="text-sm text-white/50">
                  {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
                </p>
              </div>
              <Button variant="secondary" size="sm" className="h-11 w-full min-[420px]:w-auto" onClick={clearFilters} disabled={!hasActiveFilters}>
                {hasActiveFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
                {hasActiveFilters ? "Limpar" : "Filtros"}
              </Button>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(280px,1fr)_180px_190px_190px]">
              <Input
                icon
                className="h-11"
                placeholder="Buscar whey, creatina, marcas ou lojas..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <SelectControl
                icon={<PackageCheck className="h-4 w-4" />}
                label="Marca"
                value={brand}
                onChange={setBrand}
                options={["Todas", ...partnerBrands].map((item) => ({ label: item, value: item }))}
              />
              <SelectControl label="Preco" value={priceRange} onChange={setPriceRange} options={priceRanges} />
              <SelectControl icon={<ArrowUpDown className="h-4 w-4" />} label="Ordenar" value={sort} onChange={setSort} options={sortOptions} />
            </div>
          </div>

          {filtered.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/12 bg-white/[0.03] p-10 text-center">
              <Search className="mx-auto h-8 w-8 text-limebrand" />
              <h2 className="mt-4 text-2xl font-black">Nenhum produto encontrado</h2>
              <p className="mt-2 text-white/58">Tente outra categoria, marca ou faixa de preco.</p>
              <Button className="mt-5" onClick={clearFilters}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-white/12 bg-white/[0.03] p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Marcas parceiras</h2>
            <p className="mt-1 text-sm text-white/55">Clique numa marca para filtrar a loja.</p>
          </div>
          {brand !== "Todas" ? (
            <button onClick={() => setBrand("Todas")} className="text-sm font-bold text-limebrand hover:text-limebrand2">
              Ver todas
            </button>
          ) : null}
        </div>
        <div className="grid gap-4 text-center text-white/72 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partnerBrands.map((brandName) => (
            <button
              key={brandName}
              onClick={() => setBrand(brandName)}
              className={cn(
                "rounded-md border p-4 font-bold transition hover:border-limebrand/70 hover:text-limebrand",
                brand === brandName ? "border-limebrand bg-limebrand/10 text-limebrand" : "border-white/10",
              )}
            >
              {brandName}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

type StoreSummary = {
  categories: Set<string>;
  products: number;
  rating: number;
  reviews: number;
  store: string;
};

function SelectControl({
  icon,
  label,
  onChange,
  options,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      {icon ? <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/42">{icon}</span> : null}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-11 w-full rounded-md border border-white/12 bg-black/20 px-3 text-sm font-semibold text-white outline-none transition focus:border-limebrand/70",
          icon && "pl-10",
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-black text-white">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function matchesPriceRange(product: Product, range: string) {
  if (range === "all") return true;
  if (range === "0-5000") return product.price <= 5000;
  if (range === "5000-10000") return product.price >= 5000 && product.price <= 10000;
  if (range === "10000-20000") return product.price >= 10000 && product.price <= 20000;
  if (range === "20000-plus") return product.price >= 20000;
  return true;
}

function sortProducts(first: Product, second: Product, sort: string) {
  if (sort === "price-asc") return first.price - second.price;
  if (sort === "price-desc") return second.price - first.price;
  if (sort === "rating") return second.rating - first.rating || second.reviews - first.reviews;
  if (sort === "discount") return discountValue(second) - discountValue(first);
  return second.reviews - first.reviews;
}

function discountValue(product: Product) {
  if (!product.oldPrice) return 0;
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}
