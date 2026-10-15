import { IsISO8601, IsObject, IsOptional, IsString, IsUrl } from "class-validator";
import type { Prisma } from "../../generated/prisma";

export class IngestRawContentDto {
  @IsString()
  sourceId: string;

  @IsOptional()
  @IsString()
  externalId?: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  canonicalUrl?: string;

  @IsString()
  title: string;

  @IsString()
  rawText: string;

  @IsOptional()
  @IsString()
  rawHtml?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsISO8601()
  publishedAt?: string;

  @IsOptional()
  @IsObject()
  metadata?: Prisma.InputJsonObject;
}
