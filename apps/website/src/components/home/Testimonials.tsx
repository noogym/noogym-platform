import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="container-page py-12">
      <SectionHeader title="O que dizem sobre o Noogym" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-lg border border-white/12 bg-white/[0.035] p-6">
            <div className="mb-4 flex gap-1">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-limebrand text-limebrand" />)}</div>
            <p className="text-white/75">“{item.quote}”</p>
            <p className="mt-5 font-bold">{item.name}</p>
            <p className="text-sm text-white/45">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
