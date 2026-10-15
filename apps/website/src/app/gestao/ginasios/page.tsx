import type { Metadata } from "next";
import { GymAdminClient } from "./GymAdminClient";

export const metadata: Metadata = {
  title: "Gestao de ginasios",
  description: "Revisao administrativa de ginasios descobertos e parceiros Noogym.",
};

export default function GymManagementPage() {
  return <GymAdminClient />;
}
