import { MarketplaceClient } from "@/app/marketplace/MarketplaceClient";

export default function DashboardMarketplacePage() {
  return <div className="mx-auto w-full max-w-[1200px]"><div className="mb-6"><h1 className="text-2xl font-black sm:text-3xl">Marketplace</h1><p className="mt-2 text-sm text-white/60">Produtos para apoiar a tua rotina de treino.</p></div><MarketplaceClient embedded /></div>;
}
