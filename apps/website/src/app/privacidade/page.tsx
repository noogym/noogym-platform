import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Resumo de privacidade e tratamento de dados da plataforma Noogym.",
};

const sections = [
  {
    title: "Dados recolhidos",
    text: "Podemos recolher dados de contacto, preferências, perfil de utilização, histórico de check-ins, interesses em campanhas e informações necessárias para operar planos, eventos e marketplace.",
  },
  {
    title: "Como usamos os dados",
    text: "Os dados ajudam a criar conta, validar acessos, apresentar ginásios, gerir benefícios, responder contactos, melhorar a experiência e apoiar parceiros autorizados.",
  },
  {
    title: "Partilha com parceiros",
    text: "A partilha de dados deve acontecer apenas quando necessária para prestar o serviço solicitado, como validação de ginásio, inscrição em evento ou entrega de produto.",
  },
  {
    title: "Segurança e contacto",
    text: "A Noogym deve proteger os dados com medidas técnicas e operacionais adequadas. Para pedidos relacionados à privacidade, contacte suporte@noogym.com.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="container-page py-10">
      <div className="glass rounded-lg p-6 sm:p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Noogym</p>
        <h1 className="mt-4 text-3xl font-black sm:text-5xl">Política de privacidade</h1>
        <p className="mt-4 max-w-3xl leading-7 text-white/62">
          Esta página resume como a Noogym deve tratar dados pessoais. A versão final deve ser revista juridicamente antes do lançamento oficial.
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
