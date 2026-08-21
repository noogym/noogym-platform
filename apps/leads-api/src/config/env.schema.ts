export function validateEnv(config: Record<string, unknown>) {
  const databaseUrl = readString(config.DATABASE_URL);
  const port = Number(config.PORT ?? 3333);
  const webOrigin = readString(config.WEB_ORIGIN) ?? "http://localhost:3000";
  const adminApiKey = readString(config.ADMIN_API_KEY) ?? "dev-admin-key";
  const whatsappPhoneNumber = readString(config.WHATSAPP_PHONE_NUMBER) ?? "";
  const smtpHost = readString(config.SMTP_HOST);
  const smtpPort = Number(config.SMTP_PORT ?? 587);
  const smtpSecure = readBoolean(config.SMTP_SECURE) ?? false;
  const smtpUser = readString(config.SMTP_USER);
  const smtpPass = readString(config.SMTP_PASS);
  const smtpFrom = readString(config.SMTP_FROM);
  const mailProvider = readMailProvider(config.MAIL_PROVIDER);
  const mailFrom =
    readString(config.MAIL_FROM) ?? "Noogym <no-reply@noogym.com>";
  const mailTo = readString(config.MAIL_TO);
  const resendApiKey = readString(config.RESEND_API_KEY);
  const resendFrom = readString(config.RESEND_FROM);
  const resendEndpoint = readString(config.RESEND_ENDPOINT) ?? "https://api.resend.com/emails";
  const turnstileSecretKey = readString(config.TURNSTILE_SECRET_KEY);
  const googleMapsApiKey = readString(config.GOOGLE_MAPS_API_KEY);
  const authTokenSecret = readString(config.AUTH_TOKEN_SECRET);
  const authTurnstileRequired = readBoolean(config.AUTH_TURNSTILE_REQUIRED) ?? false;
  const leadsTurnstileRequired = readBoolean(config.LEADS_TURNSTILE_REQUIRED) ?? false;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required.");
  }

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer.");
  }

  try {
    new URL(webOrigin);
  } catch {
    throw new Error("WEB_ORIGIN must be a valid URL.");
  }

  if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
    throw new Error("SMTP_PORT must be a positive integer.");
  }

  return {
    DATABASE_URL: databaseUrl,
    PORT: port,
    WEB_ORIGIN: webOrigin,
    ADMIN_API_KEY: adminApiKey,
    WHATSAPP_PHONE_NUMBER: whatsappPhoneNumber,
    SMTP_HOST: smtpHost,
    SMTP_PORT: smtpPort,
    SMTP_SECURE: smtpSecure,
    SMTP_USER: smtpUser,
    SMTP_PASS: smtpPass,
    SMTP_FROM: smtpFrom,
    MAIL_PROVIDER: mailProvider,
    MAIL_FROM: mailFrom,
    MAIL_TO: mailTo,
    RESEND_API_KEY: resendApiKey,
    RESEND_FROM: resendFrom,
    RESEND_ENDPOINT: resendEndpoint,
    TURNSTILE_SECRET_KEY: turnstileSecretKey,
    GOOGLE_MAPS_API_KEY: googleMapsApiKey,
    AUTH_TOKEN_SECRET: authTokenSecret,
    AUTH_TURNSTILE_REQUIRED: authTurnstileRequired,
    LEADS_TURNSTILE_REQUIRED: leadsTurnstileRequired,
  };
}

function readMailProvider(value: unknown) {
  const provider = readString(value)?.toLowerCase();

  if (provider === "smtp" || provider === "resend" || provider === "disabled") {
    return provider;
  }

  return "auto";
}

function readString(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function readBoolean(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();

  if (["true", "1", "yes"].includes(normalized)) {
    return true;
  }

  if (["false", "0", "no"].includes(normalized)) {
    return false;
  }

  return undefined;
}
