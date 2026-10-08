import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import { CurrentStudentsRange } from "../enums/current-students-range.enum";
import { MainChallenge } from "../enums/main-challenge.enum";
import { UnitsRange } from "../enums/units-range.enum";
import { optionalText, requiredText, whatsappText } from "./transforms";

export class CreateDemoRequestDto {
  @ApiProperty({ example: "João Silva" })
  @Transform(requiredText)
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @ApiProperty({ example: "Energy Fitness" })
  @Transform(requiredText)
  @IsString()
  @MinLength(2)
  @MaxLength(140)
  gymName!: string;

  @ApiProperty({ example: "+2449XXXXXXXX" })
  @Transform(whatsappText)
  @IsString()
  @MinLength(7)
  @MaxLength(30)
  whatsapp!: string;

  @ApiPropertyOptional({ example: "contacto@ginasio.com" })
  @Transform(optionalText)
  @IsOptional()
  @IsEmail()
  @MaxLength(160)
  email?: string;

  @ApiProperty({ example: "Luanda" })
  @Transform(requiredText)
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  city!: string;

  @ApiProperty({ enum: CurrentStudentsRange, example: CurrentStudentsRange.FROM_301_TO_500 })
  @IsEnum(CurrentStudentsRange)
  currentStudentsRange!: CurrentStudentsRange;

  @ApiPropertyOptional({ enum: UnitsRange, example: UnitsRange.ONE })
  @IsOptional()
  @IsEnum(UnitsRange)
  unitsRange?: UnitsRange;

  @ApiProperty({ enum: MainChallenge, example: MainChallenge.LATE_PAYMENTS })
  @IsEnum(MainChallenge)
  mainChallenge!: MainChallenge;

  @ApiPropertyOptional({ example: "Gostaria de automatizar cobranças e check-ins." })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(500)
  message?: string;

  @ApiPropertyOptional({ example: "landing-page" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(100)
  source?: string;

  @ApiPropertyOptional({ example: "software-gestao-ginasios" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  campaign?: string;

  @ApiPropertyOptional()
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  utmSource?: string;

  @ApiPropertyOptional()
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  utmMedium?: string;

  @ApiPropertyOptional()
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  utmCampaign?: string;

  @ApiPropertyOptional()
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  utmContent?: string;

  @ApiPropertyOptional()
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  utmTerm?: string;

  @ApiPropertyOptional({ example: "0.L4..." })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MinLength(10)
  turnstileToken?: string;
}
