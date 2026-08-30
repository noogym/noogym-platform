"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type SubmitState = "idle" | "submitting" | "success" | "error";

const categories = ["Corridas", "Workshops", "Competições", "Aulas especiais", "Bodybuilding", "CrossFit", "Wellness", "Nutrição", "Outro"];
const provinces = ["Luanda", "Benguela", "Huíla", "Huambo", "Cabinda", "Cuanza Sul", "Malanje", "Namibe", "Uíge", "Outra"];

export function EventSubmissionForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/event-submissions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("submission failed");
      }

      event.currentTarget.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <main className="container-page py-10">
      <Link href="/eventos" className="inline-flex items-center gap-2 text-sm font-bold text-limebrand transition hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Voltar aos eventos
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-white/12 bg-white/[0.035] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Submissão editorial</p>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Divulgue seu evento no Noogym</h1>
          <p className="mt-4 leading-7 text-white/64">
            Eventos enviados entram em revisão antes de aparecerem na agenda. A origem e o organizador ficam sempre identificados.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/58">
            <p className="rounded-md border border-white/10 bg-black/20 p-3">Status inicial: pending_review</p>
            <p className="rounded-md border border-white/10 bg-black/20 p-3">Publicação apenas depois de aprovação humana</p>
            <p className="rounded-md border border-white/10 bg-black/20 p-3">Eventos externos não são tratados como eventos Noogym</p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome do evento"><Input name="name" required placeholder="Ex.: Luanda Fitness Run" /></Field>
            <Field label="Organizador"><Input name="organizer" required placeholder="Nome da organização" /></Field>
            <Field label="Categoria">
              <select name="category" required className="h-12 w-full rounded-md border border-white/12 bg-white/[0.04] px-4 text-sm text-white outline-none">
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </Field>
            <Field label="Data"><Input name="date" required type="date" /></Field>
            <Field label="Horário"><Input name="time" type="time" /></Field>
            <Field label="Província">
              <select name="province" required className="h-12 w-full rounded-md border border-white/12 bg-white/[0.04] px-4 text-sm text-white outline-none">
                {provinces.map((item) => <option key={item}>{item}</option>)}
              </select>
            </Field>
            <Field label="Cidade"><Input name="city" required placeholder="Ex.: Luanda" /></Field>
            <Field label="Local"><Input name="venue" placeholder="Ex.: Marginal de Luanda" /></Field>
            <Field label="Preço"><Input name="price" placeholder="Ex.: Gratuito, 5.000 Kz" /></Field>
            <Field label="Link de inscrição"><Input name="registrationUrl" type="url" placeholder="https://..." /></Field>
            <Field label="Instagram"><Input name="instagram" placeholder="@organizador" /></Field>
            <Field label="Contacto"><Input name="contact" required placeholder="+244..." /></Field>
            <Field label="Imagem"><Input name="imageUrl" type="url" placeholder="https://..." /></Field>
            <Field label="Site"><Input name="site" type="url" placeholder="https://..." /></Field>
          </div>
          <label className="mt-4 block text-sm font-semibold text-white/75">
            Descrição
            <textarea name="description" required rows={5} className="mt-2 w-full rounded-md border border-white/12 bg-white/[0.04] p-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-limebrand/70" placeholder="Resumo do evento, público esperado, regras e observações relevantes." />
          </label>
          <label className="mt-4 block text-sm font-semibold text-white/75">
            Observações
            <textarea name="notes" rows={3} className="mt-2 w-full rounded-md border border-white/12 bg-white/[0.04] p-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-limebrand/70" placeholder="Informações internas para a equipa editorial." />
          </label>
          <Button className="mt-5 w-full" disabled={state === "submitting"}>
            {state === "submitting" ? "Enviando..." : "Enviar para revisão"} <Send className="h-4 w-4" />
          </Button>
          {state === "success" ? <p className="mt-4 rounded-md border border-limebrand/25 bg-limebrand/10 p-3 text-sm text-limebrand">Evento recebido para revisão editorial.</p> : null}
          {state === "error" ? <p className="mt-4 rounded-md border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-200">Não foi possível enviar agora. Tente novamente.</p> : null}
        </form>
      </section>
    </main>
  );
}

function Field({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <label className="block text-sm font-semibold text-white/75">
      {label}
      <div className="mt-2">{children}</div>
    </label>
  );
}
