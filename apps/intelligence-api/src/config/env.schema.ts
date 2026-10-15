export function validateEnv(config: Record<string, unknown>) {
  const databaseUrl = readString(config.DATABASE_URL);
  const port = Number(config.PORT ?? 3340);
  const webOrigin = readString(config.WEB_ORIGIN) ?? "http://localhost:3003";
  const apiKey = readString(config.INTELLIGENCE_API_KEY) ?? "dev-intelligence-key";
  const submissionApiKey = readString(config.INTELLIGENCE_SUBMISSION_API_KEY) ?? apiKey;
  const userAgent = readString(config.NOOGYM_INTELLIGENCE_USER_AGENT) ?? "NoogymFitnessIntelligence/0.1 (+https://noogym.com)";
  const crawlerTimeoutMs = Number(config.CRAWLER_TIMEOUT_MS ?? 8000);
  const crawlerDelayMs = Number(config.CRAWLER_DELAY_MS ?? 1500);
  const aiProvider = readString(config.AI_PROVIDER) ?? "disabled";
  const websitePublishingUrl = readString(config.WEBSITE_PUBLISHING_URL);
  const websiteDataExportDir = readString(config.WEBSITE_DATA_EXPORT_DIR) ?? "../website/src/data/generated";

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required.");
  }

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer.");
  }

  if (!Number.isInteger(crawlerTimeoutMs) || crawlerTimeoutMs <= 0) {
    throw new Error("CRAWLER_TIMEOUT_MS must be a positive integer.");
  }

  if (!Number.isInteger(crawlerDelayMs) || crawlerDelayMs < 0) {
    throw new Error("CRAWLER_DELAY_MS must be zero or a positive integer.");
  }

  return {
    DATABASE_URL: databaseUrl,
    PORT: port,
    WEB_ORIGIN: webOrigin,
    INTELLIGENCE_API_KEY: apiKey,
    INTELLIGENCE_SUBMISSION_API_KEY: submissionApiKey,
    NOOGYM_INTELLIGENCE_USER_AGENT: userAgent,
    CRAWLER_TIMEOUT_MS: crawlerTimeoutMs,
    CRAWLER_DELAY_MS: crawlerDelayMs,
    AI_PROVIDER: aiProvider,
    WEBSITE_PUBLISHING_URL: websitePublishingUrl,
    WEBSITE_DATA_EXPORT_DIR: websiteDataExportDir,
  };
}

function readString(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}
