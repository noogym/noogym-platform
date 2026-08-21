import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso da Noogym para visitantes da landing page e interessados no software de gestão para ginásios.",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <section className="section-shell max-w-3xl py-20">
        <Link className="text-sm font-bold text-noogym-green" href="/">
          Voltar ao início
        </Link>
        <h1 className="mt-8 text-3xl font-black tracking-tight md:text-5xl">
          Termos de Uso
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-300">
          <p>
            Ao utilizar este site, o visitante concorda em fornecer informações
            verdadeiras nos formulários de contacto e em usar os canais da Noogym
            apenas para fins legítimos relacionados ao software e serviços.
          </p>
          <p>
            As informações apresentadas na landing page podem ser atualizadas a
            qualquer momento. Condições comerciais, funcionalidades e preços são
            confirmados durante a demonstração ou proposta comercial.
          </p>
          <p>
            Todo o conteúdo, marca, imagens e materiais associados à Noogym são
            protegidos e não podem ser reproduzidos sem autorização.
          </p>
        </div>
      </section>
    </main>
  );
}
