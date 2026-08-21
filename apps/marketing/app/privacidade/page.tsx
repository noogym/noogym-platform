import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Noogym para pedidos de demonstração e contacto comercial.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <section className="section-shell max-w-3xl py-20">
        <Link className="text-sm font-bold text-noogym-green" href="/">
          Voltar ao início
        </Link>
        <h1 className="mt-8 text-3xl font-black tracking-tight md:text-5xl">
          Política de Privacidade
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-300">
          <p>
            A Noogym recolhe apenas os dados necessários para responder a pedidos
            de demonstração, contacto comercial e suporte, incluindo nome, email,
            telefone, empresa e informações sobre o ginásio.
          </p>
          <p>
            Estes dados são usados para contacto, agendamento, melhoria do
            atendimento e cumprimento de obrigações legais aplicáveis. Não
            vendemos dados pessoais a terceiros.
          </p>
          <p>
            O utilizador pode solicitar atualização, correção ou remoção dos seus
            dados através dos canais oficiais de contacto da Noogym.
          </p>
        </div>
      </section>
    </main>
  );
}
