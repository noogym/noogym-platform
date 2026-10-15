import type { Metadata } from "next";
import { RegisteredGymsClient } from "./RegisteredGymsClient";

export const metadata: Metadata = {
  title: "Ginasios cadastrados",
  description: "Listagem administrativa de ginasios cadastrados na base Noogym.",
};

export default function RegisteredGymsPage() {
  return <RegisteredGymsClient />;
}
