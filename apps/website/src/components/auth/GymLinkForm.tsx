"use client";

import Link from "next/link";
import { CheckCircle2, Hash, Link2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";
import { hasPhoneNumber, PhoneInput } from "@/components/ui/PhoneInput";
import { getApiErrorMessage, readApiPayload } from "@/lib/api";
import { readUserSession } from "@/lib/auth";
import { cn } from "@/lib/utils";

const methods = [
  { id: "phone", label: "Telefone", Icon: Phone, inputLabel: "Telefone cadastrado no ginásio", placeholder: "+244 9XX XXX XXX", type: "tel" },
  { id: "email", label: "E-mail", Icon: Mail, inputLabel: "E-mail cadastrado no ginásio", placeholder: "seu@email.com", type: "email" },
  { id: "code", label: "Código", Icon: Hash, inputLabel: "Código de aluno, equipa ou convite", placeholder: "Ex.: NG-482915", type: "text" },
] as const;

export function GymLinkForm({ authenticated = false, onSubmitted }: { authenticated?: boolean; onSubmitted?: () => void }) {
  const [method, setMethod] = useState<(typeof methods)[number]>(methods[0]);
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("O vínculo ficará pendente até os dados serem confirmados pelo Noogym ERP ou pelo ginásio.");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!identifier.trim() || (method.id === "phone" && !hasPhoneNumber(identifier))) {
      setError("Informe o dado usado no cadastro do ginásio.");
      return;
    }
    setError("");
    setSubmitError("");
    setSubmitting(true);

    try {
      const session = readUserSession();
      const response = await fetch("/api/auth/gym-link-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: method.id,
          identifier,
          email: session?.email ?? (method.id === "email" ? identifier : undefined),
          name: session?.name,
        }),
      });
      const payload = await readApiPayload<{ message?: string }>(response);

      if (!response.ok) {
        throw new Error(getApiErrorMessage(payload, "Nao foi possivel registrar o vinculo agora."));
      }

      setSuccessMessage("message" in payload && typeof payload.message === "string" ? payload.message : successMessage);
      onSubmitted?.();
      setSuccess(true);
    } catch (submitError) {
      setSubmitError(submitError instanceof Error ? submitError.message : "Nao foi possivel registrar o vinculo agora.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-limebrand">Vínculo de ginásio</p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">Vincular ginásio ou ERP</h1>
        <p className="mt-3 text-sm leading-6 text-white/58">Use os dados informados ao ginásio ou o código enviado por convite. Isso adiciona um vínculo de aluno, colaborador ou gestor autorizado à sua conta, sem criar outra identidade.</p>
      </div>

      {success ? (
        <div className="rounded-md border border-limebrand/30 bg-limebrand/8 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
            <div>
              <p className="font-bold">Solicitação de vínculo registrada</p>
              <p className="mt-1 text-sm leading-6 text-white/66">{successMessage}</p>
            </div>
          </div>
          <Button href="/dashboard/academias" className="mt-4 w-full">Ir para minhas academias</Button>
        </div>
      ) : (
        <>
          {submitError ? (
            <div className="rounded-md border border-red-400/35 bg-red-950/25 p-3 text-sm text-red-100">
              {submitError}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-2 min-[340px]:grid-cols-3">
            {methods.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => { setMethod(item); setIdentifier(""); setError(""); }}
                className={cn(
                  "flex min-w-0 items-center justify-center gap-2 rounded-md border p-3 text-center text-xs font-semibold transition min-[340px]:block",
                  method.id === item.id ? "border-limebrand bg-limebrand/10 text-limebrand" : "border-white/12 bg-white/[0.025] text-white/62 hover:border-white/25",
                )}
              >
                <item.Icon className="h-4 w-4 shrink-0 min-[340px]:mx-auto min-[340px]:mb-2" />
                {item.label}
              </button>
            ))}
          </div>

          {method.id === "phone" ? (
            <PhoneInput
              key={method.id}
              label={method.inputLabel}
              placeholder="923 456 789"
              value={identifier}
              error={error}
              onChange={setIdentifier}
            />
          ) : (
            <AuthInput
              key={method.id}
              label={method.inputLabel}
              icon={method.Icon}
              type={method.type}
              placeholder={method.placeholder}
              value={identifier}
              error={error}
              onChange={(event) => setIdentifier(event.target.value)}
            />
          )}

          <div className="rounded-md border border-white/12 bg-white/[0.025] p-4 text-xs leading-5 text-white/58">
            <p className="flex gap-2"><Link2 className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />Se não houver correspondência automática, o ginásio receberá uma solicitação para confirmar o vínculo e o nível de acesso.</p>
          </div>

          <Button type="submit" className="h-14 w-full" disabled={submitting}>
            {submitting ? "A enviar..." : "Solicitar vínculo"}
          </Button>
        </>
      )}

      {!authenticated ? (
        <p className="text-center text-sm text-white/55">
          Este fluxo usa a sua conta existente. <Link href="/login" className="font-semibold text-limebrand">Fazer login</Link>
        </p>
      ) : null}
    </form>
  );
}
