import { SectionCard } from "./SectionCard";

type ProgressChartCardProps = {
  title?: string;
  compact?: boolean;
};

const points = "0,120 45,100 90,98 135,88 180,90 225,72 270,62 315,45 360,47 405,46 450,42 495,25 540,18 585,10 630,12";

export function ProgressChartCard({ title = "Seu progresso", compact = false }: ProgressChartCardProps) {
  return (
    <SectionCard title={title} action={<button className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/82">30 dias</button>}>
      <div className={compact ? "h-48" : "h-64"}>
        <svg viewBox="0 0 660 170" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="progressFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#b6ff00" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#b6ff00" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[25, 60, 95, 130].map((y) => (
            <line key={y} x1="0" x2="650" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
          ))}
          <polygon points={`0,160 ${points} 650,160`} fill="url(#progressFill)" />
          <polyline points={points} fill="none" stroke="#b6ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {["24 Abr", "28 Abr", "2 Mai", "6 Mai", "10 Mai", "14 Mai", "18 Mai", "22 Mai"].map((label, index) => (
            <text key={label} x={index * 88} y="168" fill="rgba(255,255,255,.62)" fontSize="12">{label}</text>
          ))}
        </svg>
      </div>
    </SectionCard>
  );
}
