"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { useSession } from "@/components/auth/SessionContext";
import { saveUserFromSession, type AuthSessionResponse } from "@/lib/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const router = useRouter();
  const { refresh } = useSession();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  function destinationAfterLogin() {
    const requested = new URLSearchParams(window.location.search).get("next");
    return requested?.startsWith("/dashboard/") || requested?.startsWith("/gestao/") ? requested : "/dashboard/resumo";
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (!values.email.trim()) nextErrors.email = "Indica o teu e-mail.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Usa um endereço de e-mail válido.";
    if (!values.password) nextErrors.password = "Indica a tua palavra-passe.";

    setErrors(nextErrors);
    setMessage("");
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) return;

    setTurnstileError("");

    if (hasTurnstileSiteKey() && !turnstileToken) {
      setTurnstileError("Confirme a verificação de segurança para continuar.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/session/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email.trim(),
          password: values.password,
          turnstileToken: turnstileToken || undefined,
        }),
      });
      const payload = await readApiPayload<AuthSessionResponse>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "E-mail ou senha invalidos."));
      }

      if ("user" in payload) {
        saveUserFromSession(payload as AuthSessionResponse);
        void refresh();
      } else {
        throw new Error("A API não devolveu os dados da sessão.");
      }

      setMessage("Login realizado com sucesso. A abrir o dashboard...");
      router.push(destinationAfterLogin());
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Nao foi possivel iniciar sessao agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6 sm:space-y-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">A tua conta Noogym</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Bem-vindo de volta.</h1>
        <p className="mt-3 text-sm leading-6 text-white/58">Entra para continuares de onde ficaste.</p>
      </div>

      {message ? (
        <div className="flex items-start gap-3 rounded-md border border-limebrand/30 bg-limebrand/8 p-3 text-sm text-white">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />
          <span>{message}</span>
        </div>
      ) : null}

      {submitError ? (
        <div role="alert" className="flex items-start gap-2 rounded-md border border-red-400/35 bg-red-950/25 p-3 text-sm text-red-100">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {submitError}
        </div>
      ) : null}

      <div className="space-y-5">
        <AuthInput
          label="E-mail"
          icon={Mail}
          type="email"
          placeholder="teu@email.com"
          autoComplete="email"
          autoCapitalize="none"
          value={values.email}
          error={errors.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
        />
        <AuthInput
          label="Palavra-passe"
          icon={Lock}
          type="password"
          placeholder="A tua palavra-passe"
          autoComplete="current-password"
          value={values.password}
          error={errors.password}
          onChange={(event) => setValues((current) => ({ ...current, password: event.target.value }))}
        />
      </div>

      <div className="-mt-3 flex justify-end">
        <Link href="/esqueci-senha" className="text-sm font-semibold text-limebrand transition hover:text-white">Esqueceste a palavra-passe?</Link>
      </div>

      {hasTurnstileSiteKey() ? (
        <TurnstileWidget error={turnstileError} onError={setTurnstileError} onVerify={setTurnstileToken} />
      ) : null}

      <Button type="submit" className="h-14 w-full text-base" disabled={submitting}>
        {submitting ? "A entrar..." : "Entrar"}
      </Button>

      <div className="rounded-md border border-white/10 bg-white/[0.025] px-4 py-3 text-center text-sm text-white/58">
        Ainda não tens conta?{" "}
        <Link href="/criar-conta" className="font-semibold text-limebrand transition hover:text-white">Criar uma conta</Link>
      </div>
    </form>
  );
}
