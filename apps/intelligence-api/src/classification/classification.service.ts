import { Injectable } from "@nestjs/common";

export type ClassificationResult = {
  contentType: "article" | "news" | "event" | "announcement" | "profile" | "promotion" | "unknown";
  category: string;
  country: string;
  province?: string;
  city?: string;
  confidence: number;
  fitnessScore: number;
  angolaScore: number;
  relevanceScore: number;
  explanation: {
    matchedCategoryTerms: string[];
    matchedLocation?: string;
    sourceTrustScore: number;
    formula: string;
  };
};

const categories: Array<{ name: string; terms: string[] }> = [
  { name: "bodybuilding", terms: ["bodybuilding", "fisiculturismo", "supino", "palco"] },
  { name: "corrida", terms: ["corrida", "run", "10k", "maratona", "atleta"] },
  { name: "crossfit", terms: ["crossfit", "wod", "box"] },
  { name: "ginásios", terms: ["ginásio", "ginasio", "gym", "academia"] },
  { name: "personal trainers", terms: ["personal trainer", "treinador"] },
  { name: "nutrição", terms: ["nutrição", "nutricao", "dieta", "alimentação", "suplemento"] },
  { name: "saúde", terms: ["saúde", "saude", "bem-estar", "wellness"] },
  { name: "workshops", terms: ["workshop", "palestra", "formação", "formacao"] },
  { name: "competições", terms: ["competição", "competicao", "campeonato", "torneio"] },
  { name: "comunidade", terms: ["comunidade", "iniciativa", "aula aberta"] },
];

const angolaLocations: Record<string, string> = {
  luanda: "Luanda",
  benguela: "Benguela",
  lubango: "Huíla",
  huila: "Huíla",
  "huíla": "Huíla",
  huambo: "Huambo",
  cabinda: "Cabinda",
  malanje: "Malanje",
  namibe: "Namibe",
  uige: "Uíge",
  "uíge": "Uíge",
};

@Injectable()
export class ClassificationService {
  classify(input: { title: string; text: string; sourceTrustScore?: number }): ClassificationResult {
    const haystack = `${input.title} ${input.text}`.toLowerCase();
    const categoryResult = this.categoryFor(haystack);
    const category = categoryResult.name;
    const contentType = this.contentTypeFor(haystack);
    const location = this.locationFor(haystack);
    const fitnessScore = this.scoreTerms(haystack, categories.flatMap((item) => item.terms), 12);
    const angolaScore = Math.min(100, (haystack.includes("angola") ? 55 : 0) + (location ? 45 : 0));
    const trustScore = input.sourceTrustScore ?? 50;
    const relevanceScore = Math.round((fitnessScore * 0.45) + (angolaScore * 0.4) + (trustScore * 0.15));
    const confidence = Math.min(100, Math.round((fitnessScore + angolaScore) / 2));

    return {
      contentType,
      category,
      country: "Angola",
      province: location?.province,
      city: location?.city,
      confidence,
      fitnessScore,
      angolaScore,
      relevanceScore,
      explanation: {
        matchedCategoryTerms: categoryResult.terms,
        matchedLocation: location?.city ?? location?.province,
        sourceTrustScore: trustScore,
        formula: "fitnessScore * 0.45 + angolaScore * 0.40 + sourceTrustScore * 0.15",
      },
    };
  }

  private categoryFor(haystack: string): { name: string; terms: string[] } {
    let best = { name: "comunidade", score: 0, terms: [] as string[] };

    for (const category of categories) {
      const terms = category.terms.filter((term) => haystack.includes(term));
      const score = terms.length;
      if (score > best.score) {
        best = { name: category.name, score, terms };
      }
    }

    return { name: best.name, terms: best.terms };
  }

  private contentTypeFor(haystack: string): ClassificationResult["contentType"] {
    if (["evento", "workshop", "corrida", "campeonato", "competição", "competicao"].some((term) => haystack.includes(term))) {
      return "event";
    }

    if (["inaugura", "anuncia", "lança", "lanca", "nova edição", "nova edicao"].some((term) => haystack.includes(term))) {
      return "news";
    }

    if (["promoção", "promocao", "desconto"].some((term) => haystack.includes(term))) {
      return "promotion";
    }

    return "article";
  }

  private locationFor(haystack: string) {
    for (const [term, province] of Object.entries(angolaLocations)) {
      if (haystack.includes(term)) {
        return { city: term === "huila" || term === "huíla" ? undefined : province === "Huíla" ? "Lubango" : province, province };
      }
    }

    return undefined;
  }

  private scoreTerms(haystack: string, terms: string[], pointsPerHit: number) {
    const hits = new Set(terms.filter((term) => haystack.includes(term)));
    return Math.min(100, hits.size * pointsPerHit);
  }
}
