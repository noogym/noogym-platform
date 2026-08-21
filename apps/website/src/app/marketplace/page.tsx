import type { Metadata } from "next";
import { MarketplaceClient } from "./MarketplaceClient";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Marketplace Noogym com suplementos, acessórios, roupas, equipamentos e ofertas fitness.",
};

export default function MarketplacePage() {
  return <MarketplaceClient />;
}
