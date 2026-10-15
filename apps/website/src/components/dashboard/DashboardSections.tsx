"use client";

import Link from "next/link";
import { ArrowRight, Check, CircleUserRound, Dumbbell, LockKeyhole, ShoppingBag, type LucideIcon } from "lucide-react";
import { useSession } from "@/components/auth/SessionContext";
import { screenMeta, type DashboardSlug } from "@/data/dashboard";
import { hasPersonalAccess, hasSellerAccess } from "@/lib/dashboard-access";
import { ExploreGymsClient } from "@/app/explorar-ginasios/ExploreGymsClient";
import { MarketplaceClient } from "@/app/marketplace/MarketplaceClient";
import { EmptyState } from "./EmptyState";

function NextStep({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-limebrand px-5 text-sm font-black text-black hover:bg-limebrand/90">{label}<ArrowRight className="h-4 w-4" /></Link>;
}

function SectionNote({ icon: Icon, title, description, href, action }: { icon: LucideIcon; title: string; description: string; href: string; action: string }) {
  return <section className="rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"><div className="grid h-12 w-12 place-items-center rounded-full bg-limebrand/10 text-limebrand"><Icon className="h-6 w-6" /></div><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/62">{description}</p><NextStep href={href} label={action} /></section>;
}

function AccountScreen({ tab }: { tab?: string }) {
  const { user } = useSession();
  const active = (tab ?? "dados-pessoais").toLowerCase();
  if (active.includes("seguranca")) {
    return <SectionNote icon={LockKeyhole} title="Segurança da conta" description="A tua sessão é protegida pelo acesso à conta Noogym. As opções avançadas de segurança serão apresentadas aqui quando estiverem disponíveis para gestão." href="/esqueci-senha" action="Recuperar palavra-passe" />;
  }
  if (active.includes("prefer")) {
    return <SectionNote icon={CircleUserRound} title="Preferências" description="As preferências pessoais serão sincronizadas com a app Noogym. Por agora, não existem opções adicionais configuradas nesta conta." href="/dashboard/resumo" action="Voltar ao início" />;
  }
  return <section className="max-w-3xl rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
    <div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-full bg-limebrand/10 text-limebrand"><CircleUserRound className="h-7 w-7" /></div><div><h2 className="text-xl font-black">Dados da conta</h2><p className="text-sm text-white/55">Informação associada à tua sessão Noogym.</p></div></div>
    <dl className="mt-7 divide-y divide-white/10">
      <div className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]"><dt className="text-sm text-white/52">Nome</dt><dd className="text-sm font-semibold">{user?.name || "Não indicado"}</dd></div>
      <div className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]"><dt className="text-sm text-white/52">E-mail</dt><dd className="text-sm font-semibold">{user?.email || "Não disponível"}</dd></div>
      <div className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]"><dt className="text-sm text-white/52">Telefone</dt><dd className="text-sm font-semibold">{user?.phone || "Ainda não indicado"}</dd></div>
    </dl>
    <p className="mt-4 rounded-lg border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/58">Os dados apresentados vêm da tua conta. A edição de nome e contacto será disponibilizada aqui quando estiver ligada ao serviço de conta.</p>
  </section>;
}

function PlanAndPaymentScreen({ tab }: { tab?: string }) {
  const paymentTab = (tab ?? "").toLowerCase().includes("pagamento");
  return paymentTab
    ? <EmptyState icon={<Check className="h-6 w-6" />} title="Histórico de pagamentos" description="Os pagamentos associados à tua conta serão apresentados aqui quando esta área estiver ligada ao serviço de pagamentos." />
    : <SectionNote icon={ShoppingBag} title="Planos Noogym" description="Consulta as opções e condições disponíveis na página de planos. Os detalhes de uma subscrição aparecerão aqui quando estiverem ligados à tua conta." href="/planos" action="Conhecer os planos" />;
}

export function DashboardSections({ slug, tab }: { slug: DashboardSlug; tab?: string }) {
  const { user } = useSession();
  if (slug === "perfil" || slug === "configuracoes" || slug === "seguranca") return <AccountScreen tab={slug === "seguranca" ? "seguranca" : slug === "configuracoes" ? "preferencias" : tab} />;
  if (slug === "assinatura" || slug === "pagamentos") return <PlanAndPaymentScreen tab={slug === "pagamentos" ? "pagamentos" : tab} />;
  if (slug === "painel-personal") return hasPersonalAccess(user)
    ? <EmptyState title="Painel profissional" description="As ferramentas de gestão de alunos e agenda serão mostradas quando estiverem ligadas a dados profissionais." />
    : <EmptyState title="Acesso profissional necessário" description="Este painel só aparece para contas de personal trainer aprovadas." />;
  if (slug === "minha-loja") return hasSellerAccess(user)
    ? <EmptyState title="Gestão da loja" description="Os dados da loja serão apresentados aqui quando houver uma loja activa ligada à tua conta." />
    : <EmptyState title="Acesso de vendedor necessário" description="A gestão de loja só aparece para contas de vendedor aprovadas." />;
  if (slug === "treinos") return <SectionNote icon={Dumbbell} title="Os teus treinos aparecem aqui" description="Ainda não há treinos sincronizados com esta conta. Usa a app Noogym para acompanhar a tua rotina e evolução." href="/planos" action="Conhecer a app" />;
  if (slug === "ginasios") return <ExploreGymsClient embedded />;
  if (slug === "marketplace") return <MarketplaceClient embedded />;
  if (slug === "pedidos") return <EmptyState icon={<ShoppingBag className="h-6 w-6" />} title="As tuas compras" description="O estado e os detalhes das compras aparecerão aqui quando esta área estiver ligada ao histórico do marketplace." />;
  if (slug === "check-ins") return <EmptyState title="Ainda não há check-ins" description="Os teus registos aparecem aqui depois de treinares num ginásio ligado à tua conta." />;
  if (slug === "progresso" || slug === "relatorios") return <EmptyState title="A tua evolução começa na app" description="Quando os teus treinos e medidas estiverem sincronizados, mostramos aqui a evolução real — sem estimativas inventadas." />;
  if (slug === "nutricao") return <EmptyState title="Nutrição na app Noogym" description="Regista a tua alimentação na app. Os dados sincronizados com a tua conta serão mostrados aqui." />;
  if (slug === "cupons") return <EmptyState title="Sem ofertas disponíveis" description="Quando houver ofertas válidas para a tua conta, vais encontrá-las aqui." />;
  if (slug === "favoritos") return <EmptyState title="Os teus guardados" description="Guarda ginásios e produtos nas respectivas páginas para os encontrares rapidamente." />;
  if (slug === "academias") return <EmptyState title="Descobre ginásios" description="Encontra espaços de treino e consulta informação actualizada na área de exploração." />;
  if (slug === "produtos") return <SectionNote icon={ShoppingBag} title="Marketplace Noogym" description="Explora produtos e serviços disponíveis no marketplace." href="/dashboard/marketplace" action="Abrir marketplace" />;
  return <EmptyState title={screenMeta[slug].title} description="Esta área ainda não está disponível para esta conta." />;
}
