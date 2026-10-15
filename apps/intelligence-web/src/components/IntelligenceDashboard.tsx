"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Archive,
  CheckCircle2,
  Database,
  Download,
  FileText,
  Gauge,
  ListFilter,
  Play,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Timer,
  XCircle,
} from "lucide-react";
import { demoContents, demoEvents, demoJobs, demoMetrics, demoRawCaptures, demoSources } from "@/lib/demo-data";
import type { ContentItem, CrawlJob, DashboardMetrics, EventCandidate, RawCapture, Source } from "@/lib/types";

type Tab = "dashboard" | "sources" | "captures" | "content" | "events" | "review" | "jobs" | "settings";
type ApiState = "loading" | "online" | "demo";

const workflow = ["INGESTED", "NORMALIZED", "CLASSIFIED", "REVIEW_REQUIRED", "APPROVED", "READY_TO_PUBLISH", "SCHEDULED", "PUBLISHED"];
const reviewStatuses = ["REVIEW_REQUIRED", "CLASSIFIED", "DRAFT_GENERATED", "DUPLICATE"];

const tabs: Array<{ id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "sources", label: "Fontes", icon: Database },
  { id: "captures", label: "Capturas", icon: Archive },
  { id: "content", label: "Conteudos", icon: FileText },
  { id: "events", label: "Eventos", icon: Activity },
  { id: "review", label: "Revisao", icon: ShieldCheck },
  { id: "jobs", label: "Jobs", icon: Play },
  { id: "settings", label: "Configuracoes", icon: Settings },
];

