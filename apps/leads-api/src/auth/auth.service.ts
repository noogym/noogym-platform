import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AccessStatus, NoogymAccessScope, Prisma, UserRole, UserStatus } from "@prisma/client";
import { createHash, createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { PrismaService } from "../prisma/prisma.service";
import { TurnstileService } from "../leads/turnstile.service";
import { MailService } from "../mail/mail.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { GymLinkRequestDto } from "./dto/gym-link-request.dto";
import { LoginDto } from "./dto/login.dto";
import { OnboardingRequestDto } from "./dto/onboarding-request.dto";
import { RegisterDto } from "./dto/register.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

const scrypt = promisify(scryptCallback);
const sessionDurationSeconds = 60 * 60 * 24 * 7;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly turnstileService: TurnstileService,
    private readonly mailService: MailService,
  ) {}

  async register(dto: RegisterDto, metadata: { ipAddress: string | null; userAgent: string | null }) {
    await this.verifyTurnstile(dto.turnstileToken, metadata.ipAddress);

    const passwordHash = await hashPassword(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          phone: dto.phone ?? null,
          passwordHash,
          accesses: {
            create: [
              { scope: NoogymAccessScope.SITE },
              { scope: NoogymAccessScope.MOBILE_APP },
            ],
          },
        },
        select: userSelect,
      });

      return this.buildSession(user);
    } catch (error) {
      if (isUniqueConstraintError(error, "email")) {
        throw new ConflictException("Ja existe uma conta Noogym com este e-mail.");
      }

      throw error;
    }
  }

  async login(dto: LoginDto, metadata: { ipAddress: string | null; userAgent: string | null }) {
    await this.verifyTurnstile(dto.turnstileToken, metadata.ipAddress);

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: {
        ...userSelect,
        passwordHash: true,
      },
    });

    if (!user?.passwordHash || !(await verifyPassword(dto.password, user.passwordHash))) {
      throw new UnauthorizedException("E-mail ou senha invalidos.");
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new ForbiddenException("Esta conta nao esta ativa.");
    }

    const { passwordHash: _passwordHash, ...safeUser } = user;

    return this.buildSession(safeUser);
  }

  async me(token: string | null) {
    const session = this.verifySessionToken(token);
    const user = await this.prisma.user.findUnique({
      where: { id: session.sub },
      select: userSelect,
    });

    if (!user || user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException("Sessao invalida ou expirada.");
    }

    return { user };
  }

  getSessionUserId(token: string | null) {
    if (!token) {
      return null;
    }

    return this.verifySessionToken(token).sub;
  }

  async assertAdminAccess(token: string | null) {
    const session = this.verifySessionToken(token);
    const user = await this.prisma.user.findUnique({
      where: { id: session.sub },
      select: {
        id: true,
        role: true,
        status: true,
        accesses: {
          where: {
            scope: NoogymAccessScope.ADMIN_PANEL,
          },
          select: {
            scope: true,
            status: true,
          },
        },
      },
    });

    const hasAdminPanelAccess = user?.accesses.some(
      (access) => access.scope === NoogymAccessScope.ADMIN_PANEL && access.status === AccessStatus.ACTIVE,
    );

    if (!user || user.status !== UserStatus.ACTIVE || (user.role !== UserRole.ADMIN && !hasAdminPanelAccess)) {
      throw new ForbiddenException("Sem permissao para aceder a gestao Noogym.");
    }

    return {
      id: user.id,
      role: user.role,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto, metadata: { ipAddress: string | null; userAgent: string | null }) {
    await this.verifyTurnstile(dto.turnstileToken, metadata.ipAddress);

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });
    const rawToken = randomBytes(32).toString("base64url");
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user?.id ?? null,
        email: dto.email,
        tokenHash: hashToken(rawToken),
        expiresAt,
      },
    });

    void this.mailService.sendPasswordResetEmail(dto.email, rawToken, expiresAt);

    return {
      success: true,
      message: "Se existir uma conta com este e-mail, enviaremos um link de recuperacao.",
      resetToken: process.env.NODE_ENV === "production" ? undefined : rawToken,
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const tokenHash = hashToken(dto.token);
    const resetToken = await this.prisma.passwordResetToken.findUnique({
      where: { tokenHash },
      include: { user: true },
    });

    if (!resetToken || resetToken.usedAt || resetToken.expiresAt <= new Date()) {
      throw new UnauthorizedException("Link de recuperacao invalido ou expirado.");
    }

    if (!resetToken.user) {
      throw new NotFoundException("Conta nao encontrada para este pedido de recuperacao.");
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: resetToken.user.id },
        data: {
          passwordHash: await hashPassword(dto.password),
          status: UserStatus.ACTIVE,
        },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { usedAt: new Date() },
      }),
    ]);

    return {
      success: true,
      message: "Senha atualizada com sucesso. Ja pode iniciar sessao.",
    };
  }

  async createOnboardingRequest(dto: OnboardingRequestDto, token: string | null) {
    const session = token ? this.verifySessionToken(token) : null;
    const user = await this.findOrCreateRequestUser({
      authenticatedUserId: session?.sub,
      email: dto.email,
      name: dto.name,
      phone: dto.phone,
    });
    const scope = accessScopeByOnboardingKind[dto.kind];
    const now = new Date();

    const access = await this.prisma.userAccess.upsert({
      where: {
        userId_scope: {
          userId: user.id,
          scope,
        },
      },
      update: {
        status: AccessStatus.PENDING,
        requestedAt: now,
        revokedAt: null,
        metadata: buildOnboardingMetadata(dto),
      },
      create: {
        userId: user.id,
        scope,
        status: AccessStatus.PENDING,
        requestedAt: now,
        metadata: buildOnboardingMetadata(dto),
      },
    });

    return {
      success: true,
      requestId: access.id,
      status: access.status,
      scope: access.scope,
      message: "Solicitacao recebida. A equipa Noogym vai validar os dados enviados.",
    };
  }

  async createGymLinkRequest(dto: GymLinkRequestDto, token: string | null) {
    const session = token ? this.verifySessionToken(token) : null;

    if (!session && !dto.email) {
      throw new UnauthorizedException("Inicie sessao ou informe um e-mail para solicitar o vinculo.");
    }

    const user = await this.findOrCreateRequestUser({
      authenticatedUserId: session?.sub,
      email: dto.email ?? (dto.method === "email" ? dto.identifier : undefined),
      name: dto.name ?? "Utilizador Noogym",
    });
    const now = new Date();

    const access = await this.prisma.userAccess.upsert({
      where: {
        userId_scope: {
          userId: user.id,
          scope: NoogymAccessScope.GYM_ERP,
        },
      },
      update: {
        status: AccessStatus.PENDING,
        requestedAt: now,
        revokedAt: null,
        metadata: {
          type: "gym-link-request",
          method: dto.method,
          identifier: dto.identifier,
        },
      },
      create: {
        userId: user.id,
        scope: NoogymAccessScope.GYM_ERP,
        status: AccessStatus.PENDING,
        requestedAt: now,
        metadata: {
          type: "gym-link-request",
          method: dto.method,
          identifier: dto.identifier,
        },
      },
    });

    return {
      success: true,
      requestId: access.id,
      status: access.status,
      scope: access.scope,
      message: "Solicitacao de vinculo recebida. O ginasio ou a equipa Noogym vai confirmar os dados.",
    };
  }

  private async verifyTurnstile(token: string | undefined, ipAddress: string | null) {
    const required = this.configService.get<boolean>("AUTH_TURNSTILE_REQUIRED", false);

    if (!token) {
      if (required) {
        throw new ServiceUnavailableException("Confirme a verificacao de seguranca para continuar.");
      }

      return;
    }

    await this.turnstileService.verify(token, ipAddress);
  }

  private signSessionToken(payload: Record<string, unknown>) {
    const issuedAt = Math.floor(Date.now() / 1000);
    const body = {
      ...payload,
      iat: issuedAt,
      exp: issuedAt + sessionDurationSeconds,
    };
    const encodedHeader = encodeBase64Url({ alg: "HS256", typ: "JWT" });
    const encodedBody = encodeBase64Url(body);
    const signature = createHmac("sha256", this.getTokenSecret())
      .update(`${encodedHeader}.${encodedBody}`)
      .digest("base64url");

    return `${encodedHeader}.${encodedBody}.${signature}`;
  }

  private getTokenSecret() {
    return (
      this.configService.get<string>("AUTH_TOKEN_SECRET") ??
      this.configService.get<string>("ADMIN_API_KEY") ??
      "noogym-dev-token-secret"
    );
  }

  private buildSession(user: SelectedUser) {
    const token = this.signSessionToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      accesses: user.accesses.map((access) => access.scope),
    });

    return {
      token,
      tokenType: "Bearer",
      expiresIn: sessionDurationSeconds,
      user,
    };
  }

  private verifySessionToken(token: string | null): SessionPayload {
    if (!token) {
      throw new UnauthorizedException("Sessao nao informada.");
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new UnauthorizedException("Sessao invalida.");
    }

    const [encodedHeader, encodedBody, signature] = parts;
    const expectedSignature = createHmac("sha256", this.getTokenSecret())
      .update(`${encodedHeader}.${encodedBody}`)
      .digest("base64url");
    const signatureBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expectedSignature);

    if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
      throw new UnauthorizedException("Sessao invalida.");
    }

    const payload = JSON.parse(Buffer.from(encodedBody, "base64url").toString("utf8")) as Partial<SessionPayload>;

    if (!payload.sub || !payload.email || !payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
      throw new UnauthorizedException("Sessao invalida ou expirada.");
    }

    return payload as SessionPayload;
  }

  private async findOrCreateRequestUser(input: {
    authenticatedUserId?: string;
    email?: string;
    name: string;
    phone?: string;
  }) {
    if (input.authenticatedUserId) {
      const user = await this.prisma.user.findUnique({
        where: { id: input.authenticatedUserId },
      });

      if (!user) {
        throw new UnauthorizedException("Sessao invalida.");
      }

      return user;
    }

    if (!input.email) {
      throw new UnauthorizedException("Informe um e-mail para associar a solicitacao.");
    }

    return this.prisma.user.upsert({
      where: { email: input.email },
      update: {
        name: input.name,
        phone: input.phone ?? undefined,
      },
      create: {
        name: input.name,
        email: input.email,
        phone: input.phone ?? null,
        status: UserStatus.INVITED,
        accesses: {
          create: [
            { scope: NoogymAccessScope.SITE, status: AccessStatus.PENDING },
          ],
        },
      },
    });
  }
}

