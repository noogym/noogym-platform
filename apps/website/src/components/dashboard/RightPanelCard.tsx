import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RightPanelCardProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function RightPanelCard({ title, action, children, className }: RightPanelCardProps) {
  return (
    <aside className={cn("min-w-0 rounded-lg border border-white/10 bg-panel p-4 shadow-card sm:p-5", className)}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="min-w-0 text-lg font-bold">{title}</h3>
        {action}
      </div>
      {children}
    </aside>
  );
}
