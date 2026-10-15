import { cn } from "@/lib/utils";

export function Badge({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full border border-limebrand/30 bg-limebrand/10 px-3 py-1 text-xs font-semibold text-limebrand", className)}>
      {children}
    </span>
  );
}
