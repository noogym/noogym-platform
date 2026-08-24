import { Module } from "@nestjs/common";
import { EmailTemplateService } from "./email-template.service";
import { MailService } from "./mail.service";

@Module({
  providers: [EmailTemplateService, MailService],
  exports: [MailService],
})
export class MailModule {}
