import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { LeadStatus } from "../enums/lead-status.enum";
import { MainChallenge } from "../enums/main-challenge.enum";
import { optionalText } from "./transforms";

export class ListLeadsQueryDto {
  @ApiPropertyOptional({ minimum: 1, default: 1 })
  @Transform(({ value }) => Number(value ?? 1))
  @IsOptional()
  @IsInt()
  @Min(1)
  page = 1;

  @ApiPropertyOptional({ minimum: 1, maximum: 100, default: 20 })
  @Transform(({ value }) => Number(value ?? 20))
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;

  @ApiPropertyOptional({ enum: LeadStatus })
  @IsOptional()
  @IsEnum(LeadStatus)
  status?: LeadStatus;

  @ApiPropertyOptional({ example: "Luanda" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ enum: MainChallenge })
  @IsOptional()
  @IsEnum(MainChallenge)
  mainChallenge?: MainChallenge;

  @ApiPropertyOptional({ example: "2026-05-01T00:00:00.000Z" })
  @IsOptional()
  @IsDateString()
  from?: string;

  @ApiPropertyOptional({ example: "2026-05-31T23:59:59.999Z" })
  @IsOptional()
  @IsDateString()
  to?: string;
}
