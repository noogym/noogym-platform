"use client";

import {
  CurrentStudentsRange,
  MainChallenge,
  UnitsRange,
} from "@noogym/shared";
import type { CreateDemoRequestPayload } from "@noogym/shared";
import Script from "next/script";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  challengeOptions,
  modalBenefits,
  studentOptions,
  trustLogos,
  unitOptions,
  whatsappUrl,
} from "./data";
import { Logo } from "./Logo";
import { SoftwareMockupImage } from "./SoftwareMockupImage";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  fullName: string;
  gymName: string;
  whatsapp: string;
  email: string;
  city: string;
  students: string;
  units: string;
  challenge: string;
  notes: string;
};

type TurnstileWidgetId = string;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme: "light" | "dark" | "auto";
      size: "normal" | "compact" | "flexible";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => TurnstileWidgetId;
  reset: (widgetId: TurnstileWidgetId) => void;
  remove?: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const initialFormState: FormState = {
  fullName: "",
  gymName: "",
  whatsapp: "",
  email: "",
  city: "",
  students: "",
  units: "",
  challenge: "",
  notes: "",
};

const requiredFields: Array<keyof FormState> = [
  "fullName",
  "gymName",
  "whatsapp",
  "city",
  "students",
  "challenge",
];

const fallbackApiBaseUrl = "/api";
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function getApiBaseUrl() {
  const configuredApiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

  if (!configuredApiBaseUrl) {
    return fallbackApiBaseUrl;
  }

  if (typeof window === "undefined") {
    return configuredApiBaseUrl;
  }

  const localHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
  const currentHost = window.location.hostname;
  const isCurrentHostLocal = localHosts.has(currentHost);

  try {
    const configuredUrl = new URL(configuredApiBaseUrl, window.location.origin);
    const isConfiguredHostLocal = localHosts.has(configuredUrl.hostname);

    if (isConfiguredHostLocal && !isCurrentHostLocal) {
      return fallbackApiBaseUrl;
    }
  } catch {
    return fallbackApiBaseUrl;
  }

  return configuredApiBaseUrl;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<TurnstileWidgetId | null>(null);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  useEffect(() => {
    if (open) {
      setSuccess(false);
      setSubmitError(null);
      setErrors({});
      setLoading(false);
      setTurnstileToken("");
      setTurnstileError(null);
    }
  }, [open]);

  useEffect(() => {
    if (
      !open ||
      !turnstileReady ||
      !turnstileSiteKey ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        theme: "light",
        size: "normal",
        callback: (token) => {
          setTurnstileToken(token);
          setTurnstileError(null);
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileError("A verificação expirou. Confirme novamente.");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileError(
            "Não foi possível carregar a verificação. Tente novamente.",
          );
        },
      },
    );
  }, [open, turnstileReady]);

  useEffect(() => {
    if (open) {
      return;
    }

    if (turnstileWidgetIdRef.current && window.turnstile?.remove) {
      window.turnstile.remove(turnstileWidgetIdRef.current);
    }

    turnstileWidgetIdRef.current = null;
  }, [open]);

  const notesCount = useMemo(() => form.notes.length, [form.notes]);

  if (!open) {
    return null;
  }

  const updateField = (field: keyof FormState, value: string) => {
    const cleanValue = field === "notes" ? value.slice(0, 500) : value;
    setForm((current) => ({ ...current, [field]: cleanValue }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "Campo obrigatório";
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    if (!turnstileSiteKey) {
      setTurnstileError("A verificação de segurança não está configurada.");
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Confirme a verificação de segurança para continuar.");
      return;
    }

    setLoading(true);
    setSubmitError(null);

    try {
      const apiBaseUrl = getApiBaseUrl();
      const response = await fetch(
        `${apiBaseUrl.replace(/\/$/, "")}/leads/demo-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(buildDemoRequestPayload(form, turnstileToken)),
        },
      );

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(
          errorBody?.message ??
            "Não foi possível enviar o pedido. Tente novamente em instantes.",
        );
      }

      setSuccess(true);
      setForm(initialFormState);
      setTurnstileToken("");
      if (turnstileWidgetIdRef.current) {
        window.turnstile?.reset(turnstileWidgetIdRef.current);
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o pedido. Tente novamente em instantes.",
      );
      setTurnstileToken("");
      if (turnstileWidgetIdRef.current) {
        window.turnstile?.reset(turnstileWidgetIdRef.current);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-2 backdrop-blur-md sm:p-3 md:p-6"
      role="dialog"
    >
      <Script
        async
        defer
        onReady={() => setTurnstileReady(true)}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <div className="relative max-h-[96vh] w-full max-w-6xl overflow-hidden rounded-xl border border-white/15 bg-[#050606] shadow-[0_0_120px_rgba(0,0,0,0.9)] sm:rounded-2xl">
        <button
          aria-label="Fechar modal"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-md text-zinc-400 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
          type="button"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid max-h-[96vh] overflow-y-auto lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="relative hidden overflow-hidden border-r border-white/10 p-8 lg:block xl:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_68%,rgba(182,255,0,0.14),transparent_22%)]" />
            <div className="relative">
              <Logo />
              <p className="eyebrow mt-16">Software de gestão para ginásios</p>
              <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight">
                Agende uma{" "}
                <span className="text-noogym-green">demonstração</span>{" "}
                personalizada do Noogym
              </h2>
              <p className="mt-7 max-w-sm text-lg leading-8 text-zinc-300">
                Descubra como o Noogym pode ajudar o seu ginásio a ganhar mais
                controle, reduzir faltas e aumentar os seus resultados.
              </p>

              <div className="mt-10 grid gap-5">
                {modalBenefits.map((benefit) => (
                  <div className="flex items-center gap-4" key={benefit.text}>
                    <benefit.icon className="h-8 w-8 shrink-0 text-noogym-green" />
                    <span className="max-w-[230px] text-base font-medium text-white">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-sm">
                <SoftwareMockupImage compact />
              </div>

              <div className="mt-8">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">
                  Confiado por ginásios que crescem
                </p>
                <div className="grid grid-cols-3 gap-3 text-xs font-black uppercase text-zinc-400">
                  {trustLogos.slice(0, 6).map((logo) => (
                    <span key={logo}>{logo}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="min-w-0 p-4 sm:p-8 lg:p-12">
            <div className="mb-8 pr-10">
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                Preencha os dados abaixo
              </h2>
              <p className="mt-3 max-w-lg leading-7 text-zinc-400">
                Nossa equipe entrará em contato para agendar a melhor data para
                si.
              </p>
            </div>

            {success && (
              <div className="mb-6 flex gap-3 rounded-lg border border-noogym-green/40 bg-noogym-green/10 p-4 text-sm leading-6 text-zinc-100">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-noogym-green" />
                Pedido enviado com sucesso. A equipa Noogym entrará em contacto
                consigo em breve.
              </div>
            )}

            {submitError && (
              <div className="mb-6 rounded-lg border border-red-400/40 bg-red-950/30 p-4 text-sm leading-6 text-red-100">
                {submitError}
              </div>
            )}

            <form className="grid gap-4 sm:gap-5" onSubmit={handleSubmit} noValidate>
              <Field
                error={errors.fullName}
                icon={User}
                label="Nome completo *"
                onChange={(value) => updateField("fullName", value)}
                placeholder="Ex.: João Silva"
                value={form.fullName}
              />
              <Field
                error={errors.gymName}
                icon={Building2}
                label="Nome do ginásio *"
                onChange={(value) => updateField("gymName", value)}
                placeholder="Ex.: Energy Fitness"
                value={form.gymName}
              />
              <Field
                error={errors.whatsapp}
                icon={Phone}
                label="WhatsApp *"
                onChange={(value) => updateField("whatsapp", value)}
                placeholder="+244 9XX XXX XXX"
                value={form.whatsapp}
              />
              <Field
                error={errors.email}
                icon={Mail}
                label="E-mail"
                onChange={(value) => updateField("email", value)}
                placeholder="Ex.: contacto@ginasio.com"
                type="email"
                value={form.email}
              />
              <Field
                error={errors.city}
                icon={MapPin}
                label="Cidade *"
                onChange={(value) => updateField("city", value)}
                placeholder="Ex.: Luanda"
                value={form.city}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <SelectField
                  error={errors.students}
                  label="Quantos alunos possui atualmente? *"
                  onChange={(value) => updateField("students", value)}
                  options={studentOptions}
                  value={form.students}
                />
                <SelectField
                  error={errors.units}
                  label="Quantas unidades possui?"
                  onChange={(value) => updateField("units", value)}
                  options={unitOptions}
                  value={form.units}
                />
              </div>

              <SelectField
                error={errors.challenge}
                label="Qual o principal problema que o seu ginásio enfrenta hoje? *"
                onChange={(value) => updateField("challenge", value)}
                options={challengeOptions}
                placeholder="Selecione o principal desafio"
                value={form.challenge}
              />

              <label className="grid gap-2 text-sm font-bold text-white">
                Há algo mais que gostaria de nos contar?
                <textarea
                  className="field min-h-32 resize-none"
                  maxLength={500}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder="Conte-nos mais sobre o seu ginásio e seus objetivos..."
                  value={form.notes}
                />
                <span className="-mt-8 mr-4 self-end text-xs text-zinc-500">
                  {notesCount}/500
                </span>
              </label>

              <p className="flex gap-3 text-sm leading-6 text-zinc-400">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-noogym-green" />
                Os seus dados estão seguros conosco. Não partilhamos as suas
                informações com terceiros.
              </p>

              <div className="grid gap-2">
                <div ref={turnstileContainerRef} />
                {turnstileError && (
                  <span className="text-xs text-red-300">{turnstileError}</span>
                )}
              </div>

              <button
                className="green-button min-h-14 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    A enviar...
                  </>
                ) : (
                  <>
                    Agendar demonstração
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <span className="h-px flex-1 bg-white/10" />
                ou
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <a
                className="dark-button min-h-14 w-full text-base"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

const studentRangeMap: Record<string, CurrentStudentsRange> = {
  "Até 100": CurrentStudentsRange.UP_TO_100,
  "101-300": CurrentStudentsRange.FROM_101_TO_300,
  "301-500": CurrentStudentsRange.FROM_301_TO_500,
  "501-1000": CurrentStudentsRange.FROM_501_TO_1000,
  "Mais de 1000": CurrentStudentsRange.MORE_THAN_1000,
};

const unitsRangeMap: Record<string, UnitsRange> = {
  "1 unidade": UnitsRange.ONE,
  "2-3 unidades": UnitsRange.TWO_TO_THREE,
  "4-10 unidades": UnitsRange.FOUR_TO_TEN,
  "Mais de 10": UnitsRange.MORE_THAN_TEN,
};

const challengeMap: Record<string, MainChallenge> = {
  "Pagamentos atrasados": MainChallenge.LATE_PAYMENTS,
  "Controle de acesso": MainChallenge.ACCESS_CONTROL,
  "Falta de relatórios": MainChallenge.LACK_OF_REPORTS,
  "Gestão de alunos": MainChallenge.STUDENT_MANAGEMENT,
  "Retenção de alunos": MainChallenge.STUDENT_RETENTION,
  Outro: MainChallenge.OTHER,
};

function buildDemoRequestPayload(
  form: FormState,
  turnstileToken: string,
): CreateDemoRequestPayload {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

  return {
    fullName: form.fullName,
    gymName: form.gymName,
    whatsapp: form.whatsapp,
    email: form.email || null,
    city: form.city,
    currentStudentsRange: studentRangeMap[form.students],
    unitsRange: form.units ? unitsRangeMap[form.units] : null,
    mainChallenge: challengeMap[form.challenge],
    message: form.notes || null,
    source: "landing-page",
    campaign: "software-gestao-ginasios",
    utmSource: searchParams.get("utm_source"),
    utmMedium: searchParams.get("utm_medium"),
    utmCampaign: searchParams.get("utm_campaign"),
    utmContent: searchParams.get("utm_content"),
    utmTerm: searchParams.get("utm_term"),
    turnstileToken,
  };
}

type FieldProps = {
  error?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
};

function Field({
  error,
  icon: Icon,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <span className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
        <input
          className={`field pl-12 ${error ? "field-error" : ""}`}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </span>
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}

type SelectFieldProps = {
  error?: string;
  label: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  value: string;
};

function SelectField({
  error,
  label,
  onChange,
  options,
  placeholder = "Selecione",
  value,
}: SelectFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <span className="relative">
        <select
          className={`field appearance-none pr-10 ${error ? "field-error" : ""}`}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
      </span>
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
