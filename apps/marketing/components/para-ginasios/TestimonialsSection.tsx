import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "./data";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section-shell scroll-mt-24 py-16" id="casos">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Quem usa, aprova"
          title={
            <>
              Histórias de quem{" "}
              <span className="text-noogym-green">transformou</span> seu ginásio
            </>
          }
        />
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-noogym-green md:mb-8"
          href="#precos"
        >
          Ver todos os casos
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article className="glass-card rounded-lg p-5 sm:p-6" key={testimonial.name}>
            <Quote className="mb-4 h-6 w-6 text-noogym-green" />
            <p className="text-sm leading-6 text-zinc-300 md:min-h-24">
              “{testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-noogym-green to-emerald-500 text-sm font-black text-black">
                {testimonial.initials}
              </div>
              <div>
                <h3 className="text-sm font-black text-white">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
