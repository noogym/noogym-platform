"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export type PriceRangeFilter = "Todos" | "Até Kz 20.000" | "Kz 20.000 - 35.000" | "Kz 35.000+";
export type GymSourceFilter = "Todos" | "Parceiros Noogym" | "Google Maps";
export type GymSortOption = "Recomendados" | "Mais perto" | "Melhor avaliação" | "Menor preço" | "Mais avaliações" | "Parceiros primeiro";

export type GymFiltersState = {
  favoritesOnly: boolean;
  hasPhoto: boolean;
  location: string;
  minRating: boolean;
  openNow: boolean;
  priceRange: PriceRangeFilter;
  radius: number;
  resources: string[];
  source: GymSourceFilter;
  type: string;
};

type GymFiltersProps = {
  filters: GymFiltersState;
  query: string;
  resultCount: number;
  setFilters: (filters: GymFiltersState) => void;
  setQuery: (value: string) => void;
  setSort: (value: GymSortOption) => void;
  sort: GymSortOption;
};

const typeChips = ["Todos", "Musculação", "CrossFit", "Funcional", "Lutas", "Yoga/Pilates", "Premium"];
const priceRanges: PriceRangeFilter[] = ["Todos", "Até Kz 20.000", "Kz 20.000 - 35.000", "Kz 35.000+"];
const resources = ["Personal trainer", "Aulas coletivas", "Estacionamento", "Ar condicionado", "Vestiários"];
const locations = ["Luanda, Angola", "Maianga", "Talatona", "Ingombota", "Miramar", "Benfica", "Kilamba"];
const sources: GymSourceFilter[] = ["Todos", "Parceiros Noogym", "Google Maps"];
const sortOptions: GymSortOption[] = ["Recomendados", "Mais perto", "Melhor avaliação", "Menor preço", "Mais avaliações", "Parceiros primeiro"];

export const defaultGymFilters: GymFiltersState = {
  favoritesOnly: false,
  hasPhoto: false,
  location: "Luanda, Angola",
  minRating: false,
  openNow: false,
  priceRange: "Todos",
  radius: 10,
  resources: [],
  source: "Todos",
  type: "Todos",
};