export function IntelligenceDashboard() {
  const [active, setActive] = useState<Tab>("dashboard");
  const [metrics, setMetrics] = useState<DashboardMetrics>(demoMetrics);
  const [sources, setSources] = useState<Source[]>(demoSources);
  const [rawCaptures, setRawCaptures] = useState<RawCapture[]>(demoRawCaptures);
  const [contents, setContents] = useState<ContentItem[]>(demoContents);
  const [events, setEvents] = useState<EventCandidate[]>(demoEvents);
  const [jobs, setJobs] = useState<CrawlJob[]>(demoJobs);
  const [apiState, setApiState] = useState<ApiState>("loading");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [contentStatus, setContentStatus] = useState("all");
  const [eventStatus, setEventStatus] = useState("all");
  const [province, setProvince] = useState("all");
  const [selectedContentIds, setSelectedContentIds] = useState<string[]>([]);
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]);
  const [selectedRawId, setSelectedRawId] = useState<string | null>(null);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    void loadData();
  }, []);

  async function loadData() {
    setApiState("loading");
    try {
      const [dashboardRes, sourcesRes, rawRes, contentRes, eventsRes, jobsRes] = await Promise.all([
        api<DashboardMetrics>("dashboard"),
        api<Source[]>("sources"),
        api<RawCapture[]>("content/raw"),
        api<ContentItem[]>("content"),
        api<EventCandidate[]>("events"),
        api<CrawlJob[]>("jobs"),
      ]);

      setMetrics(dashboardRes);
      setSources(sourcesRes);
      setRawCaptures(rawRes);
      setContents(contentRes);
      setEvents(eventsRes);
      setJobs(jobsRes);
      setApiState("online");
    } catch {
      setMetrics(demoMetrics);
      setSources(demoSources);
      setRawCaptures(demoRawCaptures);
      setContents(demoContents);
      setEvents(demoEvents);
      setJobs(demoJobs);
      setApiState("demo");
    }
  }

  async function createSource(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    await runAction("source-create", async () => {
      await api("sources", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          url: form.get("url"),
          sourceType: form.get("sourceType"),
          trustScore: Number(form.get("trustScore") ?? 50),
          updateFrequency: form.get("updateFrequency"),
          crawlDelayMs: Number(form.get("crawlDelayMs") ?? 1500),
          contentSelector: emptyToUndefined(form.get("contentSelector")),
          titleSelector: emptyToUndefined(form.get("titleSelector")),
          province: emptyToUndefined(form.get("province")),
          city: emptyToUndefined(form.get("city")),
        }),
      });
      formElement.reset();
      await loadData();
      setNotice("Fonte adicionada.");
    });
  }

  async function runSource(sourceId: string) {
    await runAction(sourceId, async () => {
      await api(`sources/${sourceId}/crawl`, { method: "POST" });
      await loadData();
      setNotice("Coleta concluida.");
    });
  }

  async function runAllSources() {
    await runAction("crawl-all", async () => {
      await api("jobs/crawl-all-sources", { method: "POST" });
      await loadData();
      setNotice("Pipeline executado.");
    });
  }

  async function processRawCapture(rawId: string) {
    await runAction(rawId, async () => {
      const result = await api<{ classified?: ContentItem; deduped?: ContentItem; draft?: ContentItem }>(`content/raw/${rawId}/process`, { method: "POST" });
      const content = result.draft ?? result.deduped ?? result.classified;
      if (content?.contentType === "event") {
        await api(`events/detect/${content.id}`, { method: "POST" });
      }
      await loadData();
      setNotice("Captura processada.");
    });
  }

  async function review(path: string, id: string, message: string) {
    await runAction(id, async () => {
      await api(path, {
        method: "POST",
        body: JSON.stringify({ reviewerName: "Editor Noogym", notes: "Acao feita pelo painel interno." }),
      });
      await loadData();
      setNotice(message);
    });
  }

  async function bulkApprove() {
    await runAction("bulk-approve", async () => {
      await Promise.all([
        ...selectedContentIds.map((id) => api(`editorial/content/${id}/approve`, { method: "POST", body: JSON.stringify({ reviewerName: "Editor Noogym" }) })),
        ...selectedEventIds.map((id) => api(`editorial/events/${id}/approve`, { method: "POST", body: JSON.stringify({ reviewerName: "Editor Noogym" }) })),
      ]);
      setSelectedContentIds([]);
      setSelectedEventIds([]);
      await loadData();
      setNotice("Itens aprovados.");
    });
  }

  async function exportWebsite() {
    await runAction("website-export", async () => {
      const result = await api<{ articles: number; events: number }>("publishing/website/export", { method: "POST" });
      await loadData();
      setNotice(`Exportado: ${result.articles} artigos e ${result.events} eventos.`);
    });
  }

  async function runAction(id: string, action: () => Promise<void>) {
    setBusyId(id);
    setNotice(null);
    try {
      await action();
    } finally {
      setBusyId(null);
    }
  }

  const provinces = useMemo(() => unique([...contents.map((item) => item.province), ...events.map((item) => item.province)].filter(Boolean) as string[]), [contents, events]);
  const filteredRawCaptures = useMemo(() => filterRawCaptures(rawCaptures, query, contentStatus, eventStatus, province), [rawCaptures, query, contentStatus, eventStatus, province]);
  const filteredContents = useMemo(() => filterContents(contents, query, contentStatus, province), [contents, query, contentStatus, province]);
  const filteredEvents = useMemo(() => filterEvents(events, query, eventStatus, province), [events, query, eventStatus, province]);
  const selectedContent = contents.find((item) => item.id === selectedContentId) ?? filteredContents[0];
  const selectedEvent = events.find((item) => item.id === selectedEventId) ?? filteredEvents[0];
  const selectedRaw = rawCaptures.find((item) => item.id === selectedRawId) ?? filteredRawCaptures[0];
  const reviewItems = filteredContents.filter((item) => reviewStatuses.includes(item.editorialStatus));
  const reviewEvents = filteredEvents.filter((item) => reviewStatuses.includes(item.editorialStatus));

  return (
    <main className="min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-[272px_1fr]">
        <aside className="border-b border-white/10 bg-black/30 p-4 lg:border-b-0 lg:border-r">
          <div className="rounded-md border border-limebrand/25 bg-limebrand/10 p-4">
            <p className="text-xs font-black uppercase text-limebrand">Noogym</p>
            <h1 className="mt-2 text-xl font-black">Fitness Intelligence</h1>
            <p className="mt-2 text-xs leading-5 text-white/58">Discovery, revisao e publicacao controlada.</p>
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
              <p className="text-xs font-bold uppercase text-limebrand">Angola fitness ecosystem</p>
              <h2 className="mt-1 text-2xl font-black">Operacao editorial</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {notice ? <span className="rounded-md border border-limebrand/25 bg-limebrand/10 px-3 py-2 text-xs font-bold text-limebrand">{notice}</span> : null}
              <span className={`rounded-md border px-3 py-2 text-xs font-bold ${apiState === "online" ? "border-limebrand/30 bg-limebrand/10 text-limebrand" : "border-yellow-300/30 bg-yellow-300/10 text-yellow-100"}`}>
                {apiState === "online" ? "API online" : apiState === "loading" ? "A carregar" : "Modo demo"}
              </span>
              <IconButton label="Atualizar" icon={RefreshCw} onClick={() => void loadData()} />
              <IconButton label="Exportar website" icon={Download} busy={busyId === "website-export"} onClick={() => void exportWebsite()} />
            </div>
          </header>

          <Filters query={query} onQuery={setQuery} contentStatus={contentStatus} onContentStatus={setContentStatus} eventStatus={eventStatus} onEventStatus={setEventStatus} province={province} onProvince={setProvince} provinces={provinces} />

          {active === "dashboard" ? <DashboardView metrics={metrics} sources={sources} contents={contents} events={events} jobs={jobs} onRunAll={runAllSources} busyId={busyId} /> : null}
          {active === "sources" ? <SourcesView busyId={busyId} sources={sources} onCreate={createSource} onRun={runSource} onRunAll={runAllSources} /> : null}
          {active === "captures" ? <CapturesView busyId={busyId} captures={filteredRawCaptures} selectedId={selectedRaw?.id ?? null} onSelect={setSelectedRawId} onProcess={processRawCapture} /> : null}
          {active === "content" ? <ContentView contents={filteredContents} selectedId={selectedContentId} selectedIds={selectedContentIds} onSelect={setSelectedContentId} onToggle={(id) => toggle(id, selectedContentIds, setSelectedContentIds)} /> : null}
          {active === "events" ? <EventsView events={filteredEvents} selectedId={selectedEventId} selectedIds={selectedEventIds} onSelect={setSelectedEventId} onToggle={(id) => toggle(id, selectedEventIds, setSelectedEventIds)} /> : null}
          {active === "review" ? <ReviewView busyId={busyId} content={selectedContent} event={selectedEvent} contentCount={reviewItems.length} eventCount={reviewEvents.length} selectedCount={selectedContentIds.length + selectedEventIds.length} onBulkApprove={bulkApprove} onReview={review} /> : null}
          {active === "jobs" ? <JobsView jobs={jobs} /> : null}
          {active === "settings" ? <SettingsView /> : null}
        </section>
      </div>
    </main>
  );
}

