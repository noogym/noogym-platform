import { ClassificationService } from "./classification.service";

describe("ClassificationService", () => {
  it("classifies Angola fitness events with explicit scores", () => {
    const service = new ClassificationService();
    const result = service.classify({
      title: "Fitness Run Benguela edição 2026",
      text: "Corrida comunitária em Benguela, Angola, com prova 10k e ações de saúde.",
      sourceTrustScore: 80,
    });

    expect(result.contentType).toBe("event");
    expect(result.category).toBe("corrida");
    expect(result.country).toBe("Angola");
    expect(result.province).toBe("Benguela");
    expect(result.fitnessScore).toBeGreaterThan(0);
    expect(result.angolaScore).toBe(100);
    expect(result.relevanceScore).toBeGreaterThan(50);
  });
});
