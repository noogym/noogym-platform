"use client";

export function CategoryFilter({ items, active, onChange }: { items: string[]; active: string; onChange: (item: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button key={item} onClick={() => onChange(item)} className={`rounded-md border px-4 py-2 text-sm ${active === item ? "border-limebrand bg-limebrand/10 text-limebrand" : "border-white/12 text-white/65"}`}>
          {item}
        </button>
      ))}
    </div>
  );
}
