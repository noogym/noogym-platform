"use client";

import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const countries = [
  { code: "AO", name: "Angola", dialCode: "+244" },
  { code: "BR", name: "Brasil", dialCode: "+55" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "MZ", name: "Moçambique", dialCode: "+258" },
  { code: "ZA", name: "África do Sul", dialCode: "+27" },
  { code: "NA", name: "Namíbia", dialCode: "+264" },
  { code: "CV", name: "Cabo Verde", dialCode: "+238" },
  { code: "ST", name: "São Tomé", dialCode: "+239" },
];

type PhoneInputProps = {
  className?: string;
  compact?: boolean;
  error?: string;
  helper?: string;
  label: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
};

export function PhoneInput({
  className,
  compact = false,
  error,
  helper,
  label,
  name,
  onChange,
  placeholder = "923 456 789",
  required,
  value,
}: PhoneInputProps) {
  const country = findCountry(value);
  const localNumber = stripDialCode(value, country.dialCode);

  function updateCountry(nextDialCode: string) {
    onChange(formatPhoneValue(nextDialCode, localNumber));
  }

  function updateNumber(nextNumber: string) {
    onChange(formatPhoneValue(country.dialCode, nextNumber));
  }

  return (
    <label className={cn("block", className)}>
      <span className={cn("font-medium text-white/86", compact ? "text-xs" : "text-xs")}>{label}</span>
      <span
        className={cn(
          "mt-2 flex min-w-0 items-center overflow-hidden rounded-md border border-white/15 bg-[#070d10]/78 transition focus-within:border-limebrand/75 focus-within:ring-2 focus-within:ring-limebrand/10",
          error && "border-red-400/60 focus-within:border-red-300 focus-within:ring-red-400/10",
        )}
      >
        <span className={cn("relative flex shrink-0 items-center border-r border-white/12 bg-white/[0.025]", compact ? "h-10 w-[104px]" : "h-12 w-[112px]")}>
          <select
            aria-label={`${label}: país`}
            className={cn(
              "h-full w-full appearance-none bg-transparent pl-3 pr-7 text-sm font-black text-white outline-none",
              compact && "text-xs",
            )}
            value={country.dialCode}
            onChange={(event) => updateCountry(event.target.value)}
          >
            {countries.map((item) => (
              <option key={item.code} className="bg-[#070d10] text-white" value={item.dialCode}>
                {item.dialCode} {item.code}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/58" />
        </span>
        <span className="relative block min-w-0 flex-1">
          <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
          <input
            className={cn(
              "w-full min-w-0 rounded-md bg-transparent px-3 pl-10 text-sm text-white outline-none placeholder:text-white/35",
              compact ? "h-10" : "h-12",
              error && "text-red-100",
            )}
            inputMode="tel"
            name={name}
            placeholder={placeholder}
            required={required}
            type="tel"
            value={localNumber}
            onChange={(event) => updateNumber(event.target.value)}
          />
        </span>
      </span>
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
      {!error && helper ? <span className="mt-1.5 block text-xs text-white/42">{helper}</span> : null}
    </label>
  );
}

function findCountry(value: string) {
  const normalized = value.trim();
  return countries.find((country) => normalized.startsWith(country.dialCode)) ?? countries[0];
}

function stripDialCode(value: string, dialCode: string) {
  return value.trim().replace(dialCode, "").trimStart();
}

function formatPhoneValue(dialCode: string, localNumber: string) {
  const cleanNumber = localNumber.trimStart();
  return cleanNumber ? `${dialCode} ${cleanNumber}` : dialCode;
}

export function hasPhoneNumber(value?: string) {
  if (!value) return false;
  const country = findCountry(value);
  return stripDialCode(value, country.dialCode).replace(/\D/g, "").length >= 5;
}
