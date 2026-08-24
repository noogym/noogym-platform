import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailQueueService } from '../common/email/email-queue.service';
import { EmailTemplateService } from '../common/email/email-template.service';

type WelcomeEmail = {
  name: string;
  organizationName: string;
  to: string;
};

@Injectable()
export class WelcomeEmailService {
  private readonly logger = new Logger(WelcomeEmailService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly emailQueue: EmailQueueService,
    private readonly emailTemplate: EmailTemplateService,
  ) {}

  async sendWelcomeEmail(email: WelcomeEmail) {
    const panelUrl = this.config.get<string>(
      'PASSWORD_RESET_BASE_URL',
      'http://localhost:3000',
    );
    const result = await this.emailQueue.queueEmail({
      to: email.to,
      subject: 'Bem-vindo ao Noogym',
      text: [
        `Ola ${email.name},`,
        '',
        `A conta de ${email.organizationName} foi criada no Noogym.`,
        'Ja pode entrar no painel para configurar a sua operacao, equipa, planos e clientes.',
        `Aceda ao painel: ${panelUrl}`,
        '',
        'Equipa Noogym',
      ].join('\n'),
      html: this.emailTemplate.render({
        button: { label: 'Abrir painel', url: panelUrl },
        details: [{ label: 'Organizacao', value: email.organizationName }],
        eyebrow: 'Conta criada',
        footerNote:
          'Recebeu esta mensagem porque criou uma conta no ecossistema Noogym.',
        greeting: `Ola, ${email.name}`,
        intro: [
          `A conta de ${email.organizationName} foi criada com sucesso no Noogym.`,
          'O seu painel ja esta pronto para configurar operacao, equipa, planos, clientes e pagamentos.',
        ],
        preheader: 'A sua conta Noogym foi criada com sucesso.',
        secondary:
          'Guarde este email como referencia inicial para voltar ao painel quando precisar.',
        title: 'Bem-vindo ao Noogym',
      }),
    });

    if (!result.sent && !result.queued) {
      this.logger.warn(
        `Welcome email was not accepted for delivery to ${email.to}.`,
      );
    }

    return result.sent || result.queued;
  }
}
