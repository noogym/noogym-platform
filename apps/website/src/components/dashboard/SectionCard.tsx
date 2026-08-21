import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionCard({ title, action, children, className }: SectionCardProps) {
  return (
    <section className={cn("min-w-0 rounded-lg border border-white/10 bg-panel p-4 shadow-card sm:p-5", className)}>
      {(title || action) ? (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          {title ? <h2 className="min-w-0 text-lg font-bold">{title}</h2> : <span />}
          {action}
        </div>
      ) : null}
      {children}
    </section>
  );
}