function DashboardView({ metrics, sources, contents, events, jobs, onRunAll, busyId }: { metrics: DashboardMetrics; sources: Source[]; contents: ContentItem[]; events: EventCandidate[]; jobs: CrawlJob[]; onRunAll: () => Promise<void>; busyId: string | null }) {
  const cards = [
    ["Fontes", metrics.sources, Database],
    ["Descobertos hoje", metrics.discoveredToday, Sparkles],
    ["Conteudos", metrics.contents, FileText],
    ["Eventos", metrics.events, Activity],
    ["Em revisao", metrics.reviewRequired, ShieldCheck],
    ["Falhas", metrics.failedJobs, AlertTriangle],
  ] as const;

  return (
    <div className="grid gap-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {cards.map(([label, value, Icon]) => <Metric key={label} label={label} value={value} icon={Icon} />)}
      </div>
      <Panel title="Funil editorial" action={<IconButton label="Rodar pipeline" icon={Play} busy={busyId === "crawl-all"} onClick={() => void onRunAll()} />}>
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-8">
          {workflow.map((status) => <StatusStep key={status} label={status} value={metrics.pipeline?.[status] ?? 0} />)}
        </div>
      </Panel>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Panel title="Conteudos recentes">
          <DataTable headers={["Titulo", "Fonte", "Score", "Status"]} rows={contents.slice(0, 6).map((item) => [item.title, item.rawContent?.source?.name ?? "-", item.relevanceScore, <StatusBadge key={item.id} status={item.editorialStatus} />])} />
        </Panel>
        <Panel title="Fontes ativas">
          <div className="grid gap-3">
            {sources.slice(0, 5).map((source) => <SourceCard key={source.id} source={source} />)}
          </div>
        </Panel>
      </div>
      <Panel title="Ultimos jobs">
        <DataTable headers={["Job", "Tipo", "Status", "Processados", "Erro"]} rows={jobs.slice(0, 8).map((item) => [item.name, item.jobType ?? "crawl", <StatusBadge key={item.id} status={item.status} />, item.processedCount ?? "-", item.error ?? "-"])} />
      </Panel>
    </div>
  );
}

