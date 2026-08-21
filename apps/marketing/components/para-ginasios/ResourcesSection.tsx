import { resources } from "./data";

export function ResourcesSection() {
  return (
    <section className="section-shell scroll-mt-24 py-8" id="recursos">
      <div className="glass-card rounded-lg p-4 sm:p-5">
        <p className="eyebrow mb-6 text-center">Recursos que fazem a diferença</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {resources.map((resource) => (
            <div className="flex min-w-0 gap-3 p-2 sm:p-3" key={resource.title}>
              <resource.icon className="mt-0.5 h-7 w-7 shrink-0 text-noogym-green" />
              <div className="min-w-0">
                <h3 className="text-sm font-black text-white">{resource.title}</h3>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
