import { notFound, redirect } from "next/navigation";
import { DashboardPage } from "@/components/dashboard/DashboardPage";
import { dashboardSlugs, type DashboardSlug } from "@/data/dashboard";

export function generateStaticParams() {
  return dashboardSlugs.map((section) => ({ section }));
}

export default async function DashboardSectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams?: Promise<{ tab?: string }>;
}) {
  const { section } = await params;
  const query = await searchParams;
  if (section === "painel-de-controle") redirect("/dashboard/resumo");
  if (!dashboardSlugs.includes(section as DashboardSlug)) notFound();
  return <DashboardPage slug={section as DashboardSlug} tab={query?.tab} />;
}
