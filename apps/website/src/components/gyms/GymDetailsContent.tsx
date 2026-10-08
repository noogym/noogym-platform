import type { Gym } from "@/data/gyms";
import { Card } from "@/components/ui/Card";

export function GymDetailsContent({ gym }: { gym: Gym }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold">Sobre o ginásio</h2>
      <p className="mt-3 leading-7 text-white/64">
        {gym.name} combina estrutura premium, aulas acompanhadas e check-in inteligente para uma rotina de treino mais simples e consistente.
      </p>
    </Card>
  );
}
