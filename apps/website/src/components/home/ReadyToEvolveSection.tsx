import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowRight, Play } from "lucide-react";

export function ReadyToEvolveSection() {
  return (
    <section className="container-page py-12">
      <div className="noise relative isolate min-h-[380px] overflow-hidden rounded-lg border border-white/12 bg-[#050805] px-5 py-8 sm:min-h-[350px] sm:px-8 md:min-h-[320px] md:px-12 lg:min-h-[330px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_45%,rgba(182,255,0,0.24),transparent_34%),linear-gradient(90deg,rgba(182,255,0,0.18),rgba(5,8,5,0.72)_38%,#050805_72%)]" />
        <div className="absolute inset-0 -z-10 bg-black/28" />

        <div className="pointer-events-none absolute -left-6 bottom-0 h-[255px] w-[215px] sm:left-1 sm:h-[300px] sm:w-[255px] md:left-3 md:h-[310px] md:w-[265px] lg:left-10 lg:h-[315px] lg:w-[270px]">
          <Image
            alt="Mascote Noogym a acenar"
            className="object-contain object-bottom"
            fill
            sizes="(min-width: 1024px) 330px, (min-width: 768px) 310px, (min-width: 640px) 280px, 230px"
            src="/images/home/noogym-robot-mascot.png"
          />
        </div>

        <div className="relative z-10 ml-auto flex max-w-[620px] flex-col items-start justify-center pt-36 sm:pt-40 md:min-h-[264px] md:pt-0 lg:mr-10 lg:min-h-[274px]">
          <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Pronto para evoluir?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/74 sm:text-base">
            Crie sua conta agora e tenha acesso à maior rede de ginásios e
            benefícios exclusivos.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-limebrand px-6 text-sm font-bold text-black transition hover:bg-limebrand2 hover:shadow-glow"
              href="/planos"
            >
              Criar minha conta grátis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <StoreButton icon={Apple} label="Em breve na" name="App Store" />
            <StoreButton icon={Play} label="Em breve no" name="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({
  icon: Icon,
  label,
  name,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
}) {
  return (
    <button
      aria-disabled="true"
      className="inline-flex min-h-11 cursor-default items-center gap-2 rounded-md border border-white/18 bg-black/46 px-3.5 text-left text-white/78"
      disabled
      type="button"
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="grid leading-none">
        <span className="text-[10px] font-medium text-white/62">{label}</span>
        <span className="text-sm font-bold">{name}</span>
      </span>
    </button>
  );
}
