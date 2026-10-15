"use client";

import { useEffect, useState } from "react";
import { Building2, CheckCircle2, Mail, MapPin, MessageCircle, Users } from "lucide-react";
import { AuthInput } from "@/components/auth/AuthInput";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { hasPhoneNumber, PhoneInput } from "@/components/ui/PhoneInput";

const demoModalHash = "#agendar-demonstracao";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const consultantWhatsappHref =
  "https://wa.me/244923456789?text=Ol%C3%A1%20Noogym%2C%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20para%20o%20meu%20gin%C3%A1sio.";

const studentRanges = [
  { label: "Até 100 alunos", value: "UP_TO_100" },
  { label: "101 a 300 alunos", value: "FROM_101_TO_300" },
  { label: "301 a 500 alunos", value: "FROM_301_TO_500" },
  { label: "501 a 1.000 alunos", value: "FROM_501_TO_1000" },
  { label: "Mais de 1.000 alunos", value: "MORE_THAN_1000" },
];

const unitRanges = [
  { label: "1 unidade", value: "ONE" },
  { label: "2 a 3 unidades", value: "TWO_TO_THREE" },
  { label: "4 a 10 unidades", value: "FOUR_TO_TEN" },
  { label: "Mais de 10 unidades", value: "MORE_THAN_TEN" },
];

const challengeOptions = [
  { label: "Pagamentos em atraso e faltas", value: "LATE_PAYMENTS" },
  { label: "Controle de acesso dos alunos", value: "ACCESS_CONTROL" },
  { label: "Falta de relatórios de gestão", value: "LACK_OF_REPORTS" },
  { label: "Gestão de alunos e planos", value: "STUDENT_MANAGEMENT" },
  { label: "Retenção de alunos", value: "STUDENT_RETENTION" },
  { label: "Outro desafio", value: "OTHER" },
];

type DemoRequestPayload = {
  success: boolean;
  duplicated?: boolean;
  message?: string;
};

type ApiErrorResponse = {
  message?: string | string[];
};

