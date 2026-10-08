import { Search, SlidersHorizontal } from "lucide-react";

type FiltersProps = {
  search?: string;
  options?: string[];
  showFilterButton?: boolean;
};

export function Filters({ search = "Buscar...", options = [], showFilterButton = true }: FiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex h-11 min-w-0 flex-[1_1_220px] items-center gap-3 rounded-md border border-white/10 bg-black/25 px-4 text-sm text-white/45">
        <Search className="h-4 w-4 shrink-0 text-white/70" />
        <span className="truncate">{search}</span>
      </div>
      {options.map((option) => (
        <button key={option} className="h-11 min-w-0 flex-[1_1_150px] rounded-md border border-white/10 bg-black/25 px-4 text-left text-sm text-white/86 sm:flex-none">
          {option} <span className="float-right text-white/48">⌄</span>
        </button>
      ))}
      {showFilterButton ? (
        <button className="flex h-11 flex-[1_1_140px] items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-4 text-sm text-white/86 sm:flex-none">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
        </button>
      ) : null}
    </div>
  );
}
