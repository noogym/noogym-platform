import type { Metadata } from "next";
import { AdminUsersClient } from "./AdminUsersClient";

export const metadata: Metadata = {
  title: "Usuarios admin",
  description: "Criacao e revisao de usuarios com permissao administrativa Noogym.",
};

export default function AdminUsersPage() {
  return <AdminUsersClient />;
}