export function GymFilters({ filters, query, resultCount, setFilters, setQuery, setSort, sort }: GymFiltersProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const activeAdvancedCount =
    (filters.type !== "Todos" ? 1 : 0) +
    (filters.priceRange !== "Todos" ? 1 : 0) +
    filters.resources.length +
    (filters.source !== "Todos" ? 1 : 0) +
    (filters.openNow ? 1 : 0) +
    (filters.hasPhoto ? 1 : 0) +
    (filters.minRating ? 1 : 0) +
    (filters.favoritesOnly ? 1 : 0);

  function updateFilter(nextFilters: Partial<GymFiltersState>) {
    setFilters({ ...filters, ...nextFilters });
  }

  function toggleResource(resource: string) {
    const nextResources = filters.resources.includes(resource)
      ? filters.resources.filter((item) => item !== resource)
      : [...filters.resources, resource];

    updateFilter({ resources: nextResources });
  }

  function clearFilters() {
    setQuery("");
    setFilters(defaultGymFilters);
    setSort("Recomendados");
  }

  const quickFilters: Array<{ active: boolean; label: string; update: Partial<GymFiltersState> }> = [
    { active: filters.openNow, label: "Aberto agora", update: { openNow: !filters.openNow } },
    { active: filters.source === "Parceiros Noogym", label: "Parceiros", update: { source: filters.source === "Parceiros Noogym" ? "Todos" : "Parceiros Noogym" } },
    { active: filters.source === "Google Maps", label: "Google Maps", update: { source: filters.source === "Google Maps" ? "Todos" : "Google Maps" } },
    { active: filters.hasPhoto, label: "Com fotos", update: { hasPhoto: !filters.hasPhoto } },
    { active: filters.minRating, label: "4.6+", update: { minRating: !filters.minRating } },
    { active: filters.favoritesOnly, label: "Favoritos", update: { favoritesOnly: !filters.favoritesOnly } },
  ];

  return (
    <aside className="glass h-max rounded-lg p-4">
      <Input icon placeholder="Buscar por nome ou bairro..." value={query} onChange={(event) => setQuery(event.target.value)} />
      <div className="mt-5 space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-bold">Localização</h3>
          <select
            className="h-11 w-full rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm"
            onChange={(event) => updateFilter({ location: event.target.value })}
            value={filters.location}
          >
            {locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Raio de busca</span>
            <span>{filters.radius} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={filters.radius}
            className="w-full accent-limebrand"
            onChange={(event) => updateFilter({ radius: Number(event.target.value) })}
          />
        </div>

        <div>
          <h3 className="mb-2 text-sm font-bold">Ordenar</h3>
          <select
            className="h-11 w-full rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm"
            onChange={(event) => setSort(event.target.value as GymSortOption)}
            value={sort}
          >
            {sortOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.025]">
          <button
            className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-bold"
            onClick={() => setAdvancedOpen((current) => !current)}
            type="button"
          >
            <span>Filtros avançados</span>
            <span className="flex items-center gap-2 text-xs text-white/50">
              {activeAdvancedCount ? `${activeAdvancedCount} ativos` : "Opcional"}
              <ChevronDown className={`h-4 w-4 transition ${advancedOpen ? "rotate-180 text-limebrand" : ""}`} />
            </span>
          </button>

          {advancedOpen ? (
            <div className="space-y-4 border-t border-white/10 p-3">
              <div>
                <h3 className="mb-2 text-sm font-bold">Atalhos</h3>
                <div className="flex flex-wrap gap-2">
                  {quickFilters.map((item) => (
                    <button
                      key={item.label}
                      className={`rounded-md border px-3 py-2 text-xs transition ${
                        item.active
                          ? "border-limebrand bg-limebrand/10 text-limebrand"
                          : "border-white/10 bg-white/[0.04] text-white/66 hover:border-white/24"
                      }`}
                      onClick={() => updateFilter(item.update)}
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold">Tipo de ginásio</h3>
                <div className="flex flex-wrap gap-2">
                  {typeChips.map((chip) => (
                    <button
                      key={chip}
                      className={`rounded-md border px-3 py-2 text-xs transition ${
                        filters.type === chip
                          ? "border-limebrand bg-limebrand/10 text-limebrand"
                          : "border-white/10 bg-white/[0.04] text-white/66 hover:border-white/24"
                      }`}
                      onClick={() => updateFilter({ type: chip })}
                      type="button"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold">Fonte</h3>
                <div className="flex flex-wrap gap-2">
                  {sources.map((item) => (
                    <button
                      key={item}
                      className={`rounded-md border px-3 py-2 text-xs transition ${
                        filters.source === item
                          ? "border-limebrand bg-limebrand/10 text-limebrand"
                          : "border-white/10 bg-white/[0.04] text-white/66 hover:border-white/24"
                      }`}
                      onClick={() => updateFilter({ source: item })}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold">Faixa de preço</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((item) => (
                    <button
                      key={item}
                      className={`rounded-md border px-3 py-2 text-xs transition ${
                        filters.priceRange === item
                          ? "border-limebrand bg-limebrand/10 text-limebrand"
                          : "border-white/10 bg-white/[0.04] text-white/66 hover:border-white/24"
                      }`}
                      onClick={() => updateFilter({ priceRange: item })}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold">Recursos</h3>
                <div className="grid gap-2">
                  {resources.map((item) => (
                    <label key={item} className="flex items-center gap-3 text-sm text-white/66">
                      <input
                        type="checkbox"
                        checked={filters.resources.includes(item)}
                        className="accent-limebrand"
                        onChange={() => toggleResource(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/58">
          <span className="font-bold text-limebrand">{resultCount}</span>{" "}
          {resultCount === 1 ? "ginásio encontrado" : "ginásios encontrados"}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <SlidersHorizontal className="h-4 w-4" /> Limpar
          </Button>
          <Button size="sm" onClick={() => undefined}>Aplicar filtros</Button>
        </div>
      </div>
    </aside>
  );
}
