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
  if (section === "academias") redirect("/dashboard/ginasios");
  if (section === "produtos") redirect("/dashboard/marketplace");
  if (section === "relatorios") redirect("/dashboard/progresso");
  if (section === "configuracoes") redirect("/dashboard/perfil?tab=preferencias");
  if (section === "seguranca") redirect("/dashboard/perfil?tab=seguranca");
  if (section === "pagamentos") redirect("/dashboard/assinatura?tab=pagamentos");
  if (!dashboardSlugs.includes(section as DashboardSlug)) notFound();
  return <DashboardPage slug={section as DashboardSlug} tab={query?.tab} />;
}
