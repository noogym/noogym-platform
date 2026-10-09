import { Activity, Compass, HeartHandshake } from "lucide-react";

const ideas = [
  { icon: Activity, title: "Começa contigo", text: "Cada pequeno passo ajuda a criar uma rotina mais activa." },
  { icon: Compass, title: "Encontra o teu caminho", text: "Descobre as opções que fazem sentido para os teus objectivos." },
  { icon: HeartHandshake, title: "Cresce em conjunto", text: "Pessoas e negócios podem tornar o bem-estar mais próximo." },
];

export function CommunitySection() {
  return (
    <section className="border-b border-white/8 bg-[#090d0c]">
      <div className="container-page py-12 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Uma ideia em movimento</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance text-3xl font-black leading-tight sm:text-4xl">O bem-estar constrói-se <span className="text-limebrand">todos os dias.</span></h2>
          <p className="max-w-md text-sm leading-6 text-white/58">Estamos a criar novas formas de aproximar pessoas, profissionais e negócios numa só jornada.</p>
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-3 md:gap-4">
          {ideas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-md border border-white/8 bg-[#111715] p-5 sm:p-6">
              <Icon aria-hidden="true" className="h-7 w-7 text-limebrand" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
