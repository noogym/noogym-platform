import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Termos gerais de uso da plataforma Noogym.",
};

const sections = [
  {
    title: "Uso da plataforma",
    text: "A Noogym conecta atletas, ginásios, profissionais e parceiros comerciais. Algumas funcionalidades dependem de validação, disponibilidade do ginásio ou aprovação da equipa Noogym.",
  },
  {
    title: "Planos e parceiros",
    text: "Os preços e benefícios podem variar conforme o ginásio selecionado, modalidade, capacidade, localização e condições comerciais do parceiro.",
  },
  {
    title: "Conteúdos e serviços",
    text: "Programas de treino, nutrição, eventos e marketplace podem ter regras próprias, limites de utilização, créditos, revisões ou serviços adicionais pagos.",
  },
  {
    title: "Contacto",
    text: "Para dúvidas sobre a utilização da plataforma, fale com a equipa Noogym pelo e-mail suporte@noogym.com.",
  },
];

export default function TermsPage() {
  return (
    <section className="container-page py-10">
      <div className="glass rounded-lg p-6 sm:p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Noogym</p>
        <h1 className="mt-4 text-3xl font-black sm:text-5xl">Termos de uso</h1>
        <p className="mt-4 max-w-3xl leading-7 text-white/62">
          Esta página apresenta um resumo dos termos gerais para orientar usuários e parceiros. A versão jurídica completa deve ser validada antes da publicação oficial.
        </p>
        <div className="mt-8 grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="mt-2 leading-7 text-white/62">{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