function SourcesView({ busyId, sources, onCreate, onRun, onRunAll }: { busyId: string | null; sources: Source[]; onCreate: (event: React.FormEvent<HTMLFormElement>) => Promise<void>; onRun: (sourceId: string) => Promise<void>; onRunAll: () => Promise<void> }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <Panel title="Adicionar fonte">
        <form onSubmit={(event) => void onCreate(event)} className="grid gap-3">
          <Input name="name" required placeholder="Nome" />
          <Input name="url" required placeholder="fixture://running-angola ou https://..." />
          <select name="sourceType" className="h-11 rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm text-white outline-none focus:border-limebrand/70">
            {["website", "rss", "api", "federation", "gym", "eventOrganizer", "media", "blog", "publicDirectory", "socialOfficial", "other"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <div className="grid grid-cols-2 gap-3">
            <Input name="trustScore" type="number" min={0} max={100} defaultValue={70} />
            <Input name="crawlDelayMs" type="number" min={0} defaultValue={1500} />
          </div>
          <Input name="titleSelector" placeholder="Selector de titulo opcional" />
          <Input name="contentSelector" placeholder="Selector de conteudo opcional" />
          <div className="grid grid-cols-2 gap-3">
            <Input name="province" placeholder="Provincia" />
            <Input name="city" placeholder="Cidade" />
          </div>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-limebrand px-4 text-sm font-bold text-black hover:bg-limebrand2">
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </form>
      </Panel>
      <Panel title="Fontes" action={<IconButton label="Rodar todas" icon={Play} busy={busyId === "crawl-all"} onClick={() => void onRunAll()} />}>
        <DataTable
          headers={["Nome", "Tipo", "Trust", "Status", "Delay", "Ultima coleta", "Acao"]}
          rows={sources.map((source) => [
            source.name,
            source.sourceType,
            source.trustScore,
            <StatusBadge key={source.id} status={source.enabled ? source.status : "disabled"} />,
            source.crawlDelayMs ?? 1500,
            source.lastSuccessfulCheckAt ? new Date(source.lastSuccessfulCheckAt).toLocaleString("pt-AO") : "-",
            <IconButton key={source.id} label={busyId === source.id ? "Coletando" : "Coletar"} icon={Play} busy={busyId === source.id} onClick={() => void onRun(source.id)} />,
          ])}
        />
      </Panel>
    </div>
  );
}

function CapturesView({ busyId, captures, selectedId, onSelect, onProcess }: { busyId: string | null; captures: RawCapture[]; selectedId: string | null; onSelect: (id: string) => void; onProcess: (rawId: string) => Promise<void> }) {
  const selected = captures.find((item) => item.id === selectedId) ?? captures[0];

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_480px]">
      <Panel title="Capturas do crawler">
        <DataTable
          headers={["Titulo capturado", "Fonte", "Bruto", "Formato", "Status editorial", "Capturado", "Acao"]}
          rows={captures.map((item) => [
            <button key={item.id} onClick={() => onSelect(item.id)} className={`text-left font-semibold ${selected?.id === item.id ? "text-limebrand" : "text-white/80"}`}>{item.title}</button>,
            item.source?.name ?? "-",
            <StatusBadge key={`${item.id}-raw-status`} status={item.status} />,
            captureFormat(item),
            item.content ? <StatusBadge key={`${item.id}-content-status`} status={item.content.editorialStatus} /> : "-",
            new Date(item.fetchedAt).toLocaleString("pt-AO"),
            <IconButton key={`${item.id}-process`} label="Processar" icon={Sparkles} busy={busyId === item.id} onClick={() => void onProcess(item.id)} />,
          ])}
        />
      </Panel>
      <CaptureDetail capture={selected} />
    </div>
  );
}

