import { Module } from "@nestjs/common";
import { MailModule } from "../mail/mail.module";
import { PrismaModule } from "../prisma/prisma.module";
import { TurnstileService } from "../leads/turnstile.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [PrismaModule, MailModule],
  controllers: [AuthController],
  providers: [AuthService, TurnstileService],
  exports: [AuthService],
})
export class AuthModule {}
