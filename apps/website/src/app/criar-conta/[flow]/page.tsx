import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BadgeCheck, Building2, Link2, ShieldCheck, Store, UserCheck } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { OnboardingRequestForm } from "@/components/auth/OnboardingRequestForm";

const flows = {
  personal: {
    title: "Personal trainer",
    description: "Solicite acesso profissional para usar ferramentas de personal com a mesma conta Noogym.",
    features: [
      { icon: BadgeCheck, title: "Validação profissional", text: "O acesso depende da análise das informações e certificações enviadas." },
      { icon: UserCheck, title: "Mesmo login", text: "O perfil profissional é adicionado à conta já usada no site e app." },
      { icon: ShieldCheck, title: "Permissões controladas", text: "Ferramentas de personal só são liberadas depois da aprovação." },
    ],
  },
  academia: {
    title: "Ginásio parceiro",
    description: "Solicite uma demonstração e prepare o acesso do ginásio ao Noogym ERP.",
    features: [
      { icon: Building2, title: "Onboarding assistido", text: "A equipa configura o ginásio, os planos e os acessos de gestão." },
      { icon: ShieldCheck, title: "Acesso pelo ERP", text: "Gestores usam a mesma conta, mas só entram no ERP com permissão aprovada." },
      { icon: UserCheck, title: "Equipa autorizada", text: "Cada colaborador recebe apenas o acesso aprovado pelo ginásio." },
    ],
  },
  vendedor: {
    title: "Vendedor Noogym Market",
    description: "Apresente sua loja para solicitar acesso de vendedor no marketplace Noogym.",
    features: [
      { icon: Store, title: "Análise da loja", text: "Dados comerciais e catálogo passam por revisão antes da publicação." },
      { icon: ShieldCheck, title: "Marketplace confiável", text: "A aprovação protege clientes, parceiros e a qualidade da plataforma." },
      { icon: UserCheck, title: "Operação autorizada", text: "O painel de vendedor é liberado na mesma conta após aprovação comercial." },
    ],
  },
  "vincular-academia": {
    title: "Vincule sua conta",
    description: "Conecte sua conta ao cadastro existente no ginásio.",
    features: [
      { icon: Link2, title: "Uma conta Noogym", text: "Use a mesma identidade no site, no app e nos ginásios parceiros." },
      { icon: Building2, title: "Dados do ginásio", text: "O vínculo é confirmado com as informações existentes no ERP." },
      { icon: ShieldCheck, title: "Confirmação segura", text: "Correspondências duvidosas dependem da aprovação do ginásio." },
    ],
  },
} as const;

type Flow = keyof typeof flows;

export function generateStaticParams() {
  return Object.keys(flows).map((flow) => ({ flow }));
}

export async function generateMetadata({ params }: { params: Promise<{ flow: string }> }): Promise<Metadata> {
  const { flow } = await params;
  const config = flows[flow as Flow];
  if (!config) return {};
  return { title: config.title, description: config.description };
}

export default async function RegistrationFlowPage({ params }: { params: Promise<{ flow: string }> }) {
  const { flow } = await params;
  const config = flows[flow as Flow];
  if (!config) notFound();

  if (flow === "academia") {
    redirect("/para-ginasios#agendar-demonstracao");
  }

  if (flow === "personal" || flow === "vendedor" || flow === "vincular-academia") {
    const hash = flow === "vincular-academia" ? "vincular-academia" : flow;
    redirect(`/login?next=${encodeURIComponent(`/dashboard/perfil?tab=perfis-e-vinculos#${hash}`)}`);
  }

  return (
    <AuthLayout
      heroTitle={<>{config.title} <span className="text-limebrand">com acesso seguro.</span></>}
      heroText={config.description}
      features={[...config.features]}
      backHref="/criar-conta"
      backLabel="Voltar ao cadastro"
    >
      <OnboardingRequestForm kind={flow === "vendedor" ? "vendedor" : "academia"} />
    </AuthLayout>
  );
}
