"use client";

import Link from "next/link";
import { Building2, CheckCircle2, Mail, MapPin, Phone, Store, User } from "lucide-react";
import { useEffect, useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { IdentityNotice } from "@/components/auth/IdentityNotice";
import { Button } from "@/components/ui/Button";
import { hasPhoneNumber, PhoneInput } from "@/components/ui/PhoneInput";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { readUserSession } from "@/lib/auth";

export type OnboardingKind = "personal" | "academia" | "vendedor";

type Field = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  icon: typeof User;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const configs: Record<OnboardingKind, {
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  success: string;
  fields: Field[];
  select: { name: string; label: string; options: string[] };
}> = {
  personal: {
    eyebrow: "Acesso profissional",
    title: "Solicitar perfil de personal trainer",
    description: "Envie seus dados profissionais. A solicitação será vinculada à sua conta e analisada antes de liberar ferramentas de personal.",
    submitLabel: "Enviar para validação",
    success: "Solicitação de personal registrada. O acesso profissional continuará pendente até a validação da equipa Noogym.",
    fields: [
      { name: "name", label: "Nome completo", placeholder: "Seu nome completo", icon: User },
      { name: "email", label: "E-mail da conta Noogym", placeholder: "seu@email.com", type: "email", icon: Mail },
      { name: "phone", label: "Telefone", placeholder: "923 456 789", type: "tel", icon: Phone },
      { name: "credential", label: "Certificação ou registro profissional", placeholder: "Informe sua principal certificação", icon: Building2 },
      { name: "city", label: "Cidade", placeholder: "Ex.: Luanda", icon: MapPin },
    ],
    select: { name: "experience", label: "Experiência profissional", options: ["Menos de 1 ano", "1 a 3 anos", "4 a 7 anos", "Mais de 7 anos"] },
  },
  academia: {
    eyebrow: "Noogym ERP",
    title: "Cadastrar interesse do ginásio",
    description: "Este é um contacto comercial. O acesso de gestão será vinculado à conta do responsável após validação e configuração no ERP.",
    submitLabel: "Solicitar contato comercial",
    success: "Interesse comercial registrado. A equipa Noogym entrará em contato antes de criar qualquer acesso de gestão.",
    fields: [
      { name: "name", label: "Responsável pelo ginásio", placeholder: "Nome completo", icon: User },
      { name: "business", label: "Nome do ginásio", placeholder: "Nome comercial", icon: Building2 },
      { name: "email", label: "E-mail comercial", placeholder: "contato@ginasio.com", type: "email", icon: Mail },
      { name: "phone", label: "Telefone ou WhatsApp", placeholder: "923 456 789", type: "tel", icon: Phone },
      { name: "city", label: "Cidade", placeholder: "Ex.: Luanda", icon: MapPin },
    ],
    select: { name: "size", label: "Número aproximado de alunos", options: ["Até 100", "101 a 300", "301 a 500", "501 a 1.000", "Mais de 1.000"] },
  },
  vendedor: {
    eyebrow: "Noogym Market",
    title: "Solicitar cadastro de vendedor",
    description: "Cadastre o interesse da sua loja. O acesso de vendedor será vinculado à conta do responsável após análise comercial e documental.",
    submitLabel: "Enviar para aprovação",
    success: "Solicitação de vendedor registrada. Nenhuma loja ou produto será publicado antes da aprovação do Noogym Market.",
    fields: [
      { name: "name", label: "Responsável pela loja", placeholder: "Nome completo", icon: User },
      { name: "business", label: "Nome da loja ou empresa", placeholder: "Nome comercial", icon: Store },
      { name: "email", label: "E-mail comercial", placeholder: "contato@loja.com", type: "email", icon: Mail },
      { name: "phone", label: "Telefone ou WhatsApp", placeholder: "923 456 789", type: "tel", icon: Phone },
      { name: "city", label: "Cidade", placeholder: "Ex.: Luanda", icon: MapPin },
    ],
    select: { name: "category", label: "Categoria principal", options: ["Suplementos", "Alimentação", "Vestuário", "Acessórios", "Equipamentos", "Outra"] },
  },
};

export function OnboardingRequestForm({ kind, authenticated = false, onSubmitted }: { kind: OnboardingKind; authenticated?: boolean; onSubmitted?: (kind: OnboardingKind) => void }) {
  const config = configs[kind];
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(config.success);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!authenticated) return;
    const session = readUserSession();
    if (!session) return;

    setValues((current) => ({
      ...current,
      name: current.name ?? session.name ?? "",
      email: current.email ?? session.email ?? "",
      phone: current.phone ?? session.phone ?? "",
    }));
  }, [authenticated]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    config.fields.forEach((field) => {
      const value = values[field.name]?.trim();
      if (!value || (field.type === "tel" && !hasPhoneNumber(value))) nextErrors[field.name] = "Preencha este campo.";
      if (field.type === "email" && value && !emailPattern.test(value)) nextErrors[field.name] = "Informe um e-mail válido.";
    });
    if (!values[config.select.name]) nextErrors[config.select.name] = "Selecione uma opção.";
    if (!accepted) nextErrors.accepted = "Confirme que as informações são verdadeiras.";

    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/onboarding-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind,
          name: values.name,
          email: values.email,
          phone: values.phone,
          business: values.business || undefined,
          city: values.city || undefined,
          credential: values.credential || undefined,
          selectedOption: values[config.select.name] || undefined,
        }),
      });
      const payload = await readApiPayload<{ message?: string }>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "Nao foi possivel registrar a solicitacao agora."));
      }

      setSuccessMessage("message" in payload && typeof payload.message === "string" ? payload.message : config.success);
      onSubmitted?.(kind);
      setSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Nao foi possivel registrar a solicitacao agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-limebrand">{config.eyebrow}</p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">{config.title}</h1>
        <p className="mt-3 text-sm leading-6 text-white/58">{config.description}</p>
      </div>

      <IdentityNotice compact />

      {success ? (
        <div className="rounded-md border border-limebrand/30 bg-limebrand/8 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
            <div>
              <p className="font-bold text-white">Solicitação recebida</p>
              <p className="mt-1 text-sm leading-6 text-white/66">{successMessage}</p>
            </div>
          </div>
          <Button href={authenticated ? "/dashboard/perfil?tab=perfis-e-vinculos" : "/login"} className="mt-4 w-full">
            {authenticated ? "Voltar aos serviços" : "Acessar minha conta"}
          </Button>
        </div>
      ) : (
        <>
          {submitError ? (
            <div className="rounded-md border border-red-400/35 bg-red-950/25 p-3 text-sm text-red-100">
              {submitError}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            {config.fields.map((field, index) => (
              <div key={field.name} className={index === config.fields.length - 1 ? "sm:col-span-2" : undefined}>
                {field.type === "tel" ? (
                  <PhoneInput
                    label={field.label}
                    placeholder="923 456 789"
                    value={values[field.name] ?? ""}
                    error={errors[field.name]}
                    onChange={(phone) => setValues((current) => ({ ...current, [field.name]: phone }))}
                  />
                ) : (
                  <AuthInput
                    label={field.label}
                    icon={field.icon}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.name] ?? ""}
                    error={errors[field.name]}
                    onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  />
                )}
              </div>
            ))}
          </div>

          <label className="block">
            <span className="text-xs font-medium text-white/86">{config.select.label}</span>
            <select
              value={values[config.select.name] ?? ""}
              onChange={(event) => setValues((current) => ({ ...current, [config.select.name]: event.target.value }))}
              className="mt-2 h-12 w-full rounded-md border border-white/15 bg-[#070d10] px-4 text-sm text-white outline-none focus:border-limebrand/75"
            >
              <option value="">Selecione</option>
              {config.select.options.map((option) => <option key={option}>{option}</option>)}
            </select>
            {errors[config.select.name] ? <span className="mt-1.5 block text-xs text-red-300">{errors[config.select.name]}</span> : null}
          </label>

          <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
            <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} className="mt-0.5 h-4 w-4 accent-limebrand" />
            <span>Confirmo que as informações são verdadeiras e aceito que o acesso solicitado depende de análise da Noogym.</span>
          </label>
          {errors.accepted ? <p className="text-xs text-red-300">{errors.accepted}</p> : null}

          <Button type="submit" className="h-14 w-full" disabled={submitting}>
            {submitting ? "A enviar..." : config.submitLabel}
          </Button>
        </>
      )}

      {!authenticated ? (
        <p className="text-center text-sm text-white/55">
          Ainda não tem uma conta? <Link href="/criar-conta" className="font-semibold text-limebrand">Criar conta</Link>
        </p>
      ) : null}
    </form>
  );
}
