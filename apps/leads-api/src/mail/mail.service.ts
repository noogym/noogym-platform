import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DemoRequestLead } from "@prisma/client";
import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";

type MailProvider = "auto" | "smtp" | "resend" | "disabled";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from: string;
};

type ResendConfig = {
  apiKey: string;
  endpoint: string;
  from: string;
};

type MailConfig = {
  provider: MailProvider;
  to?: string;
  smtp?: SmtpConfig;
  resend?: ResendConfig;
};

type MailMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter?: Transporter;
  private readonly config?: MailConfig;

  constructor(private readonly configService: ConfigService) {
    this.config = this.readConfig();

    if (!this.config) {
      this.logger.log("Mail not configured. E-mails will be skipped.");
      return;
    }

    if (this.config.smtp) {
      this.transporter = nodemailer.createTransport({
        host: this.config.smtp.host,
        port: this.config.smtp.port,
        secure: this.config.smtp.secure,
        auth:
          this.config.smtp.user && this.config.smtp.pass
            ? {
                user: this.config.smtp.user,
                pass: this.config.smtp.pass,
              }
            : undefined,
      });
    }

    this.logger.log(`Mail provider mode: ${this.config.provider}. Available providers: ${this.describeAvailableProviders()}.`);
  }

  async sendDemoRequestEmails(lead: DemoRequestLead) {
    if (!this.config) {
      return;
    }

    await Promise.allSettled([
      lead.email ? this.sendCustomerConfirmation(lead) : Promise.resolve(),
      this.config.to ? this.sendInternalNotification(lead) : Promise.resolve(),
    ]).then((results) => {
      results.forEach((result) => {
        if (result.status === "rejected") {
          this.logger.warn(`Failed to send lead e-mail: ${result.reason}`);
        }
      });
    });
  }

  async sendPasswordResetEmail(email: string, token: string, expiresAt: Date) {
    if (!this.config) {
      return;
    }

    const resetUrl = new URL("/esqueci-senha", this.configService.get<string>("WEB_ORIGIN", "http://localhost:3000"));
    resetUrl.searchParams.set("token", token);

    await this.sendMail({
      to: email,
      subject: "Recuperacao de senha Noogym",
      text: [
        "Recebemos um pedido para redefinir a sua senha Noogym.",
        "",
        `Abra este link para criar uma nova senha: ${resetUrl.toString()}`,
        `O link expira em ${expiresAt.toISOString()}.`,
        "",
        "Se voce nao pediu esta alteracao, ignore este e-mail.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>Recuperacao de senha Noogym</h2>
          <p>Recebemos um pedido para redefinir a sua senha.</p>
          <p><a href="${escapeHtml(resetUrl.toString())}">Criar nova senha</a></p>
          <p>O link expira em ${escapeHtml(expiresAt.toISOString())}.</p>
          <p>Se voce nao pediu esta alteracao, ignore este e-mail.</p>
        </div>
      `,
    }, "password-reset").catch((error: unknown) => {
      this.logger.warn(`Failed to send password reset e-mail: ${error}`);
    });
  }

  private async sendCustomerConfirmation(lead: DemoRequestLead) {
    if (!lead.email || !this.config) {
      return;
    }

    await this.sendMail({
      to: lead.email,
      subject: "Recebemos o seu pedido de demonstração Noogym",
      text: buildCustomerText(lead),
      html: buildCustomerHtml(lead),
    }, "demo-customer");
  }

  private async sendInternalNotification(lead: DemoRequestLead) {
    if (!this.config?.to) {
      return;
    }

    await this.sendMail({
      to: this.config.to,
      subject: `Novo pedido de demonstração: ${lead.gymName}`,
      text: buildInternalText(lead),
      html: buildInternalHtml(lead),
    }, "demo-internal");
  }

  private async sendMail(message: MailMessage, context: string) {
    const providers = this.getProviderOrder();

    if (!providers.length) {
      this.logger.log(`No mail provider available. Skipping ${context} e-mail to ${message.to}.`);
      return;
    }

    const errors: unknown[] = [];

    for (const provider of providers) {
      try {
        if (provider === "resend") {
          await this.sendViaResend(message);
        } else {
          await this.sendViaSmtp(message);
        }

        this.logger.log(`Sent ${context} e-mail to ${message.to} via ${provider}.`);
        return;
      } catch (error) {
        errors.push(error);
        this.logger.warn(`Failed to send ${context} e-mail via ${provider}: ${error}`);
      }
    }

    throw new Error(`All mail providers failed for ${context}: ${errors.map(String).join(" | ")}`);
  }

  private async sendViaSmtp(message: MailMessage) {
    if (!this.transporter || !this.config?.smtp) {
      throw new Error("SMTP provider is not configured.");
    }

    const options: SendMailOptions = {
      from: this.config.smtp.from,
      to: message.to,
      subject: message.subject,
      text: message.text,
      html: message.html,
    };

    await this.transporter.sendMail(options);
  }

  private async sendViaResend(message: MailMessage) {
    const resend = this.config?.resend;

    if (!resend) {
      throw new Error("Resend provider is not configured.");
    }

    const response = await fetch(resend.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resend.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resend.from,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        html: message.html,
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Resend returned ${response.status}: ${body.slice(0, 500)}`);
    }
  }

  private getProviderOrder() {
    if (!this.config || this.config.provider === "disabled") {
      return [];
    }

    if (this.config.provider === "smtp") {
      return this.config.smtp ? (["smtp"] as const) : [];
    }

    if (this.config.provider === "resend") {
      return this.config.resend ? (["resend"] as const) : [];
    }

    return [
      ...(this.config.resend ? (["resend"] as const) : []),
      ...(this.config.smtp ? (["smtp"] as const) : []),
    ];
  }

  private describeAvailableProviders() {
    const providers = [
      this.config?.resend ? "resend" : null,
      this.config?.smtp ? "smtp" : null,
    ].filter(Boolean);

    return providers.length ? providers.join(", ") : "none";
  }

  private readConfig(): MailConfig | undefined {
    const provider = this.readProvider();
    const host = this.configService.get<string>("SMTP_HOST");
    const apiKey = this.configService.get<string>("RESEND_API_KEY");
    const mailFrom = this.configService.get<string>(
      "MAIL_FROM",
      "Noogym <no-reply@noogym.com>",
    );
    const smtpFrom = this.configService.get<string>("SMTP_FROM", mailFrom);
    const resendFrom = this.configService.get<string>("RESEND_FROM", mailFrom);
    const smtp = host
      ? {
          host,
          port: this.configService.get<number>("SMTP_PORT", 587),
          secure: this.configService.get<boolean>("SMTP_SECURE", false),
          user: this.configService.get<string>("SMTP_USER"),
          pass: this.configService.get<string>("SMTP_PASS"),
          from: smtpFrom,
        }
      : undefined;
    const resend = apiKey
      ? {
          apiKey,
          endpoint: this.configService.get<string>("RESEND_ENDPOINT", "https://api.resend.com/emails"),
          from: resendFrom,
        }
      : undefined;

    if (provider === "disabled") {
      return undefined;
    }

    const configured = provider === "auto"
      ? Boolean(smtp || resend)
      : provider === "smtp"
        ? Boolean(smtp)
        : Boolean(resend);

    if (!configured) {
      this.logger.warn(`MAIL_PROVIDER=${provider} but no matching provider is configured. E-mails will be skipped.`);
      return undefined;
    }

    return {
      provider,
      to: this.configService.get<string>("MAIL_TO"),
      smtp,
      resend,
    };
  }

  private readProvider(): MailProvider {
    const provider = this.configService.get<string>("MAIL_PROVIDER", "auto").toLowerCase();

    if (provider === "smtp" || provider === "resend" || provider === "disabled") {
      return provider;
    }

    return "auto";
  }
}

