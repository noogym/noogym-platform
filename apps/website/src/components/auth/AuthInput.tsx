"use client";

import type { LucideIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: LucideIcon;
  error?: string;
  helper?: string;
  showPasswordToggle?: boolean;
};

export function AuthInput({ label, icon: Icon, error, helper, showPasswordToggle, type = "text", className, ...props }: AuthInputProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && visible ? "text" : type;

  return (
    <label className="block">
      <span className="text-xs font-medium text-white/86">{label}</span>
      <span className="relative mt-2 block">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
        <input
          type={inputType}
          className={cn(
            "h-12 w-full min-w-0 rounded-md border border-white/15 bg-[#070d10]/78 px-4 pl-11 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-limebrand/75 focus:ring-2 focus:ring-limebrand/10",
            (isPassword || showPasswordToggle) && "pr-11",
            error && "border-red-400/60 focus:border-red-300 focus:ring-red-400/10",
            className,
          )}
          {...props}
        />
        {isPassword || showPasswordToggle ? (
          <button
            type="button"
            onClick={() => setVisible((current) => !current)}
            className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-white/58 transition hover:bg-white/8 hover:text-white"
            aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          >
            {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        ) : null}
      </span>
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
      {!error && helper ? <span className="mt-1.5 block text-xs text-white/42">{helper}</span> : null}
    </label>
  );
}
