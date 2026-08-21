"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { localeLabels, useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/translations";

const languages = [
  { code: "pt", label: localeLabels.pt },
  { code: "en", label: localeLabels.en },
] satisfies { code: Locale; label: string }[];

export function LanguageSwitcher({ className, align = "right" }: { className?: string; align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function chooseLanguage(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex rounded-md p-3 text-white/72 transition hover:bg-white/8 hover:text-limebrand focus:outline-none focus:ring-2 focus:ring-limebrand/60"
        aria-label="Selecionar idioma"
        aria-expanded={open}
      >
        <Globe2 className="h-5 w-5" />
      </button>

      {open ? (
        <div className={cn("absolute top-12 z-50 w-44 overflow-hidden rounded-md border border-white/12 bg-ink-950 shadow-2xl shadow-black/40", align === "right" ? "right-0" : "left-0")}>
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => chooseLanguage(language.code)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/76 transition hover:bg-white/8 hover:text-limebrand"
            >
              <span>{language.label}</span>
              {locale === language.code ? <Check className="h-4 w-4 text-limebrand" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
