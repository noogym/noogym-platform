"use client";

import Link from "next/link";
import { AlertCircle, Check, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setSubmitError("");
    setTurnstileError("");

    if (!email.trim()) {
      setError("Informe o seu e-mail.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Use um e-mail válido.");
      return;
    }

    if (hasTurnstileSiteKey() && !turnstileToken) {
      setTurnstileError("Confirme a verificação de segurança para continuar.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          turnstileToken: turnstileToken || undefined,
        }),
      });
      const payload = await readApiPayload<{ message?: string }>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "Nao foi possivel enviar o link agora."));
      }

      setMessage(
        "message" in payload && typeof payload.message === "string"
          ? payload.message
          : "Se existir uma conta com este e-mail, enviaremos um link de recuperacao.",
      );
    } catch (submitError) {
      setSubmitError(submitError instanceof Error ? submitError.message : "Nao foi possivel enviar o link agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-normal text-white sm:text-3xl">Esqueci minha senha</h1>
        <p className="mt-2 text-sm leading-6 text-white/58">Informe seu e-mail que enviaremos um link para redefinir sua senha.</p>
      </div>

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

      <AuthInput
        label="E-mail"
        icon={Mail}
        type="email"
        placeholder="seu@email.com"
        value={email}
        error={error}
        onChange={(event) => setEmail(event.target.value)}
      />

      {hasTurnstileSiteKey() ? (
        <TurnstileWidget error={turnstileError} onError={setTurnstileError} onVerify={setTurnstileToken} />
      ) : null}

      <Button type="submit" className="h-14 w-full" disabled={submitting}>
        {submitting ? "A enviar..." : "Enviar link de recuperação"}
      </Button>

      <div className="rounded-md border border-white/14 bg-white/[0.025] p-5">
        <div className="flex items-center gap-3 text-sm font-semibold text-white">
          <AlertCircle className="h-5 w-5 text-limebrand" />
          Não recebeu o e-mail?
        </div>
        <div className="mt-4 grid gap-3 text-sm text-white/62">
          {["Verifique sua caixa de spam", "Aguarde alguns minutos", "O link expira em 30 minutos"].map((item) => (
            <p key={item} className="flex items-center gap-3">
              <Check className="h-4 w-4 shrink-0 text-limebrand" />
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-4 text-center text-sm text-white/58">
        <Link href="/login" className="inline-flex font-semibold text-limebrand transition hover:text-white">Voltar para o login</Link>
        <p>
          Lembrou sua senha?{" "}
          <Link href="/login" className="font-semibold text-limebrand transition hover:text-white">Fazer login</Link>
        </p>
      </div>
    </form>
  );
}
