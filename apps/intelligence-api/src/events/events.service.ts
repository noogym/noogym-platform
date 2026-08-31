import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { DeduplicationService } from "../deduplication/deduplication.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateEventSubmissionDto } from "./dto/create-event-submission.dto";

@Injectable()
export class EventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly deduplication: DeduplicationService,
  ) {}

  list(query: { status?: string; province?: string; city?: string; origin?: string; q?: string } = {}) {
    return this.prisma.eventCandidate.findMany({
      where: {
        editorialStatus: query.status as never,
        province: query.province,
        city: query.city,
        origin: query.origin as never,
        OR: query.q
          ? [
              { name: { contains: query.q, mode: "insensitive" } },
              { description: { contains: query.q, mode: "insensitive" } },
              { organizer: { contains: query.q, mode: "insensitive" } },
            ]
          : undefined,
      },
      include: { source: true, content: true },
      orderBy: { updatedAt: "desc" },
    });
  }

  async createSubmission(dto: CreateEventSubmissionDto) {
    if (dto.website) {
      throw new BadRequestException("Submissao rejeitada.");
    }

    const source = await this.prisma.source.upsert({
      where: { id: "user-submissions" },
      create: {
        id: "user-submissions",
        name: "Submissões do website",
        url: "user_submission://website",
        sourceType: "userSubmission",
        trustScore: 55,
        scrapingAllowed: false,
        requiresReview: true,
      },
      update: {},
    });

    const candidate = await this.prisma.eventCandidate.create({
      data: {
        sourceId: source.id,
        name: dto.name,
        organizer: dto.organizer,
        category: dto.category,
        description: dto.description,
        startDate: new Date(dto.date),
        startTime: dto.time,
        province: dto.province,
        city: dto.city,
        venue: dto.venue,
        location: dto.venue,
        price: dto.price,
        currency: dto.currency ?? "Kz",
        registrationUrl: dto.registrationUrl,
        contact: dto.contact,
        sourceUrl: dto.site,
        imageUrl: dto.imageUrl,
        origin: "community",
        confidence: 80,
        verificationStatus: "pending_review",
        editorialStatus: "REVIEW_REQUIRED",
      },
    });

    await this.prisma.auditLog.create({
      data: {
        action: "event_submission_received",
        entityType: "EventCandidate",
        entityId: candidate.id,
        actorName: dto.organizer,
        metadata: { instagram: dto.instagram, notes: dto.notes },
      },
    });

    return candidate;
  }

  async detectFromContent(contentId: string) {
    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
      include: { eventCandidate: true, rawContent: { include: { source: true } } },
    });

    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }

    if (content.eventCandidate) {
      return this.detectDuplicates(content.eventCandidate.id);
    }

    const text = `${content.title}\n${content.cleanText}`;
    const candidate = await this.prisma.eventCandidate.create({
      data: {
        contentId,
        sourceId: content.rawContent.sourceId,
        name: content.title,
        category: content.category,
        description: content.summary,
        startDate: this.extractDate(text),
        city: content.city,
        province: content.province,
        country: content.country,
        organizer: this.extractOrganizer(text),
        sourceUrl: content.rawContent.canonicalUrl,
        confidence: content.contentType === "event" ? Math.max(content.confidence, 70) : 45,
        verificationStatus: "pending_review",
        editorialStatus: "REVIEW_REQUIRED",
      },
    });

    return this.detectDuplicates(candidate.id);
  }

  async detectDuplicates(eventCandidateId: string) {
    const event = await this.prisma.eventCandidate.findUnique({ where: { id: eventCandidateId } });

    if (!event) {
      throw new NotFoundException("Evento nao encontrado.");
    }

    const candidates = await this.prisma.eventCandidate.findMany({ where: { id: { not: eventCandidateId } }, take: 100 });
    const best = candidates
      .map((candidate) => ({
        candidate,
        result: this.deduplication.compare(
          { id: event.id, title: event.name, city: event.city, province: event.province, startDate: event.startDate, canonicalUrl: event.sourceUrl },
          { id: candidate.id, title: candidate.name, city: candidate.city, province: candidate.province, startDate: candidate.startDate, canonicalUrl: candidate.sourceUrl },
        ),
      }))
      .sort((a, b) => b.result.confidence - a.result.confidence)[0];

    const duplicateStatus = best?.result.status ?? "unique";
    return this.prisma.eventCandidate.update({
      where: { id: eventCandidateId },
      data: {
        duplicateStatus,
        duplicateOfId: duplicateStatus === "unique" ? null : best?.candidate.id,
        duplicateReason: best?.result.reason,
        editorialStatus: duplicateStatus === "unique" ? "REVIEW_REQUIRED" : "DUPLICATE",
      },
    });
  }

  private extractDate(text: string) {
    const iso = text.match(/\b20\d{2}-\d{2}-\d{2}\b/)?.[0];
    return iso ? new Date(iso) : undefined;
  }

  private extractOrganizer(text: string) {
    return text.match(/organizador[:\s]+([^\n.]+)/i)?.[1]?.trim();
  }
}
