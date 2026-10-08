import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const configuredKey = this.config.get<string>("ADMIN_API_KEY");
    const incomingKey = request.header("x-api-key");

    if (!configuredKey || incomingKey !== configuredKey) {
      throw new UnauthorizedException("API key inválida ou ausente.");
    }

    return true;
  }
}
