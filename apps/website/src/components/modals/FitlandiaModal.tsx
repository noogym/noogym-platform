"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Gift,
  LockKeyhole,
  Loader2,
  MapPin,
  Megaphone,
  MonitorUp,
  ShieldCheck,
  Star,
  Tag,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { fitlandiaCampaign, type FitlandiaFormId, type FitlandiaOptionId } from "@/config/fitlandia";
import { useFitlandiaModal } from "@/hooks/useFitlandiaModal";
import { cn } from "@/lib/utils";
import { hasPhoneNumber, PhoneInput } from "@/components/ui/PhoneInput";

const optionIcons: Record<FitlandiaOptionId, typeof Building2> = {
  gym: Building2,
  personal: UserRound,
  athlete: Dumbbell,
  explore: UsersRound,
};

const benefitIcons = [MonitorUp, Tag, Star, ShieldCheck];

export function FitlandiaModal() {
  const { close, open } = useFitlandiaModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [activeForm, setActiveForm] = useState<FitlandiaFormId | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  function closeModal(captured = false) {
    setActiveForm(null);
    close(captured);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal(false);
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleOption(option: (typeof fitlandiaCampaign.options)[number]) {
    if ("formId" in option && option.formId) {
      setActiveForm(option.formId);
      return;
    }

    closeModal(false);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[200] grid items-start justify-items-center overflow-y-auto bg-black/84 px-2 py-2 backdrop-blur-sm sm:px-4 sm:py-4 md:items-center"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal(false);
          }}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-labelledby="fitlandia-modal-title"
            aria-modal="true"
            className="relative w-full max-w-[1220px] overflow-hidden rounded-[16px] border border-limebrand/35 bg-[#050606] text-white shadow-[0_30px_120px_rgba(0,0,0,0.68)] outline-none sm:rounded-[18px] md:h-[min(720px,calc(100dvh-1rem))]"
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            onKeyDown={handleKeyDown}
            ref={dialogRef}
            role="dialog"
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              aria-label={fitlandiaCampaign.closeLabel}
              className="absolute right-3 top-3 z-30 grid h-10 w-10 place-items-center rounded-full bg-black/24 text-white/90 backdrop-blur-sm transition hover:bg-white/10 hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
              onClick={() => closeModal(false)}
              ref={closeButtonRef}
              type="button"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            <div className="grid max-h-[calc(100dvh-1rem)] overflow-y-auto md:h-full md:max-h-none md:grid-cols-[40%_60%] md:overflow-hidden">
              <section className={cn(
                "order-2 border-white/14 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.055),transparent_24rem),linear-gradient(140deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-5 py-6 sm:px-8 sm:py-8 md:order-1 md:h-full md:border-r md:px-7 md:py-5 lg:px-8 lg:py-6",
                activeForm ? "md:overflow-y-auto" : "md:overflow-hidden",
              )}>
                {activeForm ? (
                  <CampaignForm formId={activeForm} onBack={() => setActiveForm(null)} onSubmitted={() => closeModal(true)} />
                ) : (
                  <WelcomePanel onOption={handleOption} />
                )}
              </section>

              <section className="order-1 bg-black md:order-2 md:h-full">
                <RightPanel />
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function WelcomePanel({ onOption }: { onOption: (option: (typeof fitlandiaCampaign.options)[number]) => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <LogoMark />

      <div className="mt-7 inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-limebrand sm:mt-8 sm:text-xs md:mt-5">
        <Megaphone className="h-4 w-4 sm:h-5 sm:w-5" />
        {fitlandiaCampaign.badge}
      </div>

      <h1 id="fitlandia-modal-title" className="mt-4 text-[38px] font-black leading-[0.98] text-white sm:mt-5 sm:text-[48px] md:mt-3 md:text-[42px] lg:text-[46px]">
        {fitlandiaCampaign.titlePrefix}
        <span className="block text-limebrand">{fitlandiaCampaign.titleBrand}</span>
      </h1>

      <p className="mt-4 max-w-[430px] text-sm leading-6 text-white/82 sm:text-base md:mt-3 md:max-w-[330px] md:text-[13px] md:leading-5 lg:text-sm">
        {fitlandiaCampaign.intro}
      </p>

      <h2 className="mt-6 text-lg font-black text-white sm:text-xl md:mt-4 md:text-lg">
        {fitlandiaCampaign.question}
      </h2>

      <div className="mt-3 grid gap-2 md:gap-2">
        {fitlandiaCampaign.options.map((option) => {
          const Icon = optionIcons[option.id];

          return (
            <button
              className="group grid min-h-[78px] grid-cols-[48px_1fr_auto] items-center gap-3 rounded-[12px] border border-white/18 bg-white/[0.025] px-4 py-3 text-left transition hover:border-limebrand/70 hover:bg-limebrand/[0.055] focus:border-limebrand focus:outline-none sm:min-h-[84px] sm:grid-cols-[54px_1fr_auto] md:min-h-[66px] md:grid-cols-[44px_1fr_auto] md:gap-3 md:px-3 md:py-2 lg:min-h-[68px]"
              key={option.id}
              onClick={() => onOption(option)}
              type="button"
            >
              <Icon className="h-9 w-9 text-limebrand sm:h-10 sm:w-10 md:h-8 md:w-8" />
              <span className="min-w-0">
                <span className="block text-sm font-black leading-tight text-white sm:text-base md:text-sm">{option.title}</span>
                <span className="mt-1 block text-xs leading-5 text-white/78 sm:text-sm md:text-[11px] md:leading-4 lg:text-xs">{option.description}</span>
              </span>
              <ChevronRight className="h-6 w-6 text-limebrand transition group-hover:translate-x-1" />
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-start gap-3 text-white/78 md:mt-auto md:pt-3">
        <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />
        <p className="text-xs leading-5">
          {fitlandiaCampaign.secureTitle}
          <span className="block">{fitlandiaCampaign.secureText}</span>
        </p>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden px-5 pb-6 pt-[220px] sm:px-8 sm:pb-8 sm:pt-[300px] md:h-full md:px-9 md:pb-5 md:pt-[230px] lg:px-12 lg:pt-[236px] xl:px-14 xl:pt-[242px]">
      <div className="absolute inset-x-0 top-0 h-[250px] overflow-hidden sm:h-[340px] md:h-[270px] lg:h-[280px] xl:h-[292px]">
        <Image
          alt={fitlandiaCampaign.heroAlt}
          className="select-none object-cover object-center opacity-95"
          fill
          priority
          src={fitlandiaCampaign.heroImage}
          sizes="(min-width: 768px) 60vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative z-10">
        <h2 className="max-w-[560px] text-[27px] font-black leading-[1.08] text-white sm:text-[34px] md:text-[28px] lg:text-[31px] xl:text-[33px]">
          {fitlandiaCampaign.rightTitle.before}{" "}
          <span className="text-limebrand">{fitlandiaCampaign.rightTitle.highlight}</span>
        </h2>

        <div className="mt-5 flex items-start gap-3 md:mt-4">
          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-limebrand text-limebrand">
            <Star className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xl font-black uppercase leading-tight text-white sm:text-2xl md:text-lg lg:text-xl">
              {fitlandiaCampaign.offerTitle}
            </p>
            <p className="mt-1 text-sm leading-5 text-white/88 sm:text-base md:text-xs lg:text-sm">{fitlandiaCampaign.offerText}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 text-center sm:grid-cols-4 md:gap-3 lg:gap-4">
          {fitlandiaCampaign.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Star;

            return (
              <div className={cn("px-2", index > 0 && "sm:border-l sm:border-white/22")} key={benefit}>
                <Icon className="mx-auto h-11 w-11 text-limebrand sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11" strokeWidth={2.2} />
                <p className="mt-2 text-[12px] font-black uppercase leading-4 tracking-[0.02em] text-white sm:text-[13px] md:text-[10px] lg:text-[11px] xl:text-xs">
                  {benefit}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 rounded-[14px] border border-white/22 bg-white/[0.035] p-4 sm:grid-cols-2 md:p-3 lg:p-4">
          <EventInfo icon={<CalendarDays className="h-10 w-10 text-limebrand md:h-8 md:w-8 lg:h-10 lg:w-10" />} title={fitlandiaCampaign.event.date} text={fitlandiaCampaign.event.time} />
          <EventInfo icon={<MapPin className="h-10 w-10 text-limebrand md:h-8 md:w-8 lg:h-10 lg:w-10" />} title={fitlandiaCampaign.event.place} text={fitlandiaCampaign.event.edition} bordered />
        </div>

        <div className="mt-4 flex min-h-[70px] items-center justify-center gap-4 rounded-[14px] bg-limebrand px-4 py-3 text-center text-black shadow-[0_0_44px_rgba(182,255,0,0.2)] sm:text-left md:min-h-[58px] md:py-2.5">
          <Gift className="hidden h-11 w-11 shrink-0 sm:block md:h-9 md:w-9 lg:h-10 lg:w-10" strokeWidth={2.2} />
          <p className="text-base font-black uppercase leading-tight sm:text-lg md:text-sm lg:text-base xl:text-lg">
            {fitlandiaCampaign.cta}
          </p>
        </div>
      </div>
    </div>
  );
}

function EventInfo({ bordered = false, icon, text, title }: { bordered?: boolean; icon: ReactNode; text: string; title: string }) {
  return (
    <div className={cn("flex items-center gap-3", bordered && "sm:border-l sm:border-white/22 sm:pl-4 lg:pl-5")}>
      {icon}
      <div>
        <p className="text-base font-black uppercase leading-tight text-white sm:text-lg md:text-sm lg:text-base xl:text-lg">{title}</p>
        <p className="mt-1 text-sm font-black uppercase leading-tight text-limebrand sm:text-base md:text-xs lg:text-sm">{text}</p>
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <Image alt={fitlandiaCampaign.logoAlt} height={34} src="/assets/logo.png" width={54} className="h-7 w-auto sm:h-8" priority />
      <span className="text-[28px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[34px]">{fitlandiaCampaign.logoWordmark}</span>
    </div>
  );
}

function CampaignForm({
  formId,
  onBack,
  onSubmitted,
}: {
  formId: FitlandiaFormId;
  onBack: () => void;
  onSubmitted: () => void;
}) {
  const form = fitlandiaCampaign.forms[formId];
  const [values, setValues] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const missingRequired = form.fields.some((field) => {
      const value = values[field.name]?.trim();
      if (!field.required) return false;
      if (field.name === "whatsapp") return !hasPhoneNumber(value);
      return !value;
    });
    if (missingRequired) {
      setError("Preencha os campos obrigatórios.");
      return;
    }

    if (values.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads/fitlandia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildFitlandiaPayload(form.profile, values)),
      });

      if (!response.ok) {
        throw new Error("Failed to submit Fitlandia lead.");
      }

      setSubmitted(true);
    } catch {
      setError(fitlandiaCampaign.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-full flex-col">
        <LogoMark />
        <div className="mt-8 rounded-[14px] border border-limebrand/40 bg-limebrand/10 p-5 sm:mt-10 sm:p-6 md:mt-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-limebrand">{form.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">{form.success}</h2>
          <button className="mt-6 h-12 w-full rounded-md bg-limebrand px-5 font-black text-black transition hover:bg-limebrand2" onClick={onSubmitted} type="button">
            {fitlandiaCampaign.continueLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="flex min-h-full flex-col pb-1" onSubmit={submit}>
      <LogoMark />
      <button className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-black text-limebrand hover:text-limebrand2 sm:mt-6 md:mt-5" onClick={onBack} type="button">
        <ChevronLeft className="h-4 w-4" />
        {fitlandiaCampaign.backLabel}
      </button>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-limebrand sm:mt-6">{form.eyebrow}</p>
      <h1 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl md:text-2xl lg:text-3xl">{form.title}</h1>
      <p className="mt-3 text-sm leading-6 text-white/72 md:text-xs md:leading-5 lg:text-sm lg:leading-6">{form.description}</p>

      <div className="mt-5 grid gap-3 md:gap-2.5 lg:gap-3">
        {form.fields.map((field) => (
          field.name === "whatsapp" ? (
            <PhoneInput
              compact
              key={field.name}
              label={field.label}
              name={field.name}
              placeholder="923 456 789"
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(phone) => {
                setValues((current) => ({
                  ...current,
                  [field.name]: phone,
                }));
              }}
            />
          ) : (
            <label className="block" key={field.name}>
              <span className="mb-1.5 block text-sm font-bold text-white/82 md:text-xs lg:text-sm">{field.label}</span>
              <input
                className="h-12 w-full rounded-md border border-white/16 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-limebrand/75 md:h-10 lg:h-11"
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                type={field.name === "email" ? "email" : "text"}
                value={values[field.name] ?? ""}
                onChange={(event) => {
                  setValues((current) => ({
                    ...current,
                    [field.name]: event.target.value,
                  }));
                }}
              />
            </label>
          )
        ))}
      </div>

      <div className="sticky bottom-0 mt-5 border-t border-white/10 bg-[#090b09]/95 pb-1 pt-4 backdrop-blur-md md:-mx-7 md:px-7 lg:-mx-8 lg:px-8">
        {error ? <p className="mb-3 rounded-md border border-red-400/35 bg-red-500/10 p-2.5 text-xs text-red-100">{error}</p> : null}

        <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-limebrand px-5 font-black uppercase text-black transition hover:bg-limebrand2 disabled:cursor-not-allowed disabled:opacity-60 md:min-h-11" disabled={submitting} type="submit">
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {submitting ? "A enviar..." : form.submit}
        </button>
      </div>
    </form>
  );
}

function buildFitlandiaPayload(profile: string, values: Record<string, string>) {
  const payload = {
    profile,
    fullName: values.fullName?.trim(),
    whatsapp: values.whatsapp?.trim(),
    email: optionalValue(values.email),
    city: optionalValue(values.city),
    business: optionalValue(values.business),
    objective: optionalValue(values.objective),
    source: "fitlandia-modal",
    campaign: "fitlandia-2026",
    extra: buildExtra(values),
  };

  return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
}

function optionalValue(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function buildExtra(values: Record<string, string>) {
  const standardFields = new Set(["fullName", "whatsapp", "email", "city", "business", "objective"]);
  const entries = Object.entries(values)
    .filter(([key, value]) => !standardFields.has(key) && value.trim())
    .map(([key, value]) => [key, value.trim()]);

  return entries.length ? Object.fromEntries(entries) : undefined;
}
