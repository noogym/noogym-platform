import { cn } from "@/lib/utils";

type TabsProps = {
  tabs: string[];
  active?: string;
};

export function Tabs({ tabs, active = tabs[0] }: TabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={cn(
            "h-12 border-b-2 px-5 text-sm font-medium transition",
            tab === active ? "border-limebrand text-limebrand" : "border-transparent text-white/74 hover:text-white",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
