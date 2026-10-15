import Image from "next/image";
import { ChevronRight, Package } from "lucide-react";
import { cn } from "@/lib/utils";

type OrderCardProps = {
  order: {
    id: string;
    date: string;
    status: string;
    detail: string;
    items: string;
    total: string;
    color: string;
    images: string[];
  };
};

export function OrderCard({ order }: OrderCardProps) {
  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-panel p-5 shadow-card md:grid-cols-[170px_1fr_150px_150px] md:items-center">
      <div>
        <p className="text-sm text-white/56">Pedido</p>
        <h3 className="text-lg font-bold">{order.id}</h3>
        <p className="mt-2 text-sm text-white/62">{order.date}</p>
      </div>
      <div className="flex items-center gap-4">
        <Package className={cn("h-6 w-6", order.color)} />
        <div>
          <p className={cn("font-bold", order.color)}>{order.status}</p>
          <p className="mt-1 text-sm text-white/62">{order.detail}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {order.images.slice(0, 2).map((image) => (
          <div key={image} className="grid h-14 w-14 place-items-center rounded-md bg-white/5">
            <Image src={image} alt="" width={54} height={54} className="max-h-12 w-auto object-contain" />
          </div>
        ))}
        <div>
          <p className="text-sm">{order.items}</p>
          <p className="font-bold">{order.total}</p>
        </div>
      </div>
      <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-limebrand/70 px-4 text-sm font-bold text-limebrand">
        Ver detalhes <ChevronRight className="h-4 w-4" />
      </button>
    </article>
  );
}
