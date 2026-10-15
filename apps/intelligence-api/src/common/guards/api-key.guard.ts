import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.path === "/health") {
      return true;
    }

    const configuredKey = this.config.get<string>("INTELLIGENCE_API_KEY");
    const submissionKey = this.config.get<string>("INTELLIGENCE_SUBMISSION_API_KEY");
    const incomingKey = request.header("x-api-key");

    if (request.path === "/submissions/events" && incomingKey && incomingKey === submissionKey) {
      return true;
    }

    if (!configuredKey || incomingKey !== configuredKey) {
      throw new UnauthorizedException("API key invalida ou ausente.");
    }

    return true;
  }
}
