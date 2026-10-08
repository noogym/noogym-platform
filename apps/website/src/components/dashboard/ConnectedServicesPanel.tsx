"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, BadgeCheck, Building2, CheckCircle2, Clock3, Link2, RefreshCw, ShieldCheck, Store, X, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { GymLinkForm } from "@/components/auth/GymLinkForm";
import { OnboardingRequestForm, type OnboardingKind } from "@/components/auth/OnboardingRequestForm";
import { demoMode } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { serviceStatusLabel, useServiceConnections, type ServiceId, type ServiceStatus } from "./ServiceConnections";

type CardId = "vincular-academia" | "personal" | "vendedor";

type Service = {
  id: CardId;
  connectionId: ServiceId;
  title: string;
  description: string;
  action: string;
  eyebrow: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    id: "vincular-academia",
    connectionId: "gym",
    title: "Vincular ginásio",
    description: "Conecte sua conta ao cadastro de aluno, colaborador ou gestor autorizado no ERP.",
    action: "Solicitar vínculo",
    eyebrow: "Ginásio / ERP",
    Icon: Link2,
  },
  {
    id: "personal",
    connectionId: "personal",
    title: "Sou personal trainer",
    description: "Solicite a validação profissional para acessar ferramentas de acompanhamento.",
    action: "Solicitar validação",
    eyebrow: "Acesso profissional",
    Icon: BadgeCheck,
  },
  {
    id: "vendedor",
    connectionId: "market",
    title: "Quero vender no Market",
    description: "Apresente sua loja para análise e aprovação no marketplace Noogym.",
    action: "Cadastrar interesse",
    eyebrow: "Noogym Market",
    Icon: Store,
  },
];

const toneByStatus: Record<ServiceStatus, string> = {
  NOT_CONNECTED: "border-white/10 bg-white/[0.03] text-white/64",
  PENDING: "border-sky-400/35 bg-sky-400/[0.045] text-sky-300",
  ACTIVE: "border-limebrand/40 bg-limebrand/[0.05] text-limebrand",
  ACTION_REQUIRED: "border-amber-300/40 bg-amber-300/[0.05] text-amber-200",
  SUSPENDED: "border-red-400/35 bg-red-400/[0.045] text-red-300",
};

