import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller()
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("health")
  health() {
    return { status: "ok", service: "noogym-fitness-intelligence" };
  }

  @Get("dashboard")
  async dashboard() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [
      sources,
      discoveredToday,
      contents,
      events,
      contentDuplicates,
      eventDuplicates,
      contentReviewRequired,
      eventReviewRequired,
      contentApproved,
      eventApproved,
      contentRejected,
      eventRejected,
      failedJobs,
      contentByStatus,
      eventsByStatus,
      recentJobs,
    ] = await Promise.all([
      this.prisma.source.count(),
      this.prisma.rawContent.count({ where: { discoveredAt: { gte: startOfToday } } }),
      this.prisma.content.count(),
      this.prisma.eventCandidate.count(),
      this.prisma.content.count({ where: { duplicateStatus: { in: ["possible_duplicate", "duplicate"] } } }),
      this.prisma.eventCandidate.count({ where: { duplicateStatus: { in: ["possible_duplicate", "duplicate"] } } }),
      this.prisma.content.count({ where: { editorialStatus: "REVIEW_REQUIRED" } }),
      this.prisma.eventCandidate.count({ where: { editorialStatus: "REVIEW_REQUIRED" } }),
      this.prisma.content.count({ where: { editorialStatus: "APPROVED" } }),
      this.prisma.eventCandidate.count({ where: { editorialStatus: "APPROVED" } }),
      this.prisma.content.count({ where: { editorialStatus: "REJECTED" } }),
      this.prisma.eventCandidate.count({ where: { editorialStatus: "REJECTED" } }),
      this.prisma.crawlJob.count({ where: { status: "failed" } }),
      this.prisma.content.groupBy({ by: ["editorialStatus"], _count: { editorialStatus: true } }),
      this.prisma.eventCandidate.groupBy({ by: ["editorialStatus"], _count: { editorialStatus: true } }),
      this.prisma.crawlJob.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        select: { id: true, sourceId: true, jobType: true, status: true, discoveredCount: true, processedCount: true, error: true, createdAt: true, finishedAt: true },
      }),
    ]);

    return {
      sources,
      discoveredToday,
      contents,
      events,
      duplicates: contentDuplicates + eventDuplicates,
      reviewRequired: contentReviewRequired + eventReviewRequired,
      approved: contentApproved + eventApproved,
      rejected: contentRejected + eventRejected,
      failedJobs,
      pipeline: this.mergeStatusCounts(contentByStatus, eventsByStatus),
      recentJobs,
    };
  }

  private mergeStatusCounts(
    contentRows: Array<{ editorialStatus: string; _count: { editorialStatus: number } }>,
    eventRows: Array<{ editorialStatus: string; _count: { editorialStatus: number } }>,
  ) {
    const statuses = ["DISCOVERED", "INGESTED", "NORMALIZED", "CLASSIFIED", "REVIEW_REQUIRED", "APPROVED", "DRAFT_GENERATED", "READY_TO_PUBLISH", "SCHEDULED", "PUBLISHED", "REJECTED", "DUPLICATE", "ARCHIVED"];
    const totals = Object.fromEntries(statuses.map((status) => [status, 0]));

    for (const row of [...contentRows, ...eventRows]) {
      totals[row.editorialStatus] = (totals[row.editorialStatus] ?? 0) + row._count.editorialStatus;
    }

    return totals;
  }
}
