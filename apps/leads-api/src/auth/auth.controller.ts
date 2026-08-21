import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Throttle } from "@nestjs/throttler";
import type { Request } from "express";
import { AuthService } from "./auth.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { GymLinkRequestDto } from "./dto/gym-link-request.dto";
import { LoginDto } from "./dto/login.dto";
import { OnboardingRequestDto } from "./dto/onboarding-request.dto";
import { RegisterDto } from "./dto/register.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @Throttle({ default: { limit: 8, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Conta criada com sucesso." })
  register(@Body() dto: RegisterDto, @Req() request: Request) {
    return this.authService.register(dto, {
      ipAddress: getIpAddress(request),
      userAgent: request.header("user-agent") ?? null,
    });
  }

  @Post("login")
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @ApiOkResponse({ description: "Sessao iniciada com sucesso." })
  login(@Body() dto: LoginDto, @Req() request: Request) {
    return this.authService.login(dto, {
      ipAddress: getIpAddress(request),
      userAgent: request.header("user-agent") ?? null,
    });
  }

  @Get("me")
  @ApiOkResponse({ description: "Dados do utilizador autenticado." })
  me(@Req() request: Request) {
    return this.authService.me(getBearerToken(request));
  }

  @Post("forgot-password")
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiOkResponse({ description: "Pedido de recuperacao recebido." })
  forgotPassword(@Body() dto: ForgotPasswordDto, @Req() request: Request) {
    return this.authService.forgotPassword(dto, {
      ipAddress: getIpAddress(request),
      userAgent: request.header("user-agent") ?? null,
    });
  }

  @Post("reset-password")
  @Throttle({ default: { limit: 6, ttl: 60_000 } })
  @ApiOkResponse({ description: "Senha atualizada com sucesso." })
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post("onboarding-request")
  @Throttle({ default: { limit: 8, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Solicitacao de acesso recebida." })
  onboardingRequest(@Body() dto: OnboardingRequestDto, @Req() request: Request) {
    return this.authService.createOnboardingRequest(dto, getBearerToken(request));
  }

  @Post("gym-link-request")
  @Throttle({ default: { limit: 8, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Solicitacao de vinculo recebida." })
  gymLinkRequest(@Body() dto: GymLinkRequestDto, @Req() request: Request) {
    return this.authService.createGymLinkRequest(dto, getBearerToken(request));
  }
}

function getIpAddress(request: Request) {
  const forwardedFor = request.header("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }

  return request.ip ?? null;
}

function getBearerToken(request: Request) {
  const authorization = request.header("authorization");
  const [scheme, token] = authorization?.split(" ") ?? [];

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    return null;
  }

  return token;
}
