import Link from "next/link";
import { cn } from "@/lib/utils";
import { tabToSlug } from "./tabUtils";

type TabsNavigationProps = {
  tabs: string[];
  active?: string;
  baseHref: string;
};

export function TabsNavigation({ tabs, active = tabs[0], baseHref }: TabsNavigationProps) {
  return (
    <nav className="-mx-3 flex snap-x items-center gap-1 overflow-x-auto border-b border-white/10 px-3 [scrollbar-width:none] sm:-mx-5 sm:px-5 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden" aria-label="Tabs da pagina">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <Link
            key={tab}
            href={isActive ? baseHref : `${baseHref}?tab=${tabToSlug(tab)}`}
            className={cn(
              "h-12 shrink-0 snap-start whitespace-nowrap border-b-2 px-4 pt-3 text-sm font-medium transition sm:px-5",
              isActive ? "border-limebrand text-limebrand" : "border-transparent text-white/74 hover:text-white",
            )}
          >
            {tab}
          </Link>
        );
      })}
    </nav>
  );
}
