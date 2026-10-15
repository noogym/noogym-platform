import { Injectable } from "@nestjs/common";

export type DuplicateCandidate = {
  id: string;
  title: string;
  city?: string | null;
  province?: string | null;
  startDate?: Date | string | null;
  contentHash?: string | null;
  canonicalUrl?: string | null;
  externalId?: string | null;
};

@Injectable()
export class DeduplicationService {
  compare(a: DuplicateCandidate, b: DuplicateCandidate) {
    if (a.canonicalUrl && b.canonicalUrl && a.canonicalUrl === b.canonicalUrl) {
      return { status: "duplicate" as const, confidence: 100, reason: "canonical_url" };
    }

    if (a.externalId && b.externalId && a.externalId === b.externalId) {
      return { status: "duplicate" as const, confidence: 98, reason: "external_id" };
    }

    if (a.contentHash && b.contentHash && a.contentHash === b.contentHash) {
      return { status: "duplicate" as const, confidence: 96, reason: "content_hash" };
    }

    const titleScore = this.titleSimilarity(a.title, b.title);
    const samePlace = Boolean(a.city && b.city && a.city.toLowerCase() === b.city.toLowerCase());
    const sameDate = Boolean(a.startDate && b.startDate && this.dateOnly(a.startDate) === this.dateOnly(b.startDate));
    const confidence = Math.round(titleScore * 70 + (samePlace ? 15 : 0) + (sameDate ? 15 : 0));

    if (confidence >= 84) {
      return { status: "possible_duplicate" as const, confidence, reason: "title_place_date" };
    }

    return { status: "unique" as const, confidence, reason: "insufficient_similarity" };
  }

  titleSimilarity(a: string, b: string) {
    const aTokens = new Set(this.tokens(a));
    const bTokens = new Set(this.tokens(b));
    const intersection = [...aTokens].filter((token) => bTokens.has(token));
    const union = new Set([...aTokens, ...bTokens]);

    if (union.size === 0) {
      return 0;
    }

    return intersection.length / union.size;
  }

  private tokens(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 2)
      .sort();
  }

  private dateOnly(value: Date | string) {
    return new Date(value).toISOString().slice(0, 10);
  }
}
