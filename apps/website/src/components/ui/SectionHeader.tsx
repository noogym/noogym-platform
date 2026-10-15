export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-limebrand">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-normal text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-white/62">{subtitle}</p> : null}
    </div>
  );
}
