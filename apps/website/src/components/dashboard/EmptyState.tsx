import type { ReactNode } from "react";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="grid min-h-52 place-items-center rounded-lg border border-dashed border-white/15 bg-black/20 p-8 text-center">
      <div>
        {icon ? <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-limebrand/10 text-limebrand">{icon}</div> : null}
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/58">{description}</p>
      </div>
    </div>
  );
}
