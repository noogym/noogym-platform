import type { Metadata } from "next";
import { CheckoutPageClient } from "@/components/cart/CartFlow";

export const metadata: Metadata = {
  title: "Finalizar compra",
  description: "Escolha entrega e pagamento para finalizar seu pedido no marketplace Noogym.",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
