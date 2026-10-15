import { BadRequestException, Injectable } from "@nestjs/common";
import { AccessStatus, GymStatus, NoogymAccessScope, Prisma, UserRole, UserStatus } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { ListAdminResourcesQueryDto } from "./dto/list-admin-resources-query.dto";
import { UpsertAdminUserDto } from "./dto/upsert-admin-user.dto";
import { hashPassword } from "../auth/auth.service";

const adminUserSelect = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  status: true,
  avatarUrl: true,
  createdAt: true,
  updatedAt: true,
  accesses: {
    where: {
      scope: NoogymAccessScope.ADMIN_PANEL,
    },
    select: {
      scope: true,
      status: true,
      requestedAt: true,
      approvedAt: true,
    },
  },
} satisfies Prisma.UserSelect;

const accountSelect = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  status: true,
  avatarUrl: true,
  emailVerifiedAt: true,
  createdAt: true,
  updatedAt: true,
  accesses: {
    select: {
      scope: true,
      status: true,
      requestedAt: true,
      approvedAt: true,
      revokedAt: true,
    },
    orderBy: {
      scope: "asc",
    },
  },
  gymMemberships: {
    select: {
      role: true,
      status: true,
      gym: {
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
        },
      },
    },
    take: 5,
  },
  _count: {
    select: {
      checkIns: true,
      orders: true,
      ownedGyms: true,
      subscriptions: true,
    },
  },
} satisfies Prisma.UserSelect;

const gymSelect = {
  id: true,
  ownerId: true,
  slug: true,
  name: true,
  shortDescription: true,
  phone: true,
  email: true,
  website: true,
  address: true,
  neighborhood: true,
  city: true,
  province: true,
  country: true,
  latitude: true,
  longitude: true,
  basePrice: true,
  ratingAvg: true,
  reviewCount: true,
  coverImage: true,
  status: true,
  publishedAt: true,
  createdAt: true,
  updatedAt: true,
  owner: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  _count: {
    select: {
      checkIns: true,
      classes: true,
      discoveredPlaces: true,
      images: true,
      plans: true,
      reviews: true,
      staffMemberships: true,
    },
  },
} satisfies Prisma.GymSelect;

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async listAdminUsers() {
    const users = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            role: UserRole.ADMIN,
          },
          {
            accesses: {
              some: {
                scope: NoogymAccessScope.ADMIN_PANEL,
              },
            },
          },
        ],
      },
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
      select: adminUserSelect,
    });

    return {
      items: users.map(toAdminUser),
      meta: {
        count: users.length,
      },
    };
  }

  async listAccounts(query: ListAdminResourcesQueryDto) {
    const where: Prisma.UserWhereInput = {};
    const and: Prisma.UserWhereInput[] = [];
    const search = query.search?.trim();
    const role = normalizeEnum(query.role, UserRole);
    const status = normalizeEnum(query.status, UserStatus);

    if (search) {
      and.push({
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { phone: { contains: search, mode: "insensitive" } },
        ],
      });
    }

    if (role) {
      and.push({ role });
    }

    if (status) {
      and.push({ status });
    }

    if (and.length) {
      where.AND = and;
    }

    const users = await this.prisma.user.findMany({
      where,
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      take: query.limit,
      select: accountSelect,
    });

    return {
      items: users.map(toAccount),
      meta: {
        count: users.length,
        limit: query.limit,
      },
    };
  }

  async listGyms(query: ListAdminResourcesQueryDto) {
    const where: Prisma.GymWhereInput = {};
    const and: Prisma.GymWhereInput[] = [];
    const search = query.search?.trim();
    const status = normalizeEnum(query.status, GymStatus);
    const city = query.city?.trim();

    if (search) {
      and.push({
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { slug: { contains: search, mode: "insensitive" } },
          { address: { contains: search, mode: "insensitive" } },
          { neighborhood: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { phone: { contains: search, mode: "insensitive" } },
        ],
      });
    }

    if (status) {
      and.push({ status });
    }

    if (city) {
      and.push({ city: { contains: city, mode: "insensitive" } });
    }

    if (and.length) {
      where.AND = and;
    }

    const gyms = await this.prisma.gym.findMany({
      where,
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      take: query.limit,
      select: gymSelect,
    });

    return {
      items: gyms.map(toAdminGym),
      meta: {
        count: gyms.length,
        limit: query.limit,
      },
    };
  }

  async upsertAdminUser(dto: UpsertAdminUserDto) {
    const email = dto.email.trim().toLowerCase();
    const existing = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
      },
    });

    if (!existing && !dto.password) {
      throw new BadRequestException("Informe uma senha inicial para criar o usuario admin.");
    }

    const now = new Date();
    const passwordHash = dto.password ? await hashPassword(dto.password) : undefined;

    const user = existing
      ? await this.prisma.user.update({
          where: { id: existing.id },
          data: {
            name: dto.name,
            email,
            phone: dto.phone ?? null,
            role: UserRole.ADMIN,
            status: UserStatus.ACTIVE,
            passwordHash,
            accesses: {
              upsert: {
                where: {
                  userId_scope: {
                    userId: existing.id,
                    scope: NoogymAccessScope.ADMIN_PANEL,
                  },
                },
                create: {
                  scope: NoogymAccessScope.ADMIN_PANEL,
                  status: AccessStatus.ACTIVE,
                  requestedAt: now,
                  approvedAt: now,
                  metadata: {
                    source: "admin-user-management",
                  },
                },
                update: {
                  status: AccessStatus.ACTIVE,
                  revokedAt: null,
                  approvedAt: now,
                  metadata: {
                    source: "admin-user-management",
                  },
                },
              },
            },
          },
          select: adminUserSelect,
        })
      : await this.prisma.user.create({
          data: {
            name: dto.name,
            email,
            phone: dto.phone ?? null,
            passwordHash,
            role: UserRole.ADMIN,
            status: UserStatus.ACTIVE,
            accesses: {
              create: [
                {
                  scope: NoogymAccessScope.SITE,
                  status: AccessStatus.ACTIVE,
                  requestedAt: now,
                  approvedAt: now,
                },
                {
                  scope: NoogymAccessScope.ADMIN_PANEL,
                  status: AccessStatus.ACTIVE,
                  requestedAt: now,
                  approvedAt: now,
                  metadata: {
                    source: "admin-user-management",
                  },
                },
              ],
            },
          },
          select: adminUserSelect,
        });

    return {
      item: toAdminUser(user),
      meta: {
        action: existing ? "promoted_admin" : "created_admin",
      },
    };
  }
}

