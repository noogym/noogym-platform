import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { IngestRawContentDto } from "./dto/ingest-raw-content.dto";
import { ContentService } from "./content.service";
import { PrismaService } from "../prisma/prisma.service";

@Controller("content")
export class ContentController {
  constructor(
    private readonly content: ContentService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  list(
    @Query("status") status?: string,
    @Query("type") type?: string,
    @Query("category") category?: string,
    @Query("province") province?: string,
    @Query("q") q?: string,
    @Query("duplicateStatus") duplicateStatus?: string,
  ) {
    return this.content.list({ status, type, category, province, q, duplicateStatus });
  }

  @Get("raw")
  raw() {
    return this.prisma.rawContent.findMany({
      include: { source: true, content: { include: { eventCandidate: true } } },
      orderBy: { fetchedAt: "desc" },
      take: 100,
    });
  }

  @Post("raw")
  ingest(@Body() dto: IngestRawContentDto) {
    return this.content.ingest(dto);
  }

  @Post("raw/:id/normalize")
  normalize(@Param("id") id: string) {
    return this.content.normalize(id);
  }

  @Post("raw/:id/process")
  processRaw(@Param("id") id: string) {
    return this.content.processRaw(id);
  }

  @Post(":id/classify")
  classify(@Param("id") id: string) {
    return this.content.classify(id);
  }

  @Post(":id/detect-duplicates")
  detectDuplicates(@Param("id") id: string) {
    return this.content.detectDuplicates(id);
  }

  @Post(":id/generate-draft")
  generateDraft(@Param("id") id: string) {
    return this.content.generateDraft(id);
  }
}
