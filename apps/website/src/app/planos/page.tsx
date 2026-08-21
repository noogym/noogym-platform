import type { Metadata } from "next";
import { PlansClient } from "./PlansClient";

export const metadata: Metadata = {
  title: "Planos",
  description: "Escolha entre planos Basic, Pro e Unlimited para acessar a rede Noogym com flexibilidade.",
};

export default function PlansPage() {
  return <PlansClient />;
}
