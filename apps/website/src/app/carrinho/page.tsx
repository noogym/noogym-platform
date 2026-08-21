import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/CartFlow";

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Revise os produtos do carrinho Noogym e finalize sua compra no marketplace.",
};

export default function CartPage() {
  return <CartPageClient />;
}
