import { cn } from "@/lib/utils";

export function StatCard({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-white/10 bg-white/[0.035] p-5 text-center", className)}>
      <div className="text-3xl font-black text-limebrand">{value}</div>
      <div className="mt-1 text-sm text-white/64">{label}</div>
    </div>
  );
}