export function ConnectedServicesPanel() {
  const router = useRouter();
  const [selected, setSelected] = useState<CardId | null>(null);
  const { connections, updateStatus, resetDemo } = useServiceConnections();
  const activeCount = Object.values(connections).filter((connection) => connection.status === "ACTIVE").length;
  const attentionCount = Object.values(connections).filter((connection) => ["PENDING", "ACTION_REQUIRED", "SUSPENDED"].includes(connection.status)).length;

  useEffect(() => {
    function openFromHash() {
      const hash = window.location.hash.replace("#", "");
      if (services.some((service) => service.id === hash)) {
        setSelected(hash as CardId);
      }
    }

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const selectedService = services.find((service) => service.id === selected);
  const selectedConnection = selectedService ? connections[selectedService.connectionId] : null;

  function openService(service: Service) {
    const connection = connections[service.connectionId];
    if (connection.status === "ACTIVE") {
      router.push(connection.href);
      return;
    }
    setSelected(service.id);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-5">
        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-card sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-limebrand">Ecossistema Noogym</p>
              <h2 className="mt-2 text-2xl font-black">Perfis e vínculos</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">A sua conta é a identidade base. Aqui você acompanha quais perfis, permissões e vínculos estão ativos, pendentes ou precisam de aprovação.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-limebrand/25 bg-limebrand/8 p-3">
                  <p className="text-xs font-bold uppercase text-limebrand">Conta pessoal</p>
                  <p className="mt-1 text-sm text-white/70">Identidade Noogym ativa para site, app e dashboard.</p>
                </div>
                <div className="rounded-md border border-limebrand/25 bg-limebrand/8 p-3">
                  <p className="text-xs font-bold uppercase text-limebrand">Perfil atleta</p>
                  <p className="mt-1 text-sm text-white/70">Disponível por padrão para treinos, planos, marketplace e check-ins.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-limebrand/25 bg-limebrand/8 px-3 py-1.5 text-xs font-semibold text-limebrand">{activeCount + 2} ativo{activeCount + 2 === 1 ? "" : "s"}</span>
              {attentionCount ? <span className="rounded-full border border-amber-300/25 bg-amber-300/8 px-3 py-1.5 text-xs font-semibold text-amber-200">{attentionCount} requer atenção</span> : null}
            </div>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const { id, connectionId, title, description, action, eyebrow, Icon } = service;
            const connection = connections[connectionId];
            const active = connection.status === "ACTIVE";
            const cardTitle = active ? connection.displayName : title;
            const cardDescription = active ? `${connection.detail}. Abra o serviço para continuar.` : connection.status === "NOT_CONNECTED" ? description : statusDescription(connection.status, connectionId);
            const cardAction = active ? "Abrir serviço" : connection.status === "NOT_CONNECTED" ? action : connection.status === "PENDING" ? "Ver andamento" : "Resolver agora";
            const StatusIcon = connection.status === "ACTIVE" ? CheckCircle2 : connection.status === "PENDING" ? Clock3 : connection.status === "NOT_CONNECTED" ? null : AlertCircle;

            return (
              <button
                key={id}
                id={id}
                type="button"
                onClick={() => openService(service)}
                className={cn(
                  "group flex min-w-0 scroll-mt-28 flex-col rounded-lg border p-4 text-left transition hover:-translate-y-0.5 target:shadow-glow sm:p-5 lg:min-h-64",
                  toneByStatus[connection.status],
                  "hover:border-limebrand/55",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-current/25 bg-current/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-current/25 bg-black/20 px-2.5 py-1 text-[11px] font-bold">
                    {StatusIcon ? <StatusIcon className="h-3.5 w-3.5" /> : null}
                    {serviceStatusLabel(connection.status)}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide">{eyebrow}</p>
                <h3 className="mt-2 text-lg font-black text-white">{cardTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{cardDescription}</p>
                <span className="mt-auto pt-5 text-sm font-bold transition group-hover:translate-x-1">{cardAction} →</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-5">
        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-card">
          <ShieldCheck className="h-8 w-8 text-limebrand" />
          <h3 className="mt-4 text-lg font-black">Estado dos acessos</h3>
          <div className="mt-4 space-y-3 text-sm">
            {services.map((service) => {
              const connection = connections[service.connectionId];
              return (
                <div key={service.id} className="flex items-center justify-between gap-3 border-b border-white/8 pb-3 last:border-0 last:pb-0">
                  <span className="text-white/65">{connection.displayName}</span>
                  <span className={cn("text-xs font-bold", toneByStatus[connection.status].split(" ").at(-1))}>{serviceStatusLabel(connection.status)}</span>
                </div>
              );
            })}
          </div>
          {demoMode ? (
            <button type="button" onClick={resetDemo} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white/55 transition hover:text-limebrand">
              <RefreshCw className="h-3.5 w-3.5" /> Restaurar cenário de demonstração
            </button>
          ) : null}
        </section>
        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-card">
          <Building2 className="h-8 w-8 text-limebrand" />
          <h3 className="mt-4 text-lg font-black">Representa um ginásio?</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">Ginásios não criam conta sozinhos. A equipa Noogym valida o negócio e depois libera os acessos de gestão para pessoas autorizadas.</p>
          <Link href="/para-ginasios#agendar-demonstracao" className="mt-4 inline-flex text-sm font-bold text-limebrand hover:text-white">Agendar demonstração →</Link>
        </section>
      </div>

      {selectedService && selectedConnection ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section role="dialog" aria-modal="true" className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-xl border border-white/12 bg-[#071113] p-5 shadow-[0_-20px_70px_rgba(0,0,0,.55)] sm:max-w-2xl sm:rounded-xl sm:p-7">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-md border border-white/12 bg-[#071113] text-white/62 hover:text-white" aria-label="Fechar formulário">
              <X className="h-4 w-4" />
            </button>
            <div className="pr-10">
              {selectedConnection.status === "NOT_CONNECTED" ? (
                selectedService.connectionId === "gym" ? (
                  <GymLinkForm authenticated onSubmitted={() => updateStatus("gym", "PENDING")} />
                ) : (
                  <OnboardingRequestForm
                    kind={selectedService.connectionId === "market" ? "vendedor" : "personal"}
                    authenticated
                    onSubmitted={(kind: OnboardingKind) => updateStatus(kind === "vendedor" ? "market" : "personal", "PENDING")}
                  />
                )
              ) : (
                <ConnectionStatusView
                  connectionId={selectedService.connectionId}
                  status={selectedConnection.status}
                  title={selectedConnection.displayName}
                  detail={selectedConnection.detail}
                  onClose={() => setSelected(null)}
                  onStatusChange={(status) => updateStatus(selectedService.connectionId, status)}
                />
              )}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

function ConnectionStatusView({ connectionId, status, title, detail, onClose, onStatusChange }: {
  connectionId: ServiceId;
  status: ServiceStatus;
  title: string;
  detail: string;
  onClose: () => void;
  onStatusChange: (status: ServiceStatus) => void;
}) {
  const pending = status === "PENDING";
  const actionRequired = status === "ACTION_REQUIRED";
  const suspended = status === "SUSPENDED";
  const Icon = pending ? Clock3 : AlertCircle;

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-limebrand">Acompanhamento do serviço</p>
      <h2 className="mt-2 text-2xl font-black">{title}</h2>
      <div className={cn("mt-5 rounded-lg border p-5", toneByStatus[status])}>
        <Icon className="h-8 w-8" />
        <h3 className="mt-4 text-lg font-black text-white">{serviceStatusLabel(status)}</h3>
        <p className="mt-2 text-sm leading-6 text-white/65">
          {pending && "Sua solicitação foi recebida e está sendo validada pela equipa Noogym."}
          {actionRequired && `Existe uma pendência para concluir esta conexão: ${detail}.`}
          {suspended && "Este acesso está temporariamente suspenso. Entre em contato com o suporte para revisar a situação."}
        </p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {pending && demoMode ? (
          <button type="button" onClick={() => { onStatusChange("ACTIVE"); onClose(); }} className="h-12 rounded-md bg-limebrand px-4 font-bold text-black">Simular aprovação</button>
        ) : null}
        {actionRequired ? (
          <button type="button" onClick={() => onStatusChange("PENDING")} className="h-12 rounded-md bg-limebrand px-4 font-bold text-black">Enviar documento pendente</button>
        ) : null}
        {suspended ? (
          <button type="button" onClick={() => onStatusChange("PENDING")} className="h-12 rounded-md bg-limebrand px-4 font-bold text-black">Solicitar revisão</button>
        ) : null}
        <button type="button" onClick={() => { onStatusChange("NOT_CONNECTED"); onClose(); }} className="h-12 rounded-md border border-white/12 px-4 font-semibold text-white/72 hover:border-red-300/45 hover:text-red-200">
          {connectionId === "gym" ? "Remover vínculo" : "Cancelar solicitação"}
        </button>
      </div>
      {pending && connectionId !== "gym" && demoMode ? (
        <button type="button" onClick={() => onStatusChange("ACTION_REQUIRED")} className="mt-3 text-xs font-semibold text-amber-200/70 hover:text-amber-200">Simular documento pendente</button>
      ) : null}
    </div>
  );
}

function statusDescription(status: ServiceStatus, id: ServiceId) {
  if (status === "PENDING") return "Solicitação recebida. A equipa Noogym está validando as informações enviadas.";
  if (status === "ACTION_REQUIRED") return id === "market" ? "Envie o documento comercial pendente para continuar a aprovação da loja." : "Há informações pendentes para concluir esta conexão.";
  if (status === "SUSPENDED") return "O acesso está temporariamente suspenso e precisa de revisão.";
  return "Serviço disponível para conexão.";
}
