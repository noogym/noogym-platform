import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

type TurnstileVerificationResponse = {
  success: boolean;
  "error-codes"?: string[];
};

@Injectable()
export class TurnstileService {
  private readonly logger = new Logger(TurnstileService.name);

  constructor(private readonly configService: ConfigService) {}

  async verify(token: string, ipAddress: string | null) {
    const secretKey = this.configService.get<string>("TURNSTILE_SECRET_KEY");

    if (!secretKey) {
      this.logger.error("TURNSTILE_SECRET_KEY is not configured.");
      throw new ServiceUnavailableException(
        "Verificação de segurança indisponível. Tente novamente em instantes.",
      );
    }

    const body = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    if (ipAddress) {
      body.set("remoteip", ipAddress);
    }

    let verification: TurnstileVerificationResponse;

    try {
      const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        },
      );

      verification = (await response.json()) as TurnstileVerificationResponse;
    } catch (error) {
      this.logger.error("Turnstile verification request failed.", error);
      throw new ServiceUnavailableException(
        "Verificação de segurança indisponível. Tente novamente em instantes.",
      );
    }

    if (!verification.success) {
      this.logger.warn(
        `Turnstile verification failed: ${
          verification["error-codes"]?.join(", ") ?? "unknown-error"
        }`,
      );
      throw new BadRequestException(
        "Não foi possível validar a verificação de segurança. Tente novamente.",
      );
    }
  }
}
