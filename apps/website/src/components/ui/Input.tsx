import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: boolean;
};

export function Input({ className, icon, ...props }: InputProps) {
  return (
    <label className="relative block">
      {icon ? <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" /> : null}
      <input
        className={cn(
          "h-12 w-full rounded-md border border-white/12 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-limebrand/70",
          icon && "pl-11",
          className,
        )}
        {...props}
      />
    </label>
  );
}
