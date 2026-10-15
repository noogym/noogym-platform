import { BadgeCheck, Building2, CalendarCheck, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function HowItWorks() {
  const steps = [
    { icon: BadgeCheck, title: "Crie a sua conta", text: "Entre uma vez e acesse planos, ginasios, eventos e beneficios." },
    { icon: Building2, title: "Escolha onde treinar", text: "Descubra parceiros, compare planos e encontre a melhor opcao." },
    { icon: CalendarCheck, title: "Use a rede", text: "Faca check-in, participe de eventos e compre produtos ligados ao seu objetivo." },
    { icon: Trophy, title: "Acompanhe a evolucao", text: "Centralize progresso, historico e novas oportunidades na plataforma." },
  ];

  return (
    <section className="container-page py-16">
      <SectionHeader
        eyebrow="Como funciona"
        title="Uma entrada para todo o fitness"
        subtitle="A experiencia comeca simples para o atleta e abre espaco para parceiros, lojas, eventos e gestao trabalharem juntos."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <FeatureCard key={step.title} {...step} />
        ))}
      </div>
    </section>
  );
}
