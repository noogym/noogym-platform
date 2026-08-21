import { Module } from "@nestjs/common";
import { ApiKeyGuard } from "../common/guards/api-key.guard";
import { MailModule } from "../mail/mail.module";
import { LeadsController } from "./leads.controller";
import { LeadsService } from "./leads.service";
import { TurnstileService } from "./turnstile.service";

@Module({
  imports: [MailModule],
  controllers: [LeadsController],
  providers: [LeadsService, ApiKeyGuard, TurnstileService],
})
export class LeadsModule {}
