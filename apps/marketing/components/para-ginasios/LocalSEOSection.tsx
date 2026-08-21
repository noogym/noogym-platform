import { MapPin, ReceiptText, ShieldCheck } from "lucide-react";

const localHighlights = [
  {
    icon: MapPin,
    title: "Feito para o mercado angolano",
    description:
      "Organize unidades, equipas e alunos com uma operação preparada para ginásios e academias em Angola.",
  },
  {
    icon: ReceiptText,
    title: "Faturação certificada pela AGT",
    description:
      "Emita e acompanhe documentos fiscais com um módulo de faturação certificado e integrado à gestão do ginásio.",
  },
  {
    icon: ShieldCheck,
    title: "Mensalidades e acessos sob controlo",
    description:
      "Acompanhe pagamentos, check-ins, QR Code, catracas e inadimplência em uma única plataforma.",
  },
];

export function LocalSEOSection() {
  return (
    <section className="section-shell scroll-mt-24 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow mb-4">Software para ginásios em Angola</p>
          <h2 className="max-w-3xl text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
            Gestão, mensalidades, acessos e faturação AGT em uma só plataforma
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            O Noogym ajuda academias, ginásios e redes fitness em Angola a
            centralizar a operação diária, reduzir pagamentos em atraso e
            acompanhar os indicadores que mostram onde o negócio pode crescer.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {localHighlights.map((item) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.025] p-5"
              key={item.title}
            >
              <item.icon className="mb-4 h-7 w-7 text-noogym-green" />
              <h3 className="text-sm font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
