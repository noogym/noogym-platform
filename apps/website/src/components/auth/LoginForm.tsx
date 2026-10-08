"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthInput } from "@/components/auth/AuthInput";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { IdentityNotice } from "@/components/auth/IdentityNotice";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { useSession } from "@/components/auth/SessionContext";
import { demoMode, saveUserFromSession, saveUserSession, type AuthSessionResponse } from "@/lib/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const router = useRouter();
  const { refresh } = useSession();
  const [values, setValues] = useState({ email: "", password: "", remember: true });
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

    if (!values.email.trim()) nextErrors.email = "Informe o seu e-mail.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Use um e-mail válido.";
    if (!values.password) nextErrors.password = "Informe a sua senha.";
    else if (values.password.length < 6) nextErrors.password = "A senha precisa ter pelo menos 6 caracteres.";

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
          email: values.email,
          password: values.password,
          turnstileToken: turnstileToken || undefined,
        }),
      });
      const payload = await readApiPayload<AuthSessionResponse>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "E-mail ou senha invalidos."));
      }

      if ("token" in payload) {
        saveUserFromSession(payload);
        void refresh();
      }

      setMessage("Login realizado com sucesso. A abrir o dashboard...");
      router.push(destinationAfterLogin());
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Nao foi possivel iniciar sessao agora.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleGoogleLogin() {
    if (!demoMode) {
      setSubmitError("Login com Google ainda nao esta configurado para producao.");
      return;
    }

    saveUserSession({
      name: "Miguel Silva",
      email: "miguel.silva@email.com",
      role: "member",
      accesses: ["SITE", "MOBILE_APP"],
      provider: "google",
      loginAt: new Date().toISOString(),
    });
    router.push(destinationAfterLogin());
  }

  return (
    <form onSubmit={submit} className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-normal text-white sm:text-3xl">Bem-vindo de volta!</h1>
        <p className="mt-2 text-sm text-white/58">Entre uma vez e continue em qualquer produto Noogym.</p>
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

      <div className="space-y-5">
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
          placeholder="**********"
          value={values.password}
          error={errors.password}
          onChange={(event) => setValues((current) => ({ ...current, password: event.target.value }))}
        />
      </div>

      <div className="flex flex-col gap-3 text-xs min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
        <label className="flex items-center gap-2 text-white/72">
          <input
            type="checkbox"
            checked={values.remember}
            onChange={(event) => setValues((current) => ({ ...current, remember: event.target.checked }))}
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-limebrand"
          />
          Lembrar de mim
        </label>
        <Link href="/esqueci-senha" className="font-semibold text-limebrand transition hover:text-white">Esqueci minha senha</Link>
      </div>

      {hasTurnstileSiteKey() ? (
        <TurnstileWidget error={turnstileError} onError={setTurnstileError} onVerify={setTurnstileToken} />
      ) : null}

      <Button type="submit" className="h-14 w-full" disabled={submitting}>
        {submitting ? "A entrar..." : "Entrar"}
      </Button>

      <AuthDivider />

      <GoogleButton
        onClick={handleGoogleLogin}
      >
        Entrar com Google
      </GoogleButton>

      <p className="text-center text-sm text-white/58">
        Ainda não tem uma conta?{" "}
        <Link href="/criar-conta" className="font-semibold text-limebrand transition hover:text-white">Criar conta</Link>
      </p>
    </form>
  );
}
