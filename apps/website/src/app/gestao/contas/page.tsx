import type { Metadata } from "next";
import { AdminAccountsClient } from "./AdminAccountsClient";

export const metadata: Metadata = {
  title: "Contas",
  description: "Listagem administrativa de todas as contas criadas na Noogym.",
};

export default function AdminAccountsPage() {
  return <AdminAccountsClient />;
}
