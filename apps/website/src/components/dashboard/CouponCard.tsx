import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type CouponCardProps = {
  coupon: {
    code: string;
    tag: string;
    title: string;
    details: string;
    expires: string;
    min: string;
    used?: boolean;
  };
};

export function CouponCard({ coupon }: CouponCardProps) {
  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-panel p-4 shadow-card md:grid-cols-[200px_1fr_170px] md:items-center">
      <div className="grid h-20 place-items-center rounded-md border border-dashed border-white/25 text-2xl font-black text-limebrand">{coupon.code}</div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded bg-limebrand/20 px-2 py-1 text-xs font-black text-limebrand">{coupon.tag}</span>
          <h3 className="font-bold">{coupon.title}</h3>
        </div>
        <p className="mt-2 text-sm text-white/62">{coupon.details}</p>
        <p className="mt-3 text-sm text-white/52">Válido até {coupon.expires} • {coupon.min}</p>
      </div>
      <div className="space-y-3">
        <button className={cn("h-11 w-full rounded-md font-bold", coupon.used ? "border border-white/12 text-white/60" : "bg-limebrand text-black")}>
          {coupon.used ? <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Usado</span> : "Usar agora"}
        </button>
        <button className="mx-auto flex items-center gap-2 text-sm text-white/58">Ver detalhes <ChevronDown className="h-4 w-4" /></button>
      </div>
    </article>
  );
}
