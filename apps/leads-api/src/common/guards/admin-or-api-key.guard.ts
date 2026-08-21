import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class AdminOrApiKeyGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const configuredKey = this.config.get<string>("ADMIN_API_KEY");
    const incomingKey = request.header("x-api-key");

    if (configuredKey && incomingKey === configuredKey) {
      return true;
    }

    const token = getBearerToken(request);
    await this.authService.assertAdminAccess(token);
    return true;
  }
}

function getBearerToken(request: Request) {
  const authorization = request.header("authorization");
  const [scheme, token] = authorization?.split(" ") ?? [];

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    throw new UnauthorizedException("Sessao admin nao informada.");
  }

  return token;
}
