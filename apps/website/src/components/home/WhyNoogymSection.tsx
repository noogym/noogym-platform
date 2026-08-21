import { CheckCircle2, CircleMinus, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const comparisons = [
  ["Treino isolado", "Treino conectado a planos, ginasios e beneficios"],
  ["Um unico ginasio", "Rede de parceiros para descobrir e frequentar"],
  ["Loja separada", "Marketplace integrado ao percurso fitness"],
  ["Eventos dispersos", "Calendario, comunidade e experiencias Noogym"],
  ["Gestao fora da experiencia", "ERP para parceiros operarem melhor"],
  ["Conteudo sem continuidade", "Conta unica, dados e progresso no mesmo lugar"],
];

export function WhyNoogymSection() {
  return (
    <section className="container-page py-14">
      <SectionHeader
        eyebrow="Porque e diferente"
        title={<>Mais do que uma app de treino</>}
        subtitle="A proposta do Noogym e ligar a jornada do atleta ao negocio dos parceiros. Isso transforma funcionalidades soltas numa plataforma."
      />

      <div className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.035]">
        <div className="grid border-b border-white/10 bg-black/24 text-sm font-bold uppercase tracking-[0.14em] text-white/48 sm:grid-cols-2">
          <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">Apps tradicionais</div>
          <div className="p-4 text-limebrand">Noogym</div>
        </div>
        {comparisons.map(([traditional, noogym]) => (
          <div key={traditional} className="grid border-b border-white/10 last:border-b-0 sm:grid-cols-2">
            <div className="flex gap-3 border-b border-white/10 p-4 text-sm leading-6 text-white/56 sm:border-b-0 sm:border-r">
              <CircleMinus className="mt-0.5 h-5 w-5 shrink-0 text-white/28" />
              {traditional}
            </div>
            <div className="flex gap-3 p-4 text-sm font-semibold leading-6 text-white/82">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
              {noogym}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-lg border border-limebrand/25 bg-limebrand/10 p-5 sm:flex-row sm:items-center">
        <Layers3 className="h-8 w-8 shrink-0 text-limebrand" />
        <p className="text-sm leading-6 text-white/72">
          A primeira impressao fica simples: o atleta entende onde treinar; o parceiro entende como vender, gerir e crescer.
        </p>
      </div>
    </section>
  );
}
