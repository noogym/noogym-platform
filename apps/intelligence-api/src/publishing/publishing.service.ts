import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { mkdir, rename, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PublishingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async prepareBlog(contentId: string) {
    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
      include: { rawContent: { include: { source: true } } },
    });

    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }

    if (!["APPROVED", "DRAFT_GENERATED", "READY_TO_PUBLISH"].includes(content.editorialStatus)) {
      throw new BadRequestException("Conteudo precisa de aprovacao editorial antes de preparar publicacao.");
    }

    const payload = {
      title: content.title,
      summary: content.summary,
      slug: content.slug,
      category: content.category,
      contentType: content.contentType,
      sourceName: content.rawContent.source.name,
      sourceUrl: content.rawContent.canonicalUrl,
      draft: content.draft,
    };

    const publication = await this.prisma.publication.create({
      data: { contentId, target: "blog", payload, status: "READY_TO_PUBLISH" },
    });

    await this.prisma.content.update({ where: { id: contentId }, data: { editorialStatus: "READY_TO_PUBLISH" } });
    return publication;
  }

  async prepareEvent(eventCandidateId: string) {
    const event = await this.prisma.eventCandidate.findUnique({ where: { id: eventCandidateId } });

    if (!event) {
      throw new NotFoundException("Evento nao encontrado.");
    }

    if (!["APPROVED", "READY_TO_PUBLISH"].includes(event.editorialStatus)) {
      throw new BadRequestException("Evento precisa de aprovacao editorial antes de preparar publicacao.");
    }

    const publication = await this.prisma.publication.create({
      data: {
        eventCandidateId,
        target: "events",
        status: "READY_TO_PUBLISH",
        payload: {
          title: event.name,
          category: event.category,
          date: event.startDate,
          city: event.city,
          province: event.province,
          organizer: event.organizer,
          origin: event.origin,
          sourceUrl: event.sourceUrl,
          registrationUrl: event.registrationUrl,
        },
      },
    });

    await this.prisma.eventCandidate.update({ where: { id: eventCandidateId }, data: { editorialStatus: "READY_TO_PUBLISH" } });
    return publication;
  }

  async exportWebsiteData() {
    const publications = await this.prisma.publication.findMany({
      where: {
        target: { in: ["blog", "events"] },
        status: { in: ["READY_TO_PUBLISH", "SCHEDULED", "PUBLISHED"] },
      },
      include: {
        content: { include: { rawContent: { include: { source: true } } } },
        eventCandidate: true,
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    const articles = publications
      .filter((publication) => publication.target === "blog" && publication.content)
      .map((publication) => {
        const content = publication.content!;
        return {
          id: content.slug,
          title: content.title,
          category: this.websiteBlogCategory(content.category),
          contentType: content.contentType === "article" ? "editorial" : content.contentType === "news" ? "news" : "community",
          date: this.formatDate(content.publishedAt ?? content.scheduledFor ?? content.updatedAt),
          readTime: this.estimateReadTime(content.cleanText),
          image: "/assets/blog-reference.png",
          summary: content.summary ?? content.title,
          author: "Redacao Noogym",
          city: content.city,
          province: content.province,
          sourceName: content.rawContent.source.name,
          sourceUrl: content.rawContent.canonicalUrl ?? undefined,
          verificationStatus: this.websiteStatus(content.editorialStatus),
        };
      });

    const events = publications
      .filter((publication) => publication.target === "events" && publication.eventCandidate)
      .map((publication) => {
        const event = publication.eventCandidate!;
        return {
          id: event.id,
          title: event.name,
          category: this.websiteEventCategory(event.category),
          date: this.formatDate(event.startDate ?? event.createdAt),
          time: event.startTime ?? "A confirmar",
          location: event.location ?? event.venue ?? event.city ?? "A confirmar",
          city: event.city ?? "Angola",
          province: event.province ?? "Angola",
          origin: event.origin,
          organizer: event.organizer ?? "Organizador externo",
          status: this.websiteStatus(event.editorialStatus),
          price: event.price ?? undefined,
          registrationUrl: event.registrationUrl ?? undefined,
          sourceName: event.sourceUrl ? "Fonte externa" : "Submissao da comunidade",
          participants: 0,
          image: event.imageUrl ?? "/assets/events-reference.png",
          description: event.description ?? event.name,
        };
      });

    const exportDir = resolve(process.cwd(), this.config.get<string>("WEBSITE_DATA_EXPORT_DIR", "../website/src/data/generated"));
    const exportPath = resolve(exportDir, "intelligence-publications.json");
    const tempPath = `${exportPath}.tmp`;
    await mkdir(exportDir, { recursive: true });
    await writeFile(tempPath, `${JSON.stringify({ articles, events }, null, 2)}\n`, "utf8");
    await rename(tempPath, exportPath);

    return { exportPath, articles: articles.length, events: events.length };
  }

  private websiteBlogCategory(category?: string | null) {
    const normalized = (category ?? "").toLowerCase();
    if (normalized.includes("nutri")) return "Nutrição";
    if (normalized.includes("saude") || normalized.includes("saúde") || normalized.includes("wellness")) return "Saúde";
    if (normalized.includes("tecn")) return "Tecnologia";
    if (normalized.includes("corrida") || normalized.includes("bodybuilding") || normalized.includes("crossfit")) return "Atualidade";
    return "Atualidade";
  }

  private websiteEventCategory(category?: string | null) {
    const normalized = (category ?? "").toLowerCase();
    if (normalized.includes("corrida")) return "Corridas";
    if (normalized.includes("workshop")) return "Workshops";
    if (normalized.includes("bodybuilding")) return "Bodybuilding";
    if (normalized.includes("wellness")) return "Wellness";
    if (normalized.includes("compet")) return "Competições";
    return "Aulas especiais";
  }

  private websiteStatus(status: string) {
    if (status === "PUBLISHED") return "published";
    if (status === "APPROVED" || status === "READY_TO_PUBLISH" || status === "SCHEDULED") return "approved";
    if (status === "REJECTED") return "rejected";
    return "pending_review";
  }

  private estimateReadTime(text: string) {
    return `${Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 180))} min`;
  }

  private formatDate(value: Date) {
    return new Intl.DateTimeFormat("pt-AO", { day: "2-digit", month: "short", year: "numeric" }).format(value).replace(".", "");
  }
}
