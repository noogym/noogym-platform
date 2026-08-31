import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { IngestRawContentDto } from "../content/dto/ingest-raw-content.dto";

type FetchedContent = {
  externalId: string;
  canonicalUrl: string;
  title: string;
  text: string;
  html: string;
  publishedAt?: string;
  acquisition: string;
};

@Injectable()
export class IngestionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async ingest(dto: IngestRawContentDto) {
    const source = await this.prisma.source.findUnique({ where: { id: dto.sourceId } });

    if (!source) {
      throw new NotFoundException("Fonte nao encontrada.");
    }

    const contentHash = this.hash(`${dto.title}\n${dto.rawText}`);

    return this.prisma.rawContent.upsert({
      where: { contentHash },
      create: {
        sourceId: dto.sourceId,
        externalId: dto.externalId,
        canonicalUrl: dto.canonicalUrl,
        title: dto.title,
        rawText: dto.rawText,
        rawHtml: dto.rawHtml,
        author: dto.author,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined,
        contentHash,
        metadata: dto.metadata,
        status: "ingested",
      },
      update: {
        fetchedAt: new Date(),
        status: "ingested",
      },
    });
  }

  async crawlSource(sourceId: string) {
    const source = await this.prisma.source.findUnique({ where: { id: sourceId } });

    if (!source) {
      throw new NotFoundException("Fonte nao encontrada.");
    }

    if (!source.enabled || !source.scrapingAllowed) {
      throw new BadRequestException("Fonte desativada ou sem permissao de coleta.");
    }

    await this.respectSourceDelay(sourceId, source.crawlDelayMs);

    const job = await this.prisma.crawlJob.create({
      data: {
        name: "crawlSource",
        sourceId,
        jobType: source.sourceType === "rss" ? "rss" : source.sourceType === "publicDirectory" ? "sitemap" : "crawl",
        status: "running",
        attempts: 1,
        startedAt: new Date(),
        logs: [`Coleta iniciada para ${source.url}.`, `Delay aplicado: ${source.crawlDelayMs}ms.`],
      },
    });

    try {
      const fetchedItems = await this.fetchSource(source);
      const rawContents = [];
      let skippedExisting = 0;

      for (const fetched of fetchedItems) {
        const nextHash = this.hash(`${fetched.title}\n${fetched.text}`);
        if (source.lastSeenHash && source.lastSeenHash === nextHash) {
          skippedExisting += 1;
          continue;
        }

        const raw = await this.ingest({
          sourceId,
          externalId: fetched.externalId,
          canonicalUrl: fetched.canonicalUrl,
          title: fetched.title,
          rawText: fetched.text,
          rawHtml: fetched.html,
          publishedAt: fetched.publishedAt,
          metadata: {
            acquisition: fetched.acquisition,
            sourceName: source.name,
            sourceType: source.sourceType,
          },
        });
        rawContents.push(raw);
      }

      await this.prisma.source.update({
        where: { id: sourceId },
        data: {
          lastCheckedAt: new Date(),
          lastSuccessfulCheckAt: new Date(),
          lastSeenHash: rawContents[0]?.contentHash ?? source.lastSeenHash,
          status: "active",
        },
      });

      await this.prisma.crawlJob.update({
        where: { id: job.id },
        data: {
          status: "completed",
          finishedAt: new Date(),
          discoveredCount: fetchedItems.length,
          processedCount: rawContents.length,
          logs: [
            "Coleta concluida.",
            `Descobertos: ${fetchedItems.length}.`,
            `Processados: ${rawContents.length}.`,
            `Ignorados por hash ja visto: ${skippedExisting}.`,
          ],
        },
      });

      return {
        jobId: job.id,
        sourceId,
        discoveredCount: fetchedItems.length,
        processedCount: rawContents.length,
        skippedExisting,
        rawContents,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro desconhecido.";
      await this.prisma.source.update({
        where: { id: sourceId },
        data: { lastCheckedAt: new Date(), status: "error" },
      });
      await this.prisma.crawlJob.update({
        where: { id: job.id },
        data: {
          status: "failed",
          finishedAt: new Date(),
          error: message,
          logs: ["Coleta falhou.", message],
        },
      });
      throw error;
    }
  }

  private async fetchSource(source: {
    url: string;
    sourceType: string;
    contentSelector?: string | null;
    titleSelector?: string | null;
  }): Promise<FetchedContent[]> {
    const { url } = source;

    if (url.startsWith("fixture://")) {
      const fixtureName = url.replace("fixture://", "");
      const path = join(process.cwd(), "fixtures", `${fixtureName}.html`);
      const html = await readFile(path, "utf8");

      return [{
        externalId: fixtureName,
        canonicalUrl: url,
        title: this.extractTitle(html, source.titleSelector) ?? fixtureName,
        text: this.extractSelectedHtml(html, source.contentSelector),
        html,
        acquisition: "fixture",
      }];
    }

    await this.checkRobotsPolicy(url);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.get<number>("CRAWLER_TIMEOUT_MS", 8000));
    let response: Response;
    try {
      response = await fetch(url, {
        headers: {
          "user-agent": this.config.get<string>("NOOGYM_INTELLIGENCE_USER_AGENT", "NoogymFitnessIntelligence/0.1"),
        },
        signal: controller.signal,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new BadRequestException("timeout: coleta excedeu o tempo configurado.");
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      throw new BadRequestException(`Coleta falhou com status ${response.status}.`);
    }

    const html = await response.text();
    const contentType = response.headers.get("content-type") ?? "";

    if (source.sourceType === "rss" || contentType.includes("xml") || /<rss|<feed/i.test(html)) {
      return this.parseFeed(url, html);
    }

    if (source.sourceType === "publicDirectory" || /<urlset/i.test(html)) {
      return this.parseSitemap(url, html);
    }

    const title = this.extractTitle(html, source.titleSelector) ?? url;
    const text = this.extractSelectedHtml(html, source.contentSelector);

    if (!text.trim()) {
      throw new BadRequestException("parse_failed: nenhum conteudo util encontrado.");
    }

    return [{
      externalId: url,
      canonicalUrl: url,
      title,
      text,
      html,
      acquisition: "public-html",
    }];
  }

  private async checkRobotsPolicy(url: string) {
    const parsed = new URL(url);
    const robotsUrl = `${parsed.origin}/robots.txt`;

    try {
      const response = await fetch(robotsUrl, {
        headers: {
          "user-agent": this.config.get<string>("NOOGYM_INTELLIGENCE_USER_AGENT", "NoogymFitnessIntelligence/0.1"),
        },
        signal: AbortSignal.timeout(3000),
      });

      if (!response.ok) {
        return;
      }

      const text = await response.text();
      if (/user-agent:\s*\*[\s\S]*?disallow:\s*\/\s*(\r?\n|$)/i.test(text)) {
        throw new BadRequestException("blocked_by_robots: robots.txt bloqueia coleta ampla desta origem.");
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
    }
  }

  private async respectSourceDelay(sourceId: string, configuredDelayMs?: number) {
    const lastJob = await this.prisma.crawlJob.findFirst({
      where: { sourceId, status: "completed", finishedAt: { not: null } },
      orderBy: { finishedAt: "desc" },
    });
    const delayMs = Math.max(0, configuredDelayMs ?? this.config.get<number>("CRAWLER_DELAY_MS", 1500));

    if (!lastJob?.finishedAt || delayMs === 0) {
      return;
    }

    const elapsed = Date.now() - lastJob.finishedAt.getTime();
    if (elapsed < delayMs) {
      await new Promise((resolve) => setTimeout(resolve, delayMs - elapsed));
    }
  }

  private parseFeed(url: string, xml: string) {
    const items = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)];
    const entries = items.length > 0 ? items.map((item) => item[0]) : [...xml.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)].map((entry) => entry[0]);

    return entries.slice(0, 20).map((entry, index) => {
      const title = this.stripTags(this.pickXmlValue(entry, "title") ?? `Item ${index + 1}`);
      const link = this.pickXmlValue(entry, "link") ?? this.pickAtomLink(entry) ?? url;
      const description = this.pickXmlValue(entry, "description") ?? this.pickXmlValue(entry, "summary") ?? this.pickXmlValue(entry, "content:encoded") ?? title;
      const publishedAt = this.pickXmlValue(entry, "pubDate") ?? this.pickXmlValue(entry, "published") ?? this.pickXmlValue(entry, "updated");

      return {
        externalId: this.pickXmlValue(entry, "guid") ?? link,
        canonicalUrl: link,
        title,
        text: this.stripTags(description),
        html: entry,
        publishedAt,
        acquisition: "rss",
      };
    });
  }

  private parseSitemap(url: string, xml: string) {
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/gi)].map((match) => this.decode(match[1].trim()));

    return urls.slice(0, 20).map((loc) => ({
      externalId: loc,
      canonicalUrl: loc,
      title: loc,
      text: loc,
      html: xml,
      acquisition: "sitemap",
    }));
  }

  private extractTitle(html: string, selector?: string | null) {
    const selected = this.extractBySimpleSelector(html, selector);
    return this.stripTags(selected ?? html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "").trim() || undefined;
  }

  private extractSelectedHtml(html: string, selector?: string | null) {
    return this.extractBySimpleSelector(html, selector) ?? html;
  }

  private extractBySimpleSelector(html: string, selector?: string | null) {
    if (!selector) {
      return undefined;
    }

    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const id = selector.startsWith("#") ? selector.slice(1) : undefined;
    const className = selector.startsWith(".") ? selector.slice(1) : undefined;
    const tag = !selector.startsWith("#") && !selector.startsWith(".") ? escaped : "[a-z0-9]+";
    const attr = id ? `[^>]*id=["']${id}["'][^>]*` : className ? `[^>]*class=["'][^"']*${className}[^"']*["'][^>]*` : "[^>]*";
    const regex = new RegExp(`<(${tag})\\b${attr}>([\\s\\S]*?)<\\/\\1>`, "i");
    return html.match(regex)?.[2];
  }

  private pickXmlValue(xml: string, tag: string) {
    return this.decode(xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1]?.trim() ?? "");
  }

  private pickAtomLink(xml: string) {
    return this.decode(xml.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i)?.[1] ?? "");
  }

  private stripTags(value: string) {
    return this.decode(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  }

  private decode(value: string) {
    return value
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  }

  private hash(value: string) {
    return createHash("sha256").update(value).digest("hex");
  }
}