function buildCustomerText(lead: DemoRequestLead) {
  return [
    `Olá ${lead.fullName},`,
    "",
    `Recebemos o seu pedido de demonstração para o ginásio ${lead.gymName}.`,
    "A equipa Noogym entrará em contacto consigo em breve para agendar a melhor data.",
    "",
    "Obrigado,",
    "Equipa Noogym",
  ].join("\n");
}

function buildCustomerHtml(lead: DemoRequestLead) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>Recebemos o seu pedido de demonstração</h2>
      <p>Olá ${escapeHtml(lead.fullName)},</p>
      <p>
        Recebemos o seu pedido de demonstração para o ginásio
        <strong>${escapeHtml(lead.gymName)}</strong>.
      </p>
      <p>
        A equipa Noogym entrará em contacto consigo em breve para agendar a melhor data.
      </p>
      <p>Obrigado,<br />Equipa Noogym</p>
    </div>
  `;
}

function buildInternalText(lead: DemoRequestLead) {
  return [
    "Novo pedido de demonstração Noogym",
    "",
    `Nome: ${lead.fullName}`,
    `Ginásio: ${lead.gymName}`,
    `WhatsApp: ${lead.whatsapp}`,
    `E-mail: ${lead.email ?? "Não informado"}`,
    `Cidade: ${lead.city}`,
    `Alunos: ${lead.currentStudentsRange}`,
    `Unidades: ${lead.unitsRange ?? "Não informado"}`,
    `Desafio: ${lead.mainChallenge}`,
    `Mensagem: ${lead.message ?? "Não informada"}`,
    `Origem: ${lead.source ?? "Não informada"}`,
    `Campanha: ${lead.campaign ?? "Não informada"}`,
  ].join("\n");
}

function buildInternalHtml(lead: DemoRequestLead) {
  const rows = [
    ["Nome", lead.fullName],
    ["Ginásio", lead.gymName],
    ["WhatsApp", lead.whatsapp],
    ["E-mail", lead.email ?? "Não informado"],
    ["Cidade", lead.city],
    ["Alunos", lead.currentStudentsRange],
    ["Unidades", lead.unitsRange ?? "Não informado"],
    ["Desafio", lead.mainChallenge],
    ["Mensagem", lead.message ?? "Não informada"],
    ["Origem", lead.source ?? "Não informada"],
    ["Campanha", lead.campaign ?? "Não informada"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>Novo pedido de demonstração Noogym</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight: 700; border-bottom: 1px solid #e5e7eb;">${escapeHtml(label)}</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
