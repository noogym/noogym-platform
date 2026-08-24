import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DemoRequestLead } from "@prisma/client";
import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";
import { EmailTemplateService } from "./email-template.service";

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

  constructor(
    private readonly configService: ConfigService,
    private readonly emailTemplate: EmailTemplateService,
  ) {
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

    this.logger.log(
      `Mail provider mode: ${this.config.provider}. Available providers: ${this.describeAvailableProviders()}.`,
    );
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

    const resetUrl = new URL(
      "/esqueci-senha",
      this.configService.get<string>("WEB_ORIGIN", "http://localhost:3000"),
    );
    resetUrl.searchParams.set("token", token);

    await this.sendMail(
      {
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
        html: this.emailTemplate.render({
          button: { label: "Criar nova senha", url: resetUrl.toString() },
          details: [
            { label: "Validade", value: expiresAt.toLocaleString("pt-AO") },
          ],
          eyebrow: "Seguranca da conta",
          footerNote:
            "Se voce nao solicitou esta recuperacao, pode ignorar esta mensagem com seguranca.",
          intro: [
            "Recebemos um pedido para redefinir a senha da sua conta Noogym.",
            "Use o botao abaixo para criar uma nova senha e continuar a aceder a sua conta.",
          ],
          preheader: "Use o link seguro para redefinir a sua senha Noogym.",
          secondary:
            "Por seguranca, nunca partilhe este link com outras pessoas.",
          title: "Redefina a sua senha",
        }),
      },
      "password-reset",
    ).catch((error: unknown) => {
      this.logger.warn(`Failed to send password reset e-mail: ${error}`);
    });
  }

  private async sendCustomerConfirmation(lead: DemoRequestLead) {
    if (!lead.email || !this.config) {
      return;
    }

    await this.sendMail(
      {
        to: lead.email,
        subject: "Recebemos o seu pedido de demonstracao Noogym",
        text: this.buildCustomerText(lead),
        html: this.buildCustomerHtml(lead),
      },
      "demo-customer",
    );
  }

  private async sendInternalNotification(lead: DemoRequestLead) {
    if (!this.config?.to) {
      return;
    }

    await this.sendMail(
      {
        to: this.config.to,
        subject: `Novo pedido de demonstracao: ${lead.gymName}`,
        text: this.buildInternalText(lead),
        html: this.buildInternalHtml(lead),
      },
      "demo-internal",
    );
  }

  private async sendMail(message: MailMessage, context: string) {
    const providers = this.getProviderOrder();

    if (!providers.length) {
      this.logger.log(
        `No mail provider available. Skipping ${context} e-mail to ${message.to}.`,
      );
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

        this.logger.log(
          `Sent ${context} e-mail to ${message.to} via ${provider}.`,
        );
        return;
      } catch (error) {
        errors.push(error);
        this.logger.warn(
          `Failed to send ${context} e-mail via ${provider}: ${error}`,
        );
      }
    }

    throw new Error(
      `All mail providers failed for ${context}: ${errors.map(String).join(" | ")}`,
    );
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
      throw new Error(
        `Resend returned ${response.status}: ${body.slice(0, 500)}`,
      );
    }
  }

  private buildCustomerText(lead: DemoRequestLead) {
    return [
      `Ola ${lead.fullName},`,
      "",
      `Recebemos o seu pedido de demonstracao para o ginasio ${lead.gymName}.`,
      "A equipa Noogym entrara em contacto consigo em breve para agendar a melhor data.",
      "",
      "Obrigado,",
      "Equipa Noogym",
    ].join("\n");
  }

  private buildCustomerHtml(lead: DemoRequestLead) {
    return this.emailTemplate.render({
      details: [{ label: "Ginasio", value: lead.gymName }],
      eyebrow: "Pedido de demonstracao",
      footerNote:
        "Recebeu esta mensagem porque submeteu um pedido de demonstracao Noogym.",
      greeting: `Ola, ${lead.fullName}`,
      intro: [
        `Recebemos o seu pedido de demonstracao para o ginasio ${lead.gymName}.`,
        "A equipa Noogym entrara em contacto consigo em breve para agendar a melhor data.",
      ],
      preheader: "A equipa Noogym recebeu o seu pedido de demonstracao.",
      secondary:
        "Obrigado por considerar a Noogym para a gestao do seu ginasio.",
      title: "Pedido recebido",
    });
  }

  private buildInternalText(lead: DemoRequestLead) {
    return [
      "Novo pedido de demonstracao Noogym",
      "",
      `Nome: ${lead.fullName}`,
      `Ginasio: ${lead.gymName}`,
      `WhatsApp: ${lead.whatsapp}`,
      `E-mail: ${lead.email ?? "Nao informado"}`,
      `Cidade: ${lead.city}`,
      `Alunos: ${lead.currentStudentsRange}`,
      `Unidades: ${lead.unitsRange ?? "Nao informado"}`,
      `Desafio: ${lead.mainChallenge}`,
      `Mensagem: ${lead.message ?? "Nao informada"}`,
      `Origem: ${lead.source ?? "Nao informada"}`,
      `Campanha: ${lead.campaign ?? "Nao informada"}`,
    ].join("\n");
  }

  private buildInternalHtml(lead: DemoRequestLead) {
    return this.emailTemplate.render({
      details: [
        { label: "Nome", value: lead.fullName },
        { label: "Ginasio", value: lead.gymName },
        { label: "WhatsApp", value: lead.whatsapp },
        { label: "E-mail", value: lead.email ?? "Nao informado" },
        { label: "Cidade", value: lead.city },
        { label: "Alunos", value: lead.currentStudentsRange },
        { label: "Unidades", value: lead.unitsRange ?? "Nao informado" },
        { label: "Desafio", value: lead.mainChallenge },
        { label: "Mensagem", value: lead.message ?? "Nao informada" },
        { label: "Origem", value: lead.source ?? "Nao informada" },
        { label: "Campanha", value: lead.campaign ?? "Nao informada" },
      ],
      eyebrow: "Lead comercial",
      intro: [
        "Um novo pedido de demonstracao foi submetido nos canais Noogym.",
        "Veja os dados abaixo para priorizar o contacto comercial.",
      ],
      preheader: `Novo pedido de demonstracao de ${lead.gymName}.`,
      title: "Novo pedido de demonstracao",
    });
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
          endpoint: this.configService.get<string>(
            "RESEND_ENDPOINT",
            "https://api.resend.com/emails",
          ),
          from: resendFrom,
        }
      : undefined;

    if (provider === "disabled") {
      return undefined;
    }

    const configured =
      provider === "auto"
        ? Boolean(smtp || resend)
        : provider === "smtp"
          ? Boolean(smtp)
          : Boolean(resend);

    if (!configured) {
      this.logger.warn(
        `MAIL_PROVIDER=${provider} but no matching provider is configured. E-mails will be skipped.`,
      );
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
    const provider = this.configService
      .get<string>("MAIL_PROVIDER", "auto")
      .toLowerCase();

    if (provider === "smtp" || provider === "resend" || provider === "disabled") {
      return provider;
    }

    return "auto";
  }
}
