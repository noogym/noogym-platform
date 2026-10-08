import { gyms } from "@/data/gyms";
import { GymCard } from "@/components/gyms/GymCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GymPreview() {
  return (
    <section className="container-page py-12">
      <SectionHeader title={<>Explore ginásios <span className="text-limebrand">perto de você</span></>} subtitle="Encontre academias parceiras em sua cidade e treine sem limites." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {gyms.slice(0, 4).map((gym) => <GymCard key={gym.slug} gym={gym} compact hideSelectButton />)}
      </div>
      <div className="mt-8 text-center"><Button href="/explorar-ginasios" variant="ghost">Ver todos os ginásios</Button></div>
    </section>
  );
}
