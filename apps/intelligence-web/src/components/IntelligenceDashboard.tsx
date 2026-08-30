"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, AlertTriangle, Archive, CheckCircle2, Database, FileText, Gauge, ListFilter, Play, Plus, RefreshCw, Search, Settings, ShieldCheck, Sparkles, Users } from "lucide-react";
import { demoContents, demoEvents, demoJobs, demoMetrics, demoSources } from "@/lib/demo-data";
import type { ContentItem, CrawlJob, DashboardMetrics, EventCandidate, Source } from "@/lib/types";

type Tab = "dashboard" | "sources" | "content" | "events" | "review" | "jobs" | "settings";

const tabs: Array<{ id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "sources", label: "Fontes", icon: Database },
  { id: "content", label: "Conteúdos", icon: FileText },
  { id: "events", label: "Eventos", icon: Activity },
  { id: "review", label: "Revisão", icon: ShieldCheck },
  { id: "jobs", label: "Jobs", icon: Play },
  { id: "settings", label: "Configurações", icon: Settings },
];

export function IntelligenceDashboard() {
  const [active, setActive] = useState<Tab>("dashboard");
  const [metrics, setMetrics] = useState<DashboardMetrics>(demoMetrics);
  const [sources, setSources] = useState<Source[]>(demoSources);
  const [contents, setContents] = useState<ContentItem[]>(demoContents);
  const [events, setEvents] = useState<EventCandidate[]>(demoEvents);
  const [jobs, setJobs] = useState<CrawlJob[]>(demoJobs);
  const [query, setQuery] = useState("");
  const [apiState, setApiState] = useState<"loading" | "online" | "demo">("loading");
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    void loadData();
  }, []);

  async function loadData() {
    setApiState("loading");
    try {
      const [dashboardRes, sourcesRes, contentRes, eventsRes, jobsRes] = await Promise.all([
        api<DashboardMetrics>("dashboard"),
        api<Source[]>("sources"),
        api<ContentItem[]>("content"),
        api<EventCandidate[]>("events"),
        api<CrawlJob[]>("jobs"),
      ]);

      setMetrics(dashboardRes);
      setSources(sourcesRes);
      setContents(contentRes);
      setEvents(eventsRes);
      setJobs(jobsRes);
      setApiState("online");
    } catch {
      setMetrics(demoMetrics);
      setSources(demoSources);
      setContents(demoContents);
      setEvents(demoEvents);
      setJobs(demoJobs);
      setApiState("demo");
    }
  }

  async function createSource(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await api("sources", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        url: form.get("url"),
        sourceType: form.get("sourceType"),
        trustScore: Number(form.get("trustScore") ?? 50),
        province: form.get("province"),
        city: form.get("city"),
      }),
    });
    event.currentTarget.reset();
    await loadData();
  }

  async function runSource(sourceId: string) {
    setBusyId(sourceId);
    try {
      await api(`sources/${sourceId}/crawl`, { method: "POST" });
      await loadData();
    } finally {
      setBusyId(null);
    }
  }

  async function review(path: string, id: string) {
    setBusyId(id);
    try {
      await api(path, {
        method: "POST",
        body: JSON.stringify({ reviewerName: "Editor Noogym", notes: "Ação feita pelo painel interno." }),
      });
      await loadData();
    } finally {
      setBusyId(null);
    }
  }

  const filteredContents = useMemo(() => contents.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())), [contents, query]);
  const reviewItems = filteredContents.filter((item) => ["REVIEW_REQUIRED", "CLASSIFIED", "DRAFT_GENERATED"].includes(item.editorialStatus));

  return (
    <main className="min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-black/30 p-4 lg:border-b-0 lg:border-r">
          <div className="rounded-md border border-limebrand/25 bg-limebrand/10 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-limebrand">Noogym</p>
            <h1 className="mt-2 text-xl font-black">Fitness Intelligence</h1>
            <p className="mt-2 text-xs leading-5 text-white/58">Painel interno para discovery, revisão e preparação editorial.</p>
          </div>
          <nav className="mt-4 grid gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActive(tab.id)} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition ${active === tab.id ? "bg-limebrand text-black" : "text-white/68 hover:bg-white/8 hover:text-white"}`}>
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="p-4 md:p-6">
          <header className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Angola fitness ecosystem</p>
              <h2 className="mt-1 text-2xl font-black">Operação editorial</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-md border px-3 py-2 text-xs font-bold ${apiState === "online" ? "border-limebrand/30 bg-limebrand/10 text-limebrand" : "border-yellow-300/30 bg-yellow-300/10 text-yellow-100"}`}>
                {apiState === "online" ? "API online" : apiState === "loading" ? "A carregar" : "Modo demo"}
              </span>
              <button onClick={() => void loadData()} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm font-semibold text-white/72 hover:border-limebrand/45 hover:text-limebrand">
                <RefreshCw className="h-4 w-4" />
                Atualizar
              </button>
            </div>
          </header>

          {active === "dashboard" ? <DashboardView metrics={metrics} sources={sources} contents={contents} events={events} /> : null}
          {active === "sources" ? <SourcesView busyId={busyId} sources={sources} onCreate={createSource} onRun={runSource} /> : null}
          {active === "content" ? <ContentView contents={filteredContents} query={query} onQuery={setQuery} /> : null}
          {active === "events" ? <EventsView events={events} /> : null}
          {active === "review" ? <ReviewView busyId={busyId} items={reviewItems} events={events.filter((item) => item.editorialStatus === "REVIEW_REQUIRED")} onReview={review} /> : null}
          {active === "jobs" ? <JobsView jobs={jobs} /> : null}
          {active === "settings" ? <SettingsView /> : null}
        </section>
      </div>
    </main>
  );
}

function DashboardView({ metrics, sources, contents, events }: { metrics: DashboardMetrics; sources: Source[]; contents: ContentItem[]; events: EventCandidate[] }) {
  const cards = [
    ["Fontes monitoradas", metrics.sources, Database],
    ["Descobertos hoje", metrics.discoveredToday, Sparkles],
    ["Eventos encontrados", metrics.events, Activity],
    ["Aguardando revisão", metrics.reviewRequired, ShieldCheck],
    ["Duplicados", metrics.duplicates, Archive],
    ["Erros de coleta", metrics.failedJobs, AlertTriangle],
  ] as const;

  return (
    <div className="grid gap-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {cards.map(([label, value, Icon]) => <Metric key={label} label={label} value={value} icon={Icon} />)}
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Panel title="Conteúdos recentes">
          <DataTable headers={["Título", "Tipo", "Categoria", "Score", "Status"]} rows={contents.slice(0, 6).map((item) => [item.title, item.contentType, item.category ?? "-", item.relevanceScore, item.editorialStatus])} />
        </Panel>
        <Panel title="Fontes ativas">
          <div className="grid gap-3">
            {sources.slice(0, 5).map((source) => (
              <div key={source.id} className="rounded-md border border-white/10 bg-black/20 p-3">
                <p className="font-bold">{source.name}</p>
                <p className="mt-1 text-xs text-white/50">{source.sourceType} · trust {source.trustScore}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="Eventos detectados">
        <DataTable headers={["Evento", "Cidade", "Origem", "Confiança", "Status"]} rows={events.map((item) => [item.name, item.city ?? "-", item.origin, item.confidence, item.editorialStatus])} />
      </Panel>
    </div>
  );
}

function SourcesView({ busyId, sources, onCreate, onRun }: { busyId: string | null; sources: Source[]; onCreate: (event: React.FormEvent<HTMLFormElement>) => Promise<void>; onRun: (sourceId: string) => Promise<void> }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
      <Panel title="Adicionar fonte">
        <form onSubmit={(event) => void onCreate(event)} className="grid gap-3">
          <Input name="name" required placeholder="Nome" />
          <Input name="url" required placeholder="fixture://running-angola" />
          <select name="sourceType" className="h-11 rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm">
            {["website", "rss", "api", "federation", "gym", "eventOrganizer", "media", "blog", "publicDirectory", "socialOfficial", "other"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <Input name="trustScore" type="number" min={0} max={100} defaultValue={70} />
          <Input name="province" placeholder="Província" />
          <Input name="city" placeholder="Cidade" />
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-limebrand px-4 text-sm font-bold text-black hover:bg-limebrand2">
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </form>
      </Panel>
      <Panel title="Fontes">
        <DataTable
          headers={["Nome", "Tipo", "Trust", "Status", "Última coleta", "Ações"]}
          rows={sources.map((source) => [
            source.name,
            source.sourceType,
            source.trustScore,
            source.enabled ? source.status : "disabled",
            source.lastSuccessfulCheckAt ? new Date(source.lastSuccessfulCheckAt).toLocaleDateString("pt-AO") : "-",
            <button key={source.id} disabled={busyId === source.id} onClick={() => void onRun(source.id)} className="inline-flex h-9 items-center gap-2 rounded-md border border-white/12 px-3 text-xs font-bold text-limebrand disabled:opacity-50">
              <Play className="h-3.5 w-3.5" />
              {busyId === source.id ? "Coletando" : "Coletar"}
            </button>,
          ])}
        />
      </Panel>
    </div>
  );
}

function ContentView({ contents, query, onQuery }: { contents: ContentItem[]; query: string; onQuery: (value: string) => void }) {
  return (
    <Panel title="Content discovery">
      <div className="mb-4 grid gap-3 md:grid-cols-[1fr_220px]">
        <label className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          <Input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Filtrar conteúdos" className="pl-10" />
        </label>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/12 px-3 text-sm font-bold text-white/70">
          <ListFilter className="h-4 w-4" />
          Filtros
        </button>
      </div>
      <DataTable headers={["Título", "Fonte", "Tipo", "Categoria", "Confiança", "Relevância", "Status"]} rows={contents.map((item) => [item.title, item.rawContent?.source?.name ?? "-", item.contentType, item.category ?? "-", item.confidence, item.relevanceScore, item.editorialStatus])} />
    </Panel>
  );
}

function EventsView({ events }: { events: EventCandidate[] }) {
  return (
    <Panel title="Eventos">
      <DataTable headers={["Nome", "Organizador", "Cidade", "Origem", "Data", "Confiança", "Status"]} rows={events.map((item) => [item.name, item.organizer ?? "-", item.city ?? "-", item.origin, item.startDate ? new Date(item.startDate).toLocaleDateString("pt-AO") : "-", item.confidence, item.editorialStatus])} />
    </Panel>
  );
}

function ReviewView({ busyId, items, events, onReview }: { busyId: string | null; items: ContentItem[]; events: EventCandidate[]; onReview: (path: string, id: string) => Promise<void> }) {
  const first = items[0];

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <Panel title="Original capturado">
        {first ? (
          <div>
            <p className="text-xs font-bold uppercase text-limebrand">{first.rawContent?.source?.name ?? "Fonte"}</p>
            <h3 className="mt-2 text-xl font-black">{first.title}</h3>
            <p className="mt-3 leading-7 text-white/64">{first.summary}</p>
            <div className="mt-4 grid gap-2 text-sm text-white/58">
              <p>Trust: {first.trustScore ?? first.rawContent?.source?.trustScore ?? "-"}</p>
              <p>Confiança: {first.confidence}</p>
              <p>Duplicado: {first.duplicateStatus}</p>
            </div>
          </div>
        ) : <Empty text="Sem conteúdo aguardando revisão." />}
      </Panel>
      <Panel title="Normalizado e ações">
        {first ? (
          <div>
            <p className="rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/68">{first.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Action disabled={busyId === first.id} onClick={() => onReview(`editorial/content/${first.id}/approve`, first.id)} icon={CheckCircle2} label="Aprovar" />
              <Action disabled={busyId === first.id} onClick={() => onReview(`editorial/content/${first.id}/reject`, first.id)} icon={AlertTriangle} label="Rejeitar" />
              <Action disabled={busyId === first.id} onClick={() => onReview(`content/${first.id}/generate-draft`, first.id)} icon={Sparkles} label="Gerar draft" />
            </div>
          </div>
        ) : <Empty text="A fila editorial está limpa." />}
      </Panel>
      <Panel title="Eventos em revisão">
        <DataTable headers={["Evento", "Cidade", "Organizador", "Status"]} rows={events.map((item) => [item.name, item.city ?? "-", item.organizer ?? "-", item.editorialStatus])} />
      </Panel>
      <Panel title="Possíveis duplicados">
        <DataTable headers={["Título", "Cidade", "Status"]} rows={items.filter((item) => item.duplicateStatus !== "unique").map((item) => [item.title, item.city ?? "-", item.duplicateStatus])} />
      </Panel>
    </div>
  );
}

function JobsView({ jobs }: { jobs: CrawlJob[] }) {
  return (
    <Panel title="Jobs">
      <DataTable headers={["Job", "Fonte", "Status", "Tentativas", "Criado", "Erro"]} rows={jobs.map((item) => [item.name, item.sourceId ?? "-", item.status, item.attempts, new Date(item.createdAt).toLocaleString("pt-AO"), item.error ?? "-"])} />
    </Panel>
  );
}

function SettingsView() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Panel title="Política de coleta"><p className="text-sm leading-6 text-white/64">APIs oficiais, RSS e HTML público. Sem bypass de CAPTCHA, paywall, login ou áreas privadas.</p></Panel>
      <Panel title="RBAC mínimo"><p className="text-sm leading-6 text-white/64">Perfis previstos: admin, editor e reviewer. A fase atual usa API key isolada.</p></Panel>
      <Panel title="Social media"><p className="text-sm leading-6 text-white/64">InstagramProvider e FacebookProvider ficam preparados no fluxo de draft; publicação real é fase posterior.</p></Panel>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: number }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <Icon className="h-5 w-5 text-limebrand" />
      <p className="mt-3 text-2xl font-black">{value}</p>
      <p className="mt-1 text-xs text-white/50">{label}</p>
    </div>
  );
}

function Panel({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="rounded-md border border-white/12 bg-white/[0.035] p-4">
      <h3 className="mb-4 text-lg font-black">{title}</h3>
      {children}
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  if (rows.length === 0) {
    return <Empty text="Sem registros para mostrar." />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/42">
            {headers.map((header) => <th key={header} className="px-3 py-3 font-bold">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-white/8 last:border-0">
              {row.map((cell, cellIndex) => <td key={cellIndex} className="px-3 py-3 text-white/70">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`h-11 w-full rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm text-white outline-none placeholder:text-white/38 focus:border-limebrand/70 ${props.className ?? ""}`} />;
}

function Action({ disabled, icon: Icon, label, onClick }: { disabled?: boolean; icon: React.ComponentType<{ className?: string }>; label: string; onClick: () => Promise<void> }) {
  return (
    <button disabled={disabled} onClick={() => void onClick()} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm font-bold text-white/72 hover:border-limebrand/45 hover:text-limebrand disabled:opacity-50">
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-md border border-dashed border-white/12 p-5 text-sm text-white/45">{text}</p>;
}

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`/api/intelligence/${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
