"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthInput } from "@/components/auth/AuthInput";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { IdentityNotice } from "@/components/auth/IdentityNotice";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { hasPhoneNumber, PhoneInput } from "@/components/ui/PhoneInput";
import { getApiErrorMessage as getSharedApiErrorMessage, readApiPayload as readSharedApiPayload } from "@/lib/api";
import { useSession } from "@/components/auth/SessionContext";
import { demoMode, saveUserFromSession, type AuthSessionResponse } from "@/lib/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).+$/;

export function SignupForm() {
  const router = useRouter();
  const { refresh } = useSession();
  const turnstileEnabled = hasTurnstileSiteKey();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (values.name.trim().length < 3) nextErrors.name = "Informe o seu nome completo.";
    if (!values.email.trim()) nextErrors.email = "Informe o seu e-mail.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Use um e-mail válido.";
    if (values.phone.trim() && !hasPhoneNumber(values.phone)) nextErrors.phone = "Informe um telefone válido.";
    if (values.password.length < 8) nextErrors.password = "Use pelo menos 8 caracteres.";
    else if (!passwordPattern.test(values.password)) nextErrors.password = "Use pelo menos uma letra e um número.";
    if (values.confirmPassword !== values.password) nextErrors.confirmPassword = "As senhas não coincidem.";
    if (!values.terms) nextErrors.terms = "Aceite os termos para continuar.";

    setErrors(nextErrors);
    setMessage("");
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) return;

    setTurnstileError("");

    if (turnstileEnabled && !turnstileToken) {
      setTurnstileError("Confirme a verificação de segurança para continuar.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/session/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone || undefined,
          email: values.email,
          password: values.password,
          turnstileToken: turnstileToken || undefined,
        }),
      });

      const payload = await readSharedApiPayload<AuthSessionResponse>(response);

      if (!response.ok) {
        throw new Error(getSharedApiErrorMessage(payload, "Nao foi possivel criar a conta agora."));
      }

      if ("token" in payload) {
        saveUserFromSession(payload);
        void refresh();
      }

      setMessage("Conta criada com sucesso. A abrir o dashboard...");
      router.push("/dashboard/resumo");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Não foi possível criar a conta agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 sm:space-y-5">
      <div>
        <h1 className="text-2xl font-black tracking-normal text-white sm:text-3xl">Criar conta</h1>
        <p className="mt-2 text-sm text-white/58">A mesma identidade para site, app, ginásios parceiros, ERP e Noogym Market.</p>
      </div>

      <IdentityNotice compact />

      {message ? (
        <div className="flex items-start gap-3 rounded-md border border-limebrand/30 bg-limebrand/8 p-3 text-sm text-white">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />
          <span>{message}</span>
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-md border border-red-400/35 bg-red-950/25 p-3 text-sm text-red-100">
          {submitError}
        </div>
      ) : null}

      <div className="grid gap-4">
        <AuthInput
          label="Nome completo"
          icon={User}
          placeholder="Seu nome completo"
          value={values.name}
          error={errors.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
        />
        <PhoneInput
          label="Telefone (opcional)"
          placeholder="923 456 789"
          value={values.phone}
          error={errors.phone}
          onChange={(phone) => setValues((current) => ({ ...current, phone }))}
        />
      </div>

      <AuthInput
        label="E-mail"
        icon={Mail}
        type="email"
        placeholder="seu@email.com"
        value={values.email}
        error={errors.email}
        onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
      />
      <AuthInput
        label="Senha"
        icon={Lock}
        type="password"
        placeholder="Crie uma senha"
        helper="Mínimo de 8 caracteres com número e letra."
        value={values.password}
        error={errors.password}
        onChange={(event) => setValues((current) => ({ ...current, password: event.target.value }))}
      />
      <AuthInput
        label="Confirmar senha"
        icon={Lock}
        type="password"
        placeholder="Confirme sua senha"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        onChange={(event) => setValues((current) => ({ ...current, confirmPassword: event.target.value }))}
      />

      <label className="flex items-start gap-3 text-xs leading-5 text-white/72">
        <input
          type="checkbox"
          checked={values.terms}
          onChange={(event) => setValues((current) => ({ ...current, terms: event.target.checked }))}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-limebrand"
        />
        <span>
          Eu concordo com os{" "}
          <Link href="/termos" className="font-semibold text-limebrand">Termos de Uso</Link>{" "}
          e a{" "}
          <Link href="/privacidade" className="font-semibold text-limebrand">Política de Privacidade</Link>.
          {errors.terms ? <span className="mt-1 block text-red-300">{errors.terms}</span> : null}
        </span>
      </label>

      {turnstileEnabled ? (
        <TurnstileWidget error={turnstileError} onError={setTurnstileError} onVerify={setTurnstileToken} />
      ) : null}

      <Button type="submit" className="h-14 w-full" disabled={submitting}>
        {submitting ? "A criar conta..." : "Criar conta"}
      </Button>
      <AuthDivider />
      <GoogleButton
        onClick={() => {
          setMessage("");
          setSubmitError(demoMode ? "Cadastro com Google disponivel apenas no fluxo demo." : "Cadastro com Google ainda nao esta configurado para producao.");
        }}
      >
        Cadastrar com Google
      </GoogleButton>

      <p className="text-center text-sm text-white/58">
        Já tem uma conta?{" "}
        <Link href="/login" className="font-semibold text-limebrand transition hover:text-white">Fazer login</Link>
      </p>
    </form>
  );
}
