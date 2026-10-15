import type { Metadata } from "next";
import { Mail, MessageCircle, ShoppingBag, Dumbbell, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Central de ajuda",
  description: "Ajuda e canais de contacto da Noogym.",
};

const topics = [
  { icon: Dumbbell, title: "Planos e ginásios", text: "Entenda como escolher um plano, selecionar ginásios e confirmar preços disponíveis." },
  { icon: ShoppingBag, title: "Marketplace", text: "Veja informações sobre produtos, carrinho, entrega e parceiros comerciais." },
  { icon: Building2, title: "Para ginásios", text: "Solicite uma demonstração, tire dúvidas sobre ERP e entenda o processo de parceria." },
];

export default function HelpPage() {
  return (
    <section className="container-page py-10">
      <div className="glass rounded-lg p-6 sm:p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Ajuda Noogym</p>
        <h1 className="mt-4 text-3xl font-black sm:text-5xl">Como podemos ajudar?</h1>
        <p className="mt-4 max-w-3xl leading-7 text-white/62">
          Encontre orientação rápida sobre os principais fluxos da plataforma ou fale diretamente com a equipa Noogym.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
              <topic.icon className="h-9 w-9 rounded-md bg-limebrand/12 p-2 text-limebrand" />
              <h2 className="mt-4 text-lg font-bold">{topic.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/58">{topic.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a className="rounded-lg border border-limebrand/25 bg-limebrand/8 p-5 transition hover:border-limebrand/60" href="mailto:suporte@noogym.com">
            <Mail className="h-6 w-6 text-limebrand" />
            <h2 className="mt-3 font-bold">Enviar e-mail</h2>
            <p className="mt-1 text-sm text-white/58">suporte@noogym.com</p>
          </a>
          <a className="rounded-lg border border-white/12 bg-white/[0.035] p-5 transition hover:border-limebrand/60" href="https://wa.me/244923456789">
            <MessageCircle className="h-6 w-6 text-limebrand" />
            <h2 className="mt-3 font-bold">Falar no WhatsApp</h2>
            <p className="mt-1 text-sm text-white/58">+244 923 456 789</p>
          </a>
        </div>
      </div>
    </section>
  );
}
