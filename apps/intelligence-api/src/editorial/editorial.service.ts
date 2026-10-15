import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ReviewActionDto } from "./dto/review-action.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class EditorialService {
  constructor(private readonly prisma: PrismaService) {}

  queue() {
    return this.prisma.content.findMany({
      where: { editorialStatus: { in: ["REVIEW_REQUIRED", "CLASSIFIED", "DRAFT_GENERATED"] } },
      include: { rawContent: { include: { source: true } }, entities: { include: { entity: true } }, eventCandidate: true },
      orderBy: { updatedAt: "desc" },
    });
  }

  eventQueue() {
    return this.prisma.eventCandidate.findMany({
      where: { editorialStatus: { in: ["REVIEW_REQUIRED", "DRAFT_GENERATED"] } },
      include: { source: true, content: true },
      orderBy: { updatedAt: "desc" },
    });
  }

  async approveContent(id: string, dto: ReviewActionDto) {
    await this.ensureContent(id);
    await this.prisma.editorialReview.create({
      data: { contentId: id, status: "APPROVED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.content.update({ where: { id }, data: { editorialStatus: "APPROVED" } });
  }

  async rejectContent(id: string, dto: ReviewActionDto) {
    await this.ensureContent(id);
    await this.prisma.editorialReview.create({
      data: { contentId: id, status: "REJECTED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.content.update({ where: { id }, data: { editorialStatus: "REJECTED" } });
  }

  async approveEvent(id: string, dto: ReviewActionDto) {
    await this.ensureEvent(id);
    await this.prisma.editorialReview.create({
      data: { eventCandidateId: id, status: "APPROVED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.eventCandidate.update({ where: { id }, data: { editorialStatus: "APPROVED", verificationStatus: "verified" } });
  }

  async rejectEvent(id: string, dto: ReviewActionDto) {
    await this.ensureEvent(id);
    await this.prisma.editorialReview.create({
      data: { eventCandidateId: id, status: "REJECTED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.eventCandidate.update({ where: { id }, data: { editorialStatus: "REJECTED", verificationStatus: "rejected" } });
  }

  async scheduleContent(id: string, dto: ReviewActionDto) {
    const content = await this.ensureContent(id);
    if (!["APPROVED", "READY_TO_PUBLISH"].includes(content.editorialStatus)) {
      throw new BadRequestException("Conteudo precisa estar aprovado antes do agendamento.");
    }
    if (!dto.scheduledFor) {
      throw new BadRequestException("scheduledFor e obrigatorio para agendar conteudo.");
    }

    await this.prisma.editorialReview.create({
      data: { contentId: id, status: "SCHEDULED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.content.update({ where: { id }, data: { editorialStatus: "SCHEDULED", scheduledFor: new Date(dto.scheduledFor) } });
  }

  async markContentPublished(id: string, dto: ReviewActionDto) {
    await this.ensureContent(id);
    await this.prisma.editorialReview.create({
      data: { contentId: id, status: "PUBLISHED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.content.update({ where: { id }, data: { editorialStatus: "PUBLISHED", publishedAt: new Date() } });
  }

  async scheduleEvent(id: string, dto: ReviewActionDto) {
    const event = await this.ensureEvent(id);
    if (!["APPROVED", "READY_TO_PUBLISH"].includes(event.editorialStatus)) {
      throw new BadRequestException("Evento precisa estar aprovado antes do agendamento.");
    }
    if (!dto.scheduledFor) {
      throw new BadRequestException("scheduledFor e obrigatorio para agendar evento.");
    }

    await this.prisma.editorialReview.create({
      data: { eventCandidateId: id, status: "SCHEDULED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.eventCandidate.update({ where: { id }, data: { editorialStatus: "SCHEDULED", scheduledFor: new Date(dto.scheduledFor) } });
  }

  async markEventPublished(id: string, dto: ReviewActionDto) {
    await this.ensureEvent(id);
    await this.prisma.editorialReview.create({
      data: { eventCandidateId: id, status: "PUBLISHED", reviewerId: dto.reviewerId, reviewerName: dto.reviewerName, notes: dto.notes },
    });
    return this.prisma.eventCandidate.update({ where: { id }, data: { editorialStatus: "PUBLISHED", publishedAt: new Date() } });
  }

  private async ensureContent(id: string) {
    const content = await this.prisma.content.findUnique({ where: { id } });
    if (!content) {
      throw new NotFoundException("Conteudo nao encontrado.");
    }
    return content;
  }

  private async ensureEvent(id: string) {
    const event = await this.prisma.eventCandidate.findUnique({ where: { id } });
    if (!event) {
      throw new NotFoundException("Evento nao encontrado.");
    }
    return event;
  }
}
