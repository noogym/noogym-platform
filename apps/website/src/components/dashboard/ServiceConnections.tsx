"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { demoMode } from "@/lib/auth";

export type ServiceId = "gym" | "personal" | "market";
export type ServiceStatus = "NOT_CONNECTED" | "PENDING" | "ACTIVE" | "ACTION_REQUIRED" | "SUSPENDED";

export type ServiceConnection = {
  id: ServiceId;
  status: ServiceStatus;
  displayName: string;
  detail: string;
  href: string;
};

type ServiceConnectionsContextValue = {
  connections: Record<ServiceId, ServiceConnection>;
  updateStatus: (id: ServiceId, status: ServiceStatus) => void;
  resetDemo: () => void;
};

const storageKey = "noogym:service-connections";

const demoConnections: Record<ServiceId, ServiceConnection> = {
  gym: {
    id: "gym",
    status: "ACTIVE",
    displayName: "Noogym Center",
    detail: "Aluno ativo",
    href: "/dashboard/academias?tab=meus-ginasios",
  },
  personal: {
    id: "personal",
    status: "PENDING",
    displayName: "Acesso profissional",
    detail: "Em análise",
    href: "/dashboard/painel-personal",
  },
  market: {
    id: "market",
    status: "ACTION_REQUIRED",
    displayName: "Minha loja",
    detail: "Documento pendente",
    href: "/dashboard/minha-loja",
  },
};

const disconnectedNames: Record<ServiceId, Pick<ServiceConnection, "displayName" | "detail">> = {
  gym: { displayName: "Ginásio / ERP", detail: "Não conectado" },
  personal: { displayName: "Sou personal", detail: "Não conectado" },
  market: { displayName: "Vender no Market", detail: "Não conectado" },
};

const defaultConnections: Record<ServiceId, ServiceConnection> = {
  gym: {
    id: "gym",
    status: "NOT_CONNECTED",
    displayName: disconnectedNames.gym.displayName,
    detail: disconnectedNames.gym.detail,
    href: "/dashboard/academias?tab=meus-ginasios",
  },
  personal: {
    id: "personal",
    status: "NOT_CONNECTED",
    displayName: disconnectedNames.personal.displayName,
    detail: disconnectedNames.personal.detail,
    href: "/dashboard/painel-personal",
  },
  market: {
    id: "market",
    status: "NOT_CONNECTED",
    displayName: disconnectedNames.market.displayName,
    detail: disconnectedNames.market.detail,
    href: "/dashboard/minha-loja",
  },
};

function withStatus(connection: ServiceConnection, status: ServiceStatus): ServiceConnection {
  if (status === "NOT_CONNECTED") return { ...connection, ...disconnectedNames[connection.id], status };
  if (status === "PENDING") return { ...connection, status, detail: "Em análise" };
  if (status === "ACTION_REQUIRED") return { ...connection, status, detail: "Documento pendente" };
  if (status === "SUSPENDED") return { ...connection, status, detail: "Acesso suspenso" };

  const activeData: Record<ServiceId, Pick<ServiceConnection, "displayName" | "detail">> = {
    gym: { displayName: "Noogym Center", detail: "Aluno ativo" },
    personal: { displayName: "Painel Personal", detail: "Acesso aprovado" },
    market: { displayName: "Minha loja", detail: "Loja ativa" },
  };
  return { ...connection, ...activeData[connection.id], status };
}

const ServiceConnectionsContext = createContext<ServiceConnectionsContextValue | null>(null);

export function ServiceConnectionsProvider({ children }: { children: React.ReactNode }) {
  const [connections, setConnections] = useState(demoMode ? demoConnections : defaultConnections);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return;
    try {
      setConnections(JSON.parse(stored) as Record<ServiceId, ServiceConnection>);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(connections));
  }, [connections]);

  const value = useMemo<ServiceConnectionsContextValue>(() => ({
    connections,
    updateStatus(id, status) {
      setConnections((current) => ({ ...current, [id]: withStatus(current[id], status) }));
    },
    resetDemo() {
      setConnections(demoConnections);
    },
  }), [connections]);

  return <ServiceConnectionsContext.Provider value={value}>{children}</ServiceConnectionsContext.Provider>;
}

export function useServiceConnections() {
  const value = useContext(ServiceConnectionsContext);
  if (!value) throw new Error("useServiceConnections deve ser usado dentro de ServiceConnectionsProvider.");
  return value;
}

export function serviceStatusLabel(status: ServiceStatus) {
  return {
    NOT_CONNECTED: "Conectar",
    PENDING: "Em análise",
    ACTIVE: "Conectado",
    ACTION_REQUIRED: "Ação necessária",
    SUSPENDED: "Suspenso",
  }[status];
}
