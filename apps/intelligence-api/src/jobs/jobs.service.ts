import { Injectable } from "@nestjs/common";
import { ContentService } from "../content/content.service";
import { EventsService } from "../events/events.service";
import { IngestionService } from "../ingestion/ingestion.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class JobsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ingestion: IngestionService,
    private readonly content: ContentService,
    private readonly events: EventsService,
  ) {}

  list() {
    return this.prisma.crawlJob.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  }

  async crawlAllSources() {
    const sources = await this.prisma.source.findMany({ where: { enabled: true, scrapingAllowed: true } });
    const results = [];

    for (const source of sources) {
      try {
        const crawl = await this.ingestion.crawlSource(source.id);
        const processed = [];

        for (const raw of crawl.rawContents) {
          const result = await this.content.processRaw(raw.id);
          if (result.classified.contentType === "event" && result.deduped.duplicateStatus === "unique") {
            await this.events.detectFromContent(result.classified.id);
          }
          processed.push({ rawContentId: raw.id, contentId: result.classified.id, status: result.draft.editorialStatus });
        }

        results.push({ ...crawl, processed });
      } catch (error) {
        results.push({ sourceId: source.id, error: error instanceof Error ? error.message : "Erro desconhecido." });
      }
    }

    return { count: results.length, results };
  }
}
