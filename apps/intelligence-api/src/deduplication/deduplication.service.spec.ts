import { DeduplicationService } from "./deduplication.service";

describe("DeduplicationService", () => {
  const service = new DeduplicationService();

  it("marks similar same-place same-date events as possible duplicates", () => {
    const result = service.compare(
      { id: "a", title: "Fitness Run Benguela edicao 2026", city: "Benguela", startDate: "2026-09-12" },
      { id: "b", title: "Fitness Run Benguela 2026", city: "Benguela", startDate: "2026-09-12" },
    );

    expect(result.status).toBe("possible_duplicate");
    expect(result.reason).toBe("title_place_date");
  });

  it("uses canonical url as a strong duplicate signal", () => {
    const result = service.compare(
      { id: "a", title: "A", canonicalUrl: "https://example.com/post" },
      { id: "b", title: "B", canonicalUrl: "https://example.com/post" },
    );

    expect(result.status).toBe("duplicate");
    expect(result.confidence).toBe(100);
  });
});