const userSelect = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  status: true,
  avatarUrl: true,
  createdAt: true,
  accesses: {
    select: {
      scope: true,
      status: true,
    },
  },
} satisfies Prisma.UserSelect;

type SelectedUser = Prisma.UserGetPayload<{ select: typeof userSelect }>;

type SessionPayload = {
  sub: string;
  email: string;
  role: string;
  accesses: string[];
  iat: number;
  exp: number;
};

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;

  return `scrypt:${salt}:${derivedKey.toString("base64url")}`;
}

export async function verifyPassword(password: string, passwordHash: string) {
  const [algorithm, salt, storedKey] = passwordHash.split(":");

  if (algorithm !== "scrypt" || !salt || !storedKey) {
    return false;
  }

  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  const storedBuffer = Buffer.from(storedKey, "base64url");

  return storedBuffer.length === derivedKey.length && timingSafeEqual(storedBuffer, derivedKey);
}

function encodeBase64Url(value: Record<string, unknown>) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("base64url");
}

const accessScopeByOnboardingKind = {
  personal: NoogymAccessScope.PERSONAL_PANEL,
  academia: NoogymAccessScope.GYM_ERP,
  vendedor: NoogymAccessScope.MARKET_SELLER,
} satisfies Record<OnboardingRequestDto["kind"], NoogymAccessScope>;

function buildOnboardingMetadata(dto: OnboardingRequestDto) {
  return {
    type: "onboarding-request",
    kind: dto.kind,
    business: dto.business ?? null,
    city: dto.city ?? null,
    credential: dto.credential ?? null,
    selectedOption: dto.selectedOption ?? null,
  };
}

function isUniqueConstraintError(error: unknown, field: string) {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002" &&
    Array.isArray(error.meta?.target) &&
    error.meta.target.includes(field)
  );
}
