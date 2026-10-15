"use client";

import { cn } from "@/lib/utils";

export function Tabs({ items, active, onChange }: { items: string[]; active: string; onChange: (item: string) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-lg border border-white/12 bg-white/[0.025] p-1">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={cn(
            "h-10 shrink-0 rounded-md px-4 text-sm text-white/68 transition",
            active === item && "bg-limebrand text-black",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
