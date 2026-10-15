import { DeduplicationService } from "../deduplication/deduplication.service";
import { EventsService } from "./events.service";

describe("EventsService", () => {
  it("creates an event candidate from classified content", async () => {
    const candidate = { id: "event-1" };
    const updated = {
      id: "event-1",
      name: "Fitness Run Benguela edicao 2026",
      city: "Benguela",
      startDate: new Date("2026-09-12"),
      editorialStatus: "REVIEW_REQUIRED",
    };
    const prisma = {
      content: {
        findUnique: jest.fn().mockResolvedValue({
          id: "content-1",
          title: "Fitness Run Benguela edicao 2026",
          cleanText: "Organizador: Running Angola. Data 2026-09-12",
          summary: "Corrida comunitaria em Benguela.",
          contentType: "event",
          category: "corrida",
          city: "Benguela",
          province: "Benguela",
          country: "Angola",
          confidence: 80,
          eventCandidate: null,
          rawContent: { sourceId: "source-1", canonicalUrl: "fixture://running-angola", source: { name: "Running Angola" } },
        }),
      },
      eventCandidate: {
        create: jest.fn().mockResolvedValue(candidate),
        findUnique: jest.fn().mockResolvedValue({ ...updated, sourceUrl: "fixture://running-angola", duplicateStatus: "unique" }),
        findMany: jest.fn().mockResolvedValue([]),
        update: jest.fn().mockResolvedValue(updated),
      },
    };
    const service = new EventsService(prisma as never, new DeduplicationService());

    await expect(service.detectFromContent("content-1")).resolves.toEqual(updated);
    expect(prisma.eventCandidate.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        name: "Fitness Run Benguela edicao 2026",
        startDate: new Date("2026-09-12"),
        organizer: "Running Angola",
      }),
    }));
  });

  it("reuses an existing event candidate for the same content", async () => {
    const updated = { id: "event-existing", duplicateStatus: "unique", editorialStatus: "REVIEW_REQUIRED" };
    const prisma = {
      content: {
        findUnique: jest.fn().mockResolvedValue({
          id: "content-1",
          eventCandidate: { id: "event-existing" },
          rawContent: { sourceId: "source-1", canonicalUrl: "fixture://running-angola" },
        }),
      },
      eventCandidate: {
        create: jest.fn(),
        findUnique: jest.fn().mockResolvedValue({ id: "event-existing", name: "Fitness Run", city: "Benguela", startDate: new Date("2026-09-12") }),
        findMany: jest.fn().mockResolvedValue([]),
        update: jest.fn().mockResolvedValue(updated),
      },
    };
    const service = new EventsService(prisma as never, new DeduplicationService());

    await expect(service.detectFromContent("content-1")).resolves.toEqual(updated);
    expect(prisma.eventCandidate.create).not.toHaveBeenCalled();
  });
});
