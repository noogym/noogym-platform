import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function FinalCTASection() {
  return (
    <section className="container-page py-10 sm:py-14">
      <div className="relative isolate overflow-hidden rounded-md border border-limebrand/15 bg-[#101b07] px-5 pb-7 pt-40 sm:px-8 sm:pt-44 md:min-h-[310px] md:px-10 md:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_50%,rgba(182,255,0,0.28),transparent_34%),linear-gradient(100deg,#263d00_0%,#101b07_46%,#080d09_100%)]" />
        <div className="absolute -left-2 top-0 h-44 w-40 sm:left-2 sm:h-52 sm:w-48 md:left-6 md:top-1/2 md:h-[300px] md:w-[250px] md:-translate-y-1/2">
          <Image
            src="/images/home/noogym-robot-mascot-cutout.webp"
            alt="Mascote Noogym a cumprimentar"
            fill
            sizes="(min-width: 768px) 250px, 190px"
            className="object-contain object-bottom"
          />
        </div>
        <div className="relative z-10 md:ml-auto md:max-w-[660px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Pronto para evoluir?</p>
          <h2 className="mt-3 text-balance text-3xl font-black sm:text-4xl">O próximo passo começa contigo.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/68 sm:text-base">
            Junta-te a uma comunidade que acredita numa vida mais activa, saudável e equilibrada.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/criar-conta"
              eventName="homepage_cta_click"
              eventParams={{ cta_name: "conhecer_app", section: "final_cta" }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-limebrand px-5 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Conhecer o App <ArrowRight className="h-4 w-4" />
            </TrackedLink>
            <TrackedLink
              href="mailto:suporte@noogym.com?subject=Contacto%20Noogym"
              eventName="homepage_contact_click"
              eventParams={{ contact_type: "email", section: "final_cta" }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-limebrand hover:text-limebrand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand"
            >
              Falar com a nossa equipa <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
