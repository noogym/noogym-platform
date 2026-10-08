import type { Metadata } from "next";
import { ExploreGymsClient } from "./ExploreGymsClient";

export const metadata: Metadata = {
  title: "Explorar Ginásios",
  description: "Explore ginásios parceiros da rede Noogym perto de você com filtros, mapa e planos disponíveis.",
};

export default function ExploreGymsPage() {
  return <ExploreGymsClient />;
}
