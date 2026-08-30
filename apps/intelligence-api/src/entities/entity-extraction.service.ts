import { Injectable } from "@nestjs/common";

export type ExtractedEntity = {
  name: string;
  entityType: "Gym" | "PersonalTrainer" | "Athlete" | "Nutritionist" | "Event" | "Brand" | "Store" | "Federation" | "Club" | "Organization" | "Location";
  confidence: number;
  role?: string;
};

const locationNames = ["Luanda", "Benguela", "Lubango", "Huambo", "Cabinda", "Malanje", "Namibe", "Huíla", "Uíge"];

@Injectable()
export class EntityExtractionService {
  extract(text: string): ExtractedEntity[] {
    const entities: ExtractedEntity[] = [];

    for (const location of locationNames) {
      if (text.toLowerCase().includes(location.toLowerCase())) {
        entities.push({ name: location, entityType: "Location", confidence: 92, role: "mentioned_location" });
      }
    }

    for (const match of text.matchAll(/\b([A-ZÁÉÍÓÚÂÊÔÃÕÇ][\wÁÉÍÓÚÂÊÔÃÕÇáéíóúâêôãõç-]+(?:\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ][\wÁÉÍÓÚÂÊÔÃÕÇáéíóúâêôãõç-]+){1,4})\b/g)) {
      const name = match[1].trim();
      if (locationNames.includes(name) || name.length < 6) {
        continue;
      }

      entities.push({
        name,
        entityType: this.inferType(name),
        confidence: 65,
        role: "mentioned_entity",
      });
    }

    return this.unique(entities);
  }

  private inferType(name: string): ExtractedEntity["entityType"] {
    const lower = name.toLowerCase();

    if (lower.includes("gym") || lower.includes("fitness") || lower.includes("ginásio") || lower.includes("ginasio")) {
      return "Gym";
    }

    if (lower.includes("federação") || lower.includes("federacao")) {
      return "Federation";
    }

    if (lower.includes("run") || lower.includes("campeonato") || lower.includes("workshop")) {
      return "Event";
    }

    return "Organization";
  }

  private unique(entities: ExtractedEntity[]) {
    const seen = new Set<string>();
    return entities.filter((entity) => {
      const key = `${entity.entityType}:${entity.name.toLowerCase()}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }
}
