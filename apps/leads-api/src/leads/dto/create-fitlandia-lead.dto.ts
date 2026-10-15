import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsEmail,
  IsIn,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import { optionalText, requiredText, whatsappText } from "./transforms";

export const fitlandiaProfiles = ["gym", "personal", "athlete", "visitor"] as const;

export type FitlandiaProfile = (typeof fitlandiaProfiles)[number];

export class CreateFitlandiaLeadDto {
  @ApiProperty({ enum: fitlandiaProfiles, example: "gym" })
  @Transform(requiredText)
  @IsIn(fitlandiaProfiles)
  profile!: FitlandiaProfile;

  @ApiProperty({ example: "João Silva" })
  @Transform(requiredText)
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @ApiProperty({ example: "+2449XXXXXXXX" })
  @Transform(whatsappText)
  @IsString()
  @MinLength(7)
  @MaxLength(30)
  whatsapp!: string;

  @ApiPropertyOptional({ example: "joao@email.com" })
  @Transform(optionalText)
  @IsOptional()
  @IsEmail()
  @MaxLength(160)
  email?: string;

  @ApiPropertyOptional({ example: "Luanda" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @ApiPropertyOptional({ example: "Noogym Center" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(140)
  business?: string;

  @ApiPropertyOptional({ example: "Quero conhecer as ofertas do lançamento." })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(180)
  objective?: string;

  @ApiPropertyOptional({ example: { studentsRange: "101-300" } })
  @IsOptional()
  @IsObject()
  extra?: Record<string, string>;

  @ApiPropertyOptional({ example: "fitlandia-modal" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(100)
  source?: string;

  @ApiPropertyOptional({ example: "fitlandia-2026" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  campaign?: string;
}
