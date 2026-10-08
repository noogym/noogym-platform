import { ShieldCheck } from "lucide-react";
import { noogymIdentity } from "@/config/identity";

export function IdentityNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-md border border-limebrand/25 bg-limebrand/8 p-4">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
        <div>
          <p className="font-bold text-white">{noogymIdentity.title}</p>
          <p className="mt-1 text-sm leading-6 text-white/62">
            {compact ? noogymIdentity.shortText : noogymIdentity.detailText}
          </p>
        </div>
      </div>
    </div>
  );
}
