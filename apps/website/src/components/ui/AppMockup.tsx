import { Activity, Bot, Dumbbell, Zap } from "lucide-react";

export function AppMockup({ title = "Fala, atleta!" }: { title?: string }) {
  return (
    <div className="mx-auto w-full max-w-[310px] rounded-[2.1rem] border border-white/15 bg-black p-3 shadow-glow">
      <div className="rounded-[1.65rem] border border-white/10 bg-ink-900 p-5">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>9:41</span>
          <span>noogym</span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-limebrand">noogym</p>
            <h3 className="mt-2 text-xl font-bold">{title}</h3>
          </div>
          <Bot className="h-12 w-12 rounded-full bg-limebrand/12 p-2 text-limebrand" />
        </div>
        <div className="mt-6 rounded-lg border border-limebrand/20 bg-limebrand/10 p-4">
          <p className="text-sm text-white/60">Índice de evolução</p>
          <div className="mt-1 text-4xl font-black text-limebrand">84%</div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-full w-[84%] rounded-full bg-limebrand" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["24", "Treinos", Dumbbell],
            ["12.580", "Volume", Activity],
            ["8.420", "Calorias", Zap],
          ].map(([value, label, Icon]) => (
            <div key={label as string} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
              <Icon className="mb-2 h-4 w-4 text-limebrand" />
              <div className="text-lg font-bold">{value as string}</div>
              <div className="text-[11px] text-white/44">{label as string}</div>
            </div>
          ))}
        </div>
        <button className="mt-5 h-11 w-full rounded-md bg-limebrand font-bold text-black">Iniciar treino</button>
      </div>
    </div>
  );
}
