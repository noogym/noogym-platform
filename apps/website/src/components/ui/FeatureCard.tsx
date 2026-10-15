import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({ icon: Icon, title, text, className }: { icon: LucideIcon; title: string; text: string; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-white/12 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-limebrand/45", className)}>
      <Icon className="h-8 w-8 text-limebrand" />
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
    </div>
  );
}
