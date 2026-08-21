import type { LucideIcon } from "lucide-react";

type AuthFeatureItemProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function AuthFeatureItem({ icon: Icon, title, text }: AuthFeatureItemProps) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-md border border-limebrand/45 bg-limebrand/5 text-limebrand shadow-[0_0_28px_rgba(182,255,0,0.08)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 max-w-[17rem] text-xs leading-5 text-white/58">{text}</p>
      </div>
    </div>
  );
}
