import { dashboardIcons } from "./icons";
import { screenMeta, type DashboardSlug } from "@/data/dashboard";
import { DashboardRoleSummary } from "./DashboardRoleSummary";
import { DashboardSections } from "./DashboardSections";
import { TabsNavigation } from "./TabsNavigation";
import { findActiveTab } from "./tabUtils";

function Header({ slug, activeTab }: { slug: DashboardSlug; activeTab?: string }) {
  const meta = screenMeta[slug];
  const Icon = dashboardIcons[meta.icon];
  return <header className="mb-6 min-w-0 max-w-full">
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-7 w-7 shrink-0 text-limebrand sm:h-8 sm:w-8" />
      <div className="min-w-0"><h1 className="text-2xl font-black tracking-normal sm:text-3xl">{meta.title}</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-white/65 sm:text-base">{meta.description}</p></div>
    </div>
    {meta.tabs ? <div className="mt-5"><TabsNavigation tabs={meta.tabs} active={activeTab} baseHref={`/dashboard/${slug}`} /></div> : null}
  </header>;
}

export function DashboardPage({ slug, tab }: { slug: DashboardSlug; tab?: string }) {
  const activeTab = findActiveTab(screenMeta[slug].tabs, tab);
  return slug === "resumo"
    ? <DashboardRoleSummary />
    : <><Header slug={slug} activeTab={activeTab} /><div className="min-w-0 max-w-full"><DashboardSections slug={slug} tab={activeTab} /></div></>;
}
