import { NormalizationService } from "./normalization.service";

describe("NormalizationService", () => {
  it("removes structural noise from html", () => {
    const service = new NormalizationService();
    const result = service.normalize({
      title: "Novo ginásio em Luanda",
      rawText: "",
      rawHtml: "<nav>Menu</nav><main><h1>Novo ginásio em Luanda</h1><p>Abertura com aulas especiais.</p></main><footer>Copyright</footer>",
    });

    expect(result.slug).toBe("novo-ginasio-em-luanda");
    expect(result.cleanText).toContain("Novo ginásio em Luanda");
    expect(result.cleanText).not.toContain("Menu");
    expect(result.cleanText).not.toContain("Copyright");
  });
});