function ContentView({ contents, selectedId, selectedIds, onSelect, onToggle }: { contents: ContentItem[]; selectedId: string | null; selectedIds: string[]; onSelect: (id: string) => void; onToggle: (id: string) => void }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
      <Panel title="Conteudos">
        <DataTable
          headers={["Sel", "Titulo", "Fonte", "Tipo", "Categoria", "Score", "Status"]}
          rows={contents.map((item) => [
            <input key={`${item.id}-check`} type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => onToggle(item.id)} />,
            <button key={item.id} onClick={() => onSelect(item.id)} className={`text-left font-semibold ${selectedId === item.id ? "text-limebrand" : "text-white/80"}`}>{item.title}</button>,
            item.rawContent?.source?.name ?? "-",
            item.contentType,
            item.category ?? "-",
            item.relevanceScore,
            <StatusBadge key={`${item.id}-status`} status={item.editorialStatus} />,
          ])}
        />
      </Panel>
      <ContentDetail content={contents.find((item) => item.id === selectedId) ?? contents[0]} />
    </div>
  );
}

function EventsView({ events, selectedId, selectedIds, onSelect, onToggle }: { events: EventCandidate[]; selectedId: string | null; selectedIds: string[]; onSelect: (id: string) => void; onToggle: (id: string) => void }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
      <Panel title="Eventos">
        <DataTable
          headers={["Sel", "Nome", "Organizador", "Cidade", "Origem", "Data", "Status"]}
          rows={events.map((item) => [
            <input key={`${item.id}-check`} type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => onToggle(item.id)} />,
            <button key={item.id} onClick={() => onSelect(item.id)} className={`text-left font-semibold ${selectedId === item.id ? "text-limebrand" : "text-white/80"}`}>{item.name}</button>,
            item.organizer ?? "-",
            item.city ?? "-",
            item.origin,
            item.startDate ? new Date(item.startDate).toLocaleDateString("pt-AO") : "-",
            <StatusBadge key={`${item.id}-status`} status={item.editorialStatus} />,
          ])}
        />
      </Panel>
      <EventDetail event={events.find((item) => item.id === selectedId) ?? events[0]} />
    </div>
  );
}

function ReviewView({ busyId, content, event, contentCount, eventCount, selectedCount, onBulkApprove, onReview }: { busyId: string | null; content?: ContentItem; event?: EventCandidate; contentCount: number; eventCount: number; selectedCount: number; onBulkApprove: () => Promise<void>; onReview: (path: string, id: string, message: string) => Promise<void> }) {
  return (
    <div className="grid gap-5">
      <div className="grid gap-3 md:grid-cols-4">
        <Metric label="Conteudos em revisao" value={contentCount} icon={FileText} />
        <Metric label="Eventos em revisao" value={eventCount} icon={Activity} />
        <Metric label="Selecionados" value={selectedCount} icon={ShieldCheck} />
        <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
          <IconButton label="Aprovar lote" icon={CheckCircle2} busy={busyId === "bulk-approve"} onClick={() => void onBulkApprove()} />
        </div>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <Panel title="Detalhe do conteudo" action={content ? <ReviewActions busyId={busyId} id={content.id} type="content" onReview={onReview} /> : null}>
          <ContentDetail content={content} />
        </Panel>
        <Panel title="Preview de evento" action={event ? <ReviewActions busyId={busyId} id={event.id} type="events" onReview={onReview} /> : null}>
          <EventDetail event={event} />
        </Panel>
      </div>
    </div>
  );
}

function ReviewActions({ busyId, id, type, onReview }: { busyId: string | null; id: string; type: "content" | "events"; onReview: (path: string, id: string, message: string) => Promise<void> }) {
  const base = `editorial/${type}/${id}`;
  const preparePath = type === "content" ? `publishing/blog/${id}/prepare` : `publishing/events/${id}/prepare`;
  return (
    <div className="flex flex-wrap gap-2">
      <IconButton label="Aprovar" icon={CheckCircle2} busy={busyId === id} onClick={() => void onReview(`${base}/approve`, id, "Aprovado.")} />
      <IconButton label="Rejeitar" icon={XCircle} busy={busyId === id} onClick={() => void onReview(`${base}/reject`, id, "Rejeitado.")} />
      <IconButton label="Preparar" icon={Sparkles} busy={busyId === id} onClick={() => void onReview(preparePath, id, "Preparado para publicacao.")} />
    </div>
  );
}