export function DemoRequestModal() {
  const turnstileEnabled = hasTurnstileSiteKey();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    fullName: "",
    gymName: "",
    whatsapp: "",
    email: "",
    city: "",
    currentStudentsRange: "",
    unitsRange: "",
    mainChallenge: "",
    message: "",
  });

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>(`a[href="${demoModalHash}"]`) : null;
      if (!target) return;

      event.preventDefault();
      setOpen(true);
    }

    function handleHashChange() {
      if (window.location.hash === demoModalHash) {
        setOpen(true);
      }
    }

    document.addEventListener("click", handleClick);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function closeModal() {
    setOpen(false);
    if (window.location.hash === demoModalHash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (values.fullName.trim().length < 3) nextErrors.fullName = "Informe o nome do responsável.";
    if (values.gymName.trim().length < 2) nextErrors.gymName = "Informe o nome do ginásio.";
    if (!hasPhoneNumber(values.whatsapp)) nextErrors.whatsapp = "Informe um WhatsApp válido.";
    if (values.email && !emailPattern.test(values.email)) nextErrors.email = "Use um e-mail válido.";
    if (values.city.trim().length < 2) nextErrors.city = "Informe a cidade.";
    if (!values.currentStudentsRange) nextErrors.currentStudentsRange = "Selecione uma opção.";
    if (!values.mainChallenge) nextErrors.mainChallenge = "Selecione o principal desafio.";

    setErrors(nextErrors);
    setSubmitError("");
    setSuccessMessage("");
    setTurnstileError("");

    if (Object.keys(nextErrors).length) return;

    if (turnstileEnabled && !turnstileToken) {
      setTurnstileError("Confirme a verificação de segurança para continuar.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          email: values.email || undefined,
          unitsRange: values.unitsRange || undefined,
          message: values.message || undefined,
          source: "para-ginasios-modal",
          campaign: "software-gestao-ginasios",
          turnstileToken: turnstileToken || undefined,
        }),
      });

      const payload = (await response.json()) as DemoRequestPayload | ApiErrorResponse;

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload));
      }

      const result = payload as DemoRequestPayload;
      setSuccessMessage(result.message ?? "Pedido enviado com sucesso. A equipa Noogym entrará em contacto em breve.");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Não foi possível enviar o pedido agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal open={open} title="Agendar demonstração" onClose={closeModal}>
      {successMessage ? (
        <div className="space-y-4">
          <div className="rounded-md border border-limebrand/30 bg-limebrand/8 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
              <div>
                <p className="font-bold text-white">Pedido recebido</p>
                <p className="mt-1 text-sm leading-6 text-white/68">{successMessage}</p>
              </div>
            </div>
          </div>
          <Button className="w-full" onClick={closeModal}>Fechar</Button>
          <Button href={consultantWhatsappHref} variant="secondary" className="w-full">
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </Button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <p className="text-sm leading-6 text-white/62">
            Preencha os dados do ginásio. A equipa Noogym entra em contacto para entender a operação e marcar a melhor demonstração.
          </p>

          {submitError ? (
            <div className="rounded-md border border-red-400/35 bg-red-950/25 p-3 text-sm text-red-100">
              {submitError}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <AuthInput
              label="Nome completo"
              icon={Users}
              placeholder="Ex.: João Silva"
              value={values.fullName}
              error={errors.fullName}
              onChange={(event) => setValues((current) => ({ ...current, fullName: event.target.value }))}
            />
            <AuthInput
              label="Nome do ginásio"
              icon={Building2}
              placeholder="Ex.: Energy Fitness"
              value={values.gymName}
              error={errors.gymName}
              onChange={(event) => setValues((current) => ({ ...current, gymName: event.target.value }))}
            />
          </div>

          <PhoneInput
            label="WhatsApp"
            placeholder="923 456 789"
            value={values.whatsapp}
            error={errors.whatsapp}
            onChange={(phone) => setValues((current) => ({ ...current, whatsapp: phone }))}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <AuthInput
              label="E-mail"
              icon={Mail}
              type="email"
              placeholder="contato@ginasio.com"
              value={values.email}
              error={errors.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            />
            <AuthInput
              label="Cidade"
              icon={MapPin}
              placeholder="Ex.: Luanda"
              value={values.city}
              error={errors.city}
              onChange={(event) => setValues((current) => ({ ...current, city: event.target.value }))}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField
              error={errors.currentStudentsRange}
              label="Quantos alunos possui atualmente?"
              options={studentRanges}
              value={values.currentStudentsRange}
              onChange={(value) => setValues((current) => ({ ...current, currentStudentsRange: value }))}
            />
            <SelectField
              label="Quantas unidades possui?"
              options={unitRanges}
              value={values.unitsRange}
              onChange={(value) => setValues((current) => ({ ...current, unitsRange: value }))}
            />
          </div>

          <SelectField
            error={errors.mainChallenge}
            label="Qual o principal desafio do seu ginásio?"
            options={challengeOptions}
            value={values.mainChallenge}
            onChange={(value) => setValues((current) => ({ ...current, mainChallenge: value }))}
          />

          <label className="block">
            <span className="text-xs font-medium text-white/86">Há algo mais que gostaria de contar?</span>
            <textarea
              className="mt-2 min-h-24 w-full resize-none rounded-md border border-white/15 bg-[#070d10]/78 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-limebrand/75 focus:ring-2 focus:ring-limebrand/10"
              maxLength={500}
              placeholder="Conte-nos mais sobre o seu ginásio e os seus objetivos..."
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            />
            <span className="mt-1 block text-right text-xs text-white/38">{values.message.length}/500</span>
          </label>

          {turnstileEnabled ? (
            <TurnstileWidget error={turnstileError} onError={setTurnstileError} onVerify={setTurnstileToken} />
          ) : null}

          <Button type="submit" className="h-12 w-full" disabled={submitting}>
            {submitting ? "A enviar..." : "Agendar demonstração"}
          </Button>
          <Button href={consultantWhatsappHref} variant="secondary" className="w-full">
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </Button>
        </form>
      )}
    </Modal>
  );
}

function SelectField({
  error,
  label,
  onChange,
  options,
  value,
}: {
  error?: string;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-white/86">{label}</span>
      <select
        className="mt-2 h-12 w-full rounded-md border border-white/15 bg-[#070d10] px-4 text-sm text-white outline-none transition focus:border-limebrand/75 focus:ring-2 focus:ring-limebrand/10"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

function getApiErrorMessage(payload: DemoRequestPayload | ApiErrorResponse) {
  if ("message" in payload) {
    if (Array.isArray(payload.message)) {
      return payload.message[0] ?? "Não foi possível enviar o pedido agora.";
    }

    if (payload.message) {
      return payload.message;
    }
  }

  return "Não foi possível enviar o pedido agora.";
}
