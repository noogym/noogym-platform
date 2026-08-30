import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSourceDto } from "./dto/create-source.dto";

@Injectable()
export class SourcesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.source.findMany({
      orderBy: [{ enabled: "desc" }, { updatedAt: "desc" }],
    });
  }

  create(dto: CreateSourceDto) {
    return this.prisma.source.create({
      data: {
        name: dto.name,
        url: dto.url,
        sourceType: dto.sourceType,
        country: dto.country ?? "Angola",
        province: dto.province,
        city: dto.city,
        trustScore: dto.trustScore ?? 50,
        enabled: dto.enabled ?? true,
        scrapingAllowed: dto.scrapingAllowed ?? true,
        requiresReview: dto.requiresReview ?? true,
        updateFrequency: dto.updateFrequency ?? "daily",
        crawlDelayMs: dto.crawlDelayMs ?? 1500,
        contentSelector: dto.contentSelector,
        titleSelector: dto.titleSelector,
        robotsPolicy: dto.robotsPolicy,
        notes: dto.notes,
      },
    });
  }

  async setEnabled(id: string, enabled: boolean) {
    await this.ensureExists(id);
    return this.prisma.source.update({ where: { id }, data: { enabled } });
  }

  async ensureExists(id: string) {
    const source = await this.prisma.source.findUnique({ where: { id } });
    if (!source) {
      throw new NotFoundException("Fonte nao encontrada.");
    }
    return source;
  }
}
