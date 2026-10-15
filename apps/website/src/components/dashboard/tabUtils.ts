export function tabToSlug(tab: string) {
  return tab
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findActiveTab(tabs: string[] | undefined, requested?: string) {
  if (!tabs?.length) return undefined;
  if (!requested) return tabs[0];

  const normalized = requested.toLowerCase();
  const normalizedSlug = tabToSlug(requested);
  const aliases: Record<string, string> = {
    refeicao: "refeicoes",
    planejamentos: "plano-alimentar",
    diario: "diario-alimentar",
    servicos: "perfis-e-vinculos",
  };
  const requestedSlug = aliases[normalizedSlug] ?? aliases[normalized] ?? normalizedSlug;
  return tabs.find((tab) => tabToSlug(tab) === requestedSlug || tab.toLowerCase() === normalized) ?? tabs[0];
}
