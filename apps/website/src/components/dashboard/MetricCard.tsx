import { cn } from "@/lib/utils";
import { dashboardIcons, type DashboardIconName } from "./icons";

type MetricCardProps = {
  icon: DashboardIconName;
  label: string;
  value: string;
  detail?: string;
  trend?: string;
  accent?: "lime" | "blue" | "purple" | "yellow";
};

const accentClasses = {
  lime: "bg-limebrand/12 text-limebrand",
  blue: "bg-sky-500/12 text-sky-400",
  purple: "bg-purple-500/14 text-purple-300",
  yellow: "bg-yellow-400/12 text-yellow-300",
};

export function MetricCard({ icon, label, value, detail, trend, accent = "lime" }: MetricCardProps) {
  const Icon = dashboardIcons[icon];
  return (
    <div className="min-w-0 rounded-lg border border-white/10 bg-panel p-4 shadow-card sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-white/74">{label}</p>
          <p className="mt-3 break-words text-2xl font-bold tracking-normal sm:text-3xl">{value}</p>
          {detail ? <p className="mt-2 text-sm text-white/58">{detail}</p> : null}
          {trend ? <p className="mt-2 text-sm font-semibold text-limebrand">{trend}</p> : null}
        </div>
        <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-full", accentClasses[accent])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
