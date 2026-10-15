import { IsBoolean, IsIn, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export const sourceTypes = ["website", "rss", "api", "federation", "gym", "eventOrganizer", "media", "blog", "publicDirectory", "socialOfficial", "userSubmission", "other"] as const;

export class CreateSourceDto {
  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsIn(sourceTypes)
  sourceType: (typeof sourceTypes)[number];

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  trustScore?: number;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @IsOptional()
  @IsBoolean()
  scrapingAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  requiresReview?: boolean;

  @IsOptional()
  @IsString()
  updateFrequency?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  crawlDelayMs?: number;

  @IsOptional()
  @IsString()
  contentSelector?: string;

  @IsOptional()
  @IsString()
  titleSelector?: string;

  @IsOptional()
  @IsString()
  robotsPolicy?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
