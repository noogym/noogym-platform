import { Injectable, NotFoundException } from "@nestjs/common";
import { ClassificationService } from "../classification/classification.service";
import { DeduplicationService } from "../deduplication/deduplication.service";
import { EntityExtractionService } from "../entities/entity-extraction.service";
import { IngestRawContentDto } from "./dto/ingest-raw-content.dto";
import { IngestionService } from "../ingestion/ingestion.service";
import { NormalizationService } from "../ingestion/normalization.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ContentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ingestion: IngestionService,
    private readonly normalization: NormalizationService,
    private readonly classification: ClassificationService,
    private readonly entityExtraction: EntityExtractionService,
    private readonly deduplication: DeduplicationService,
  ) {}

  list(query: { status?: string; type?: string; category?: string; province?: string; q?: string; duplicateStatus?: string }) {
    return this.prisma.content.findMany({
      where: {
        editorialStatus: query.status as never,
        contentType: query.type as never,
        category: query.category,
        province: query.province,
        duplicateStatus: query.duplicateStatus as never,
        OR: query.q
          ? [
              { title: { contains: query.q, mode: "insensitive" } },
              { summary: { contains: query.q, mode: "insensitive" } },
              { cleanText: { contains: query.q, mode: "insensitive" } },
            ]
          : undefined,
      },
      include: {
        rawContent: { include: { source: true } },
        entities: { include: { entity: true } },
        eventCandidate: true,
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  ingest(dto: IngestRawContentDto) {
    return this.ingestion.ingest(dto);
  }

  async normalize(rawContentId: string) {
    const raw = await this.prisma.rawContent.findUnique({
      where: { id: rawContentId },
      include: { source: true },
    });

    if (!raw) {
      throw new NotFoundException("RawContent nao encontrado.");
    }

    const normalized = this.normalization.normalize(raw);
    const content = await this.prisma.content.upsert({
      where: { rawContentId },
      create: {
        rawContentId,
        title: normalized.title,
        slug: normalized.slug,
        cleanText: normalized.cleanText,
        summary: normalized.summary,
        country: raw.source.country,
        province: raw.source.province,
        city: raw.source.city,
        trustScore: raw.source.trustScore,
        editorialStatus: "NORMALIZED",
      },
      update: {
        title: normalized.title,
        slug: normalized.slug,
        cleanText: normalized.cleanText,
        summary: normalized.summary,
        editorialStatus: "NORMALIZED",
      },
    });

    await this.prisma.rawContent.update({ where: { id: rawContentId }, data: { status: "normalized" } });
    return content;
  }

  async classify(contentId: string) {
    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
      include: { rawContent: { include: { source: true } } },
    });

    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }

    const result = this.classification.classify({
      title: content.title,
      text: content.cleanText,
      sourceTrustScore: content.rawContent.source.trustScore,
    });
    const entities = this.entityExtraction.extract(`${content.title}\n${content.cleanText}`);

    const updated = await this.prisma.content.update({
      where: { id: contentId },
      data: {
        contentType: result.contentType,
        category: result.category,
        country: result.country,
        province: result.province ?? content.province,
        city: result.city ?? content.city,
        confidence: result.confidence,
        fitnessScore: result.fitnessScore,
        angolaScore: result.angolaScore,
        relevanceScore: result.relevanceScore,
        trustScore: content.rawContent.source.trustScore,
        scoreExplanation: result.explanation,
        editorialStatus: "CLASSIFIED",
      },
    });

    for (const entity of entities) {
      const stored = await this.prisma.entity.upsert({
        where: { name_entityType_country: { name: entity.name, entityType: entity.entityType, country: "Angola" } },
        create: { name: entity.name, entityType: entity.entityType, country: "Angola", province: updated.province, city: updated.city },
        update: {},
      });

      await this.prisma.contentEntity.upsert({
        where: { contentId_entityId: { contentId, entityId: stored.id } },
        create: { contentId, entityId: stored.id, confidence: entity.confidence, role: entity.role },
        update: { confidence: entity.confidence, role: entity.role },
      });
    }

    return updated;
  }

  async detectDuplicates(contentId: string) {
    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
      include: { rawContent: true },
    });

    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }

    const candidates = await this.prisma.content.findMany({
      where: { id: { not: contentId } },
      include: { rawContent: true },
      take: 100,
    });
    const best = candidates
      .map((candidate) => ({
        candidate,
        result: this.deduplication.compare(
          {
            id: content.id,
            title: content.title,
            city: content.city,
            province: content.province,
            contentHash: content.rawContent.contentHash,
            canonicalUrl: content.rawContent.canonicalUrl,
            externalId: content.rawContent.externalId,
          },
          {
            id: candidate.id,
            title: candidate.title,
            city: candidate.city,
            province: candidate.province,
            contentHash: candidate.rawContent.contentHash,
            canonicalUrl: candidate.rawContent.canonicalUrl,
            externalId: candidate.rawContent.externalId,
          },
        ),
      }))
      .sort((a, b) => b.result.confidence - a.result.confidence)[0];

    const duplicateStatus = best?.result.status ?? "unique";
    return this.prisma.content.update({
      where: { id: contentId },
      data: {
        duplicateStatus,
        duplicateOfId: duplicateStatus === "unique" ? null : best?.candidate.id,
        duplicateReason: best?.result.reason,
        editorialStatus: duplicateStatus === "unique" ? "REVIEW_REQUIRED" : "DUPLICATE",
      },
    });
  }

  async processRaw(rawContentId: string) {
    const normalized = await this.normalize(rawContentId);
    const classified = await this.classify(normalized.id);
    const deduped = await this.detectDuplicates(classified.id);
    const draft = deduped.duplicateStatus === "unique" ? await this.generateDraft(deduped.id) : deduped;

    return { normalized, classified, deduped, draft };
  }

  async generateDraft(contentId: string) {
    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
      include: { rawContent: { include: { source: true } } },
    });

    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }

    const draft = {
      articleTitle: content.title,
      articleSummary: content.summary,
      articleBody: [
        content.summary,
        "A redação Noogym deve validar os factos, confirmar a atribuição e completar o contexto antes da publicação.",
      ],
      seoTitle: `${content.title} | Noogym`,
      metaDescription: content.summary,
      slug: content.slug,
      tags: [content.category, content.city, content.province].filter(Boolean),
      suggestedCategory: content.category,
      attribution: {
        sourceName: content.rawContent.source.name,
        sourceUrl: content.rawContent.canonicalUrl,
        fullCopyAllowed: false,
      },
    };
    const socialDraft = {
      instagram: {
        caption: `${content.title}\n\nResumo editorial Noogym com revisão humana antes da publicação.`,
        carouselIdea: "Contexto, local, envolvidos e como participar.",
        storyText: "Novo destaque da comunidade fitness em Angola.",
        reelIdea: "Cortes rápidos com local, data e chamada para a comunidade.",
      },
      facebook: {
        post: `${content.title}. Veja o resumo editorial Noogym depois da revisão.`,
        headline: content.title,
        cta: "Acompanhar no Noogym",
      },
    };

    return this.prisma.content.update({
      where: { id: contentId },
      data: { draft, socialDraft, editorialStatus: "DRAFT_GENERATED" },
    });
  }
}
