"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { hasTurnstileSiteKey, TurnstileWidget } from "@/components/security/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { getApiErrorMessage as getSharedApiErrorMessage, readApiPayload as readSharedApiPayload } from "@/lib/api";
import { useSession } from "@/components/auth/SessionContext";
import { saveUserFromSession, type AuthSessionResponse } from "@/lib/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).+$/;

export function SignupForm() {
  const router = useRouter();
  const { refresh } = useSession();
  const turnstileEnabled = hasTurnstileSiteKey();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
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

    if (values.name.trim().length < 3) nextErrors.name = "Indica o teu nome completo.";
    if (!values.email.trim()) nextErrors.email = "Indica o teu e-mail.";
    else if (!emailPattern.test(values.email)) nextErrors.email = "Usa um endereço de e-mail válido.";
    if (values.password.length < 8) nextErrors.password = "Usa pelo menos 8 caracteres.";
    else if (!passwordPattern.test(values.password)) nextErrors.password = "Inclui pelo menos uma letra e um número.";
    if (!values.terms) nextErrors.terms = "Aceita os termos para continuar.";

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
          email: values.email,
          password: values.password,
          termsAccepted: values.terms,
          privacyPolicyAccepted: values.terms,
          turnstileToken: turnstileToken || undefined,
        }),
      });

      const payload = await readSharedApiPayload<AuthSessionResponse>(response);

      if (!response.ok) {
        throw new Error(getSharedApiErrorMessage(payload, "Nao foi possivel criar a conta agora."));
      }

      if ("user" in payload) {
        saveUserFromSession(payload as AuthSessionResponse);
        void refresh();
      } else {
        throw new Error("A API não devolveu os dados da conta criada.");
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
        <p className="mt-2 text-sm text-white/58">Começa com uma conta pessoal. Podes pedir acessos profissionais ou comerciais mais tarde.</p>
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
        label="Nome completo"
        icon={User}
        placeholder="O teu nome completo"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
      />

      <AuthInput
        label="E-mail"
        icon={Mail}
        type="email"
        placeholder="teu@email.com"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
      />
      <AuthInput
        label="Palavra-passe"
        icon={Lock}
        type="password"
        placeholder="Cria uma palavra-passe"
        helper="Pelo menos 8 caracteres, com uma letra e um número."
        autoComplete="new-password"
        value={values.password}
        error={errors.password}
        onChange={(event) => setValues((current) => ({ ...current, password: event.target.value }))}
      />
      <label className="flex items-start gap-3 text-xs leading-5 text-white/72">
        <input
          type="checkbox"
          checked={values.terms}
          onChange={(event) => setValues((current) => ({ ...current, terms: event.target.checked }))}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-limebrand"
        />
        <span>
          Li e aceito os{" "}
          <Link href="/termos" className="font-semibold text-limebrand">Termos de Uso</Link>{" "}
          e confirmo que li a{" "}
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
      <p className="text-center text-sm text-white/58">
        Já tens uma conta?{" "}
        <Link href="/login" className="font-semibold text-limebrand transition hover:text-white">Fazer login</Link>
      </p>
    </form>
  );
}