function toAdminUser(user: Prisma.UserGetPayload<{ select: typeof adminUserSelect }>) {
  const adminAccess = user.accesses.find((access) => access.scope === NoogymAccessScope.ADMIN_PANEL);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    status: user.status,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    adminAccess: adminAccess
      ? {
          scope: adminAccess.scope,
          status: adminAccess.status,
          requestedAt: adminAccess.requestedAt,
          approvedAt: adminAccess.approvedAt,
        }
      : null,
  };
}

function toAccount(user: Prisma.UserGetPayload<{ select: typeof accountSelect }>) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    status: user.status,
    avatarUrl: user.avatarUrl,
    emailVerifiedAt: user.emailVerifiedAt,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    accesses: user.accesses,
    gymMemberships: user.gymMemberships,
    counts: user._count,
  };
}

function toAdminGym(gym: Prisma.GymGetPayload<{ select: typeof gymSelect }>) {
  return {
    id: gym.id,
    ownerId: gym.ownerId,
    slug: gym.slug,
    name: gym.name,
    shortDescription: gym.shortDescription,
    phone: gym.phone,
    email: gym.email,
    website: gym.website,
    address: gym.address,
    neighborhood: gym.neighborhood,
    city: gym.city,
    province: gym.province,
    country: gym.country,
    latitude: gym.latitude === null ? null : Number(gym.latitude),
    longitude: gym.longitude === null ? null : Number(gym.longitude),
    basePrice: gym.basePrice,
    ratingAvg: gym.ratingAvg,
    reviewCount: gym.reviewCount,
    coverImage: gym.coverImage,
    status: gym.status,
    publishedAt: gym.publishedAt,
    createdAt: gym.createdAt,
    updatedAt: gym.updatedAt,
    owner: gym.owner,
    counts: gym._count,
  };
}

function normalizeEnum<T extends Record<string, string>>(value: string | undefined, enumLike: T): T[keyof T] | undefined {
  if (!value || value === "Todos" || value === "ALL") {
    return undefined;
  }

  const normalized = value.trim().toUpperCase();
  const allowed = Object.values(enumLike);
  return allowed.includes(normalized) ? (normalized as T[keyof T]) : undefined;
}
