import { Injectable } from "@nestjs/common";
import { Prisma } from "../generated/prisma";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  log(input: { action: string; entityType: string; entityId?: string; actorId?: string; actorName?: string; metadata?: Prisma.InputJsonValue }) {
    return this.prisma.auditLog.create({ data: input });
  }

  list() {
    return this.prisma.auditLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });
  }
}