function JobsView({ jobs }: { jobs: CrawlJob[] }) {
  return (
    <Panel title="Jobs">
      <DataTable
        headers={["Job", "Tipo", "Fonte", "Status", "Descobertos", "Processados", "Criado", "Erro"]}
        rows={jobs.map((item) => [item.name, item.jobType ?? "crawl", item.sourceId ?? "-", <StatusBadge key={item.id} status={item.status} />, item.discoveredCount ?? 0, item.processedCount ?? 0, new Date(item.createdAt).toLocaleString("pt-AO"), item.error ?? "-"])}
      />
    </Panel>
  );
}

function SettingsView() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Panel title="Politica de coleta"><p className="text-sm leading-6 text-white/64">Coleta apenas conteudo publico, respeita robots.txt, timeout e delay por fonte. Sem login, paywall ou bypass.</p></Panel>
      <Panel title="Seguranca"><p className="text-sm leading-6 text-white/64">API interna usa chave administrativa. Submissoes publicas usam uma chave separada e honeypot anti-spam.</p></Panel>
      <Panel title="Publicacao"><p className="text-sm leading-6 text-white/64">Publicacoes aprovadas sao exportadas para JSON versionavel consumido pelo website.</p></Panel>
    </div>
  );
}

function Filters({ query, onQuery, contentStatus, onContentStatus, eventStatus, onEventStatus, province, onProvince, provinces }: { query: string; onQuery: (value: string) => void; contentStatus: string; onContentStatus: (value: string) => void; eventStatus: string; onEventStatus: (value: string) => void; province: string; onProvince: (value: string) => void; provinces: string[] }) {
  return (
    <div className="mb-5 grid gap-3 rounded-md border border-white/10 bg-white/[0.025] p-3 lg:grid-cols-[1fr_170px_170px_170px]">
      <label className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
        <Input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Pesquisar titulo, resumo, organizador" className="pl-10" />
      </label>
      <Select value={contentStatus} onChange={onContentStatus} options={["all", ...workflow, "DRAFT_GENERATED", "REJECTED", "DUPLICATE"]} icon={ListFilter} />
      <Select value={eventStatus} onChange={onEventStatus} options={["all", ...workflow, "REJECTED", "DUPLICATE"]} icon={Activity} />
      <Select value={province} onChange={onProvince} options={["all", ...provinces]} icon={Database} />
    </div>
  );
}

function CaptureDetail({ capture }: { capture?: RawCapture }) {
  if (!capture) return <Panel title="Preview da captura"><Empty text="Sem captura selecionada." /></Panel>;

  const content = capture.content;
  const event = content?.eventCandidate;

  return (
    <Panel title="Original, noticia e evento">
      <div className="grid gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-limebrand">{capture.source?.name ?? "Fonte desconhecida"}</p>
          <h3 className="mt-2 text-xl font-black">{capture.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge status={capture.status} />
            <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs font-bold text-white/55">{captureFormat(capture)}</span>
          </div>
        </div>

        <PanelMini title="Texto original capturado">
          <p className="break-all text-xs text-white/42">{capture.canonicalUrl ?? "Sem URL canonica."}</p>
          <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap text-xs leading-5 text-white/68">{capture.rawText}</pre>
        </PanelMini>

        <PanelMini title="Como noticia/conteudo">
          {content ? (
            <div className="grid gap-2">
              <p className="text-base font-black text-white">{content.title}</p>
              <p>{content.summary ?? "Sem resumo editorial."}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                <Info label="Tipo" value={content.contentType} />
                <Info label="Categoria" value={content.category ?? "-"} />
                <Info label="Score" value={content.relevanceScore} />
                <Info label="Status" value={content.editorialStatus.replace(/_/g, " ")} />
              </div>
            </div>
          ) : (
            <Empty text="Esta captura ainda nao foi normalizada/classificada." />
          )}
        </PanelMini>

        <PanelMini title="Como evento">
          {event ? (
            <div className="grid gap-2">
              <p className="text-base font-black text-white">{event.name}</p>
              <p>{event.description ?? "Sem descricao."}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                <Info label="Organizador" value={event.organizer ?? "-"} />
                <Info label="Data" value={event.startDate ? new Date(event.startDate).toLocaleDateString("pt-AO") : "-"} />
                <Info label="Local" value={[event.city, event.province].filter(Boolean).join(", ") || "-"} />
                <Info label="Status" value={event.editorialStatus.replace(/_/g, " ")} />
              </div>
            </div>
          ) : (
            <Empty text={content?.contentType === "event" ? "Conteudo parece evento, mas ainda nao gerou candidato." : "Esta captura nao foi classificada como evento."} />
          )}
        </PanelMini>
      </div>
    </Panel>
  );
}

function ContentDetail({ content }: { content?: ContentItem }) {
  if (!content) return <Empty text="Sem conteudo selecionado." />;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-bold uppercase text-limebrand">{content.rawContent?.source?.name ?? "Fonte"}</p>
        <h3 className="mt-2 text-xl font-black">{content.title}</h3>
        <p className="mt-3 leading-7 text-white/64">{content.summary ?? "Sem resumo."}</p>
      </div>
      <div className="grid gap-2 text-sm text-white/62 sm:grid-cols-2">
        <Info label="Tipo" value={content.contentType} />
        <Info label="Categoria" value={content.category ?? "-"} />
        <Info label="Local" value={[content.city, content.province].filter(Boolean).join(", ") || "-"} />
        <Info label="Dedupe" value={`${content.duplicateStatus}${content.duplicateReason ? `: ${content.duplicateReason}` : ""}`} />
      </div>
      <PanelMini title="Score explicado">
        <p>Fitness: {content.scoreExplanation?.matchedCategoryTerms?.join(", ") || "-"}</p>
        <p>Local: {content.scoreExplanation?.matchedLocation ?? "-"}</p>
        <p>Trust: {content.scoreExplanation?.sourceTrustScore ?? content.trustScore ?? "-"}</p>
      </PanelMini>
      <PanelMini title="Preview editorial">
        <pre className="max-h-52 overflow-auto whitespace-pre-wrap text-xs leading-5 text-white/64">{stringifyDraft(content.draft ?? content.socialDraft ?? content.summary)}</pre>
      </PanelMini>
    </div>
  );
}

function EventDetail({ event }: { event?: EventCandidate }) {
  if (!event) return <Empty text="Sem evento selecionado." />;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-bold uppercase text-limebrand">{event.origin}</p>
        <h3 className="mt-2 text-xl font-black">{event.name}</h3>
        <p className="mt-3 leading-7 text-white/64">{event.description ?? "Sem descricao."}</p>
      </div>
      <div className="grid gap-2 text-sm text-white/62 sm:grid-cols-2">
        <Info label="Organizador" value={event.organizer ?? "-"} />
        <Info label="Data" value={event.startDate ? new Date(event.startDate).toLocaleDateString("pt-AO") : "-"} />
        <Info label="Local" value={[event.city, event.province].filter(Boolean).join(", ") || "-"} />
        <Info label="Verificacao" value={event.verificationStatus} />
      </div>
      <PanelMini title="Publicacao">
        <p>Status: {event.editorialStatus}</p>
        <p>Dedupe: {event.duplicateStatus}{event.duplicateReason ? `: ${event.duplicateReason}` : ""}</p>
        <p>Fonte: {event.sourceUrl ?? "-"}</p>
      </PanelMini>
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

function StatusStep({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <p className="text-lg font-black">{value}</p>
      <p className="mt-1 break-words text-[11px] font-bold uppercase text-white/45">{label.replace(/_/g, " ")}</p>
    </div>
  );
}

function SourceCard({ source }: { source: Source }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="font-bold">{source.name}</p>
        <StatusBadge status={source.status} />
      </div>
      <p className="mt-1 text-xs text-white/50">{source.sourceType} · trust {source.trustScore}</p>
      <p className="mt-2 break-all text-xs text-white/38">{source.url}</p>
    </div>
  );
}

function Panel({ children, title, action }: { children: React.ReactNode; title: string; action?: React.ReactNode }) {
  return (
    <section className="rounded-md border border-white/12 bg-white/[0.035] p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-black">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}

function PanelMini({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <p className="mb-2 text-xs font-bold uppercase text-white/45">{title}</p>
      <div className="space-y-1 text-sm text-white/64">{children}</div>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  if (rows.length === 0) return <Empty text="Sem registros para mostrar." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase text-white/42">
            {headers.map((header) => <th key={header} className="px-3 py-3 font-bold">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-white/8 last:border-0">
              {row.map((cell, cellIndex) => <td key={cellIndex} className="max-w-[340px] px-3 py-3 align-top text-white/70">{cell}</td>)}
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

function Select({ value, onChange, options, icon: Icon }: { value: string; onChange: (value: string) => void; options: string[]; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <label className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-md border border-white/12 bg-white/[0.04] px-9 text-sm text-white outline-none focus:border-limebrand/70">
        {unique(options).map((item) => <option key={item} value={item}>{item === "all" ? "Todos" : item.replace(/_/g, " ")}</option>)}
      </select>
    </label>
  );
}

function IconButton({ label, icon: Icon, onClick, busy }: { label: string; icon: React.ComponentType<{ className?: string }>; onClick: () => void; busy?: boolean }) {
  return (
    <button disabled={busy} onClick={onClick} title={label} className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/12 px-3 text-sm font-bold text-white/72 hover:border-limebrand/45 hover:text-limebrand disabled:opacity-50">
      {busy ? <Timer className="h-4 w-4 animate-spin" /> : <Icon className="h-4 w-4" />}
      <span>{label}</span>
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const good = ["active", "completed", "APPROVED", "READY_TO_PUBLISH", "PUBLISHED", "verified"].includes(status);
  const bad = ["error", "failed", "REJECTED", "DUPLICATE", "disabled", "rejected"].includes(status);
  return <span className={`inline-flex rounded-md border px-2 py-1 text-xs font-bold ${good ? "border-limebrand/25 bg-limebrand/10 text-limebrand" : bad ? "border-red-300/25 bg-red-400/10 text-red-200" : "border-yellow-300/25 bg-yellow-300/10 text-yellow-100"}`}>{status.replace(/_/g, " ")}</span>;
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <p className="text-xs uppercase text-white/38">{label}</p>
      <p className="mt-1 font-semibold text-white/78">{value}</p>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-md border border-dashed border-white/12 p-5 text-sm text-white/45">{text}</p>;
}

function filterRawCaptures(items: RawCapture[], query: string, contentStatus: string, eventStatus: string, province: string) {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const content = item.content;
    const event = content?.eventCandidate;
    const matchesQuery =
      !q ||
      [item.title, item.rawText, item.source?.name, content?.title, content?.summary, content?.category, event?.name, event?.organizer, event?.description]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(q));
    const matchesContentStatus = contentStatus === "all" || item.status === contentStatus.toLowerCase() || content?.editorialStatus === contentStatus;
    const matchesEventStatus = eventStatus === "all" || event?.editorialStatus === eventStatus;
    const matchesProvince = province === "all" || content?.province === province || event?.province === province || item.source?.province === province;
    return matchesQuery && matchesContentStatus && matchesEventStatus && matchesProvince;
  });
}

function filterContents(items: ContentItem[], query: string, status: string, province: string) {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesQuery = !q || [item.title, item.summary, item.category, item.rawContent?.source?.name].filter(Boolean).some((value) => String(value).toLowerCase().includes(q));
    const matchesStatus = status === "all" || item.editorialStatus === status;
    const matchesProvince = province === "all" || item.province === province;
    return matchesQuery && matchesStatus && matchesProvince;
  });
}

function filterEvents(items: EventCandidate[], query: string, status: string, province: string) {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesQuery = !q || [item.name, item.description, item.organizer, item.city].filter(Boolean).some((value) => String(value).toLowerCase().includes(q));
    const matchesStatus = status === "all" || item.editorialStatus === status;
    const matchesProvince = province === "all" || item.province === province;
    return matchesQuery && matchesStatus && matchesProvince;
  });
}

function toggle(id: string, values: string[], setValues: (value: string[]) => void) {
  setValues(values.includes(id) ? values.filter((value) => value !== id) : [...values, id]);
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function emptyToUndefined(value: FormDataEntryValue | null) {
  return typeof value === "string" && value.trim().length > 0 ? value : undefined;
}

function captureFormat(capture: RawCapture) {
  if (capture.content?.eventCandidate) return "Evento";
  if (capture.content?.contentType === "event") return "Evento provavel";
  if (capture.content?.contentType === "news") return "Noticia";
  if (capture.content?.contentType === "article") return "Artigo";
  if (capture.content?.contentType && capture.content.contentType !== "unknown") return capture.content.contentType;
  return "Por processar";
}

function stringifyDraft(value: unknown) {
  if (!value) return "Sem draft gerado.";
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 2);
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
