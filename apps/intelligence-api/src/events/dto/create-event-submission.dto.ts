import { IsISO8601, IsOptional, IsString, IsUrl, MaxLength } from "class-validator";

export class CreateEventSubmissionDto {
  @IsString()
  @MaxLength(160)
  name: string;

  @IsString()
  @MaxLength(120)
  organizer: string;

  @IsString()
  @MaxLength(80)
  category: string;

  @IsString()
  @MaxLength(2000)
  description: string;

  @IsISO8601()
  date: string;

  @IsOptional()
  @IsString()
  time?: string;

  @IsString()
  @MaxLength(80)
  province: string;

  @IsString()
  @MaxLength(80)
  city: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  venue?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  price?: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  currency?: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  registrationUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  instagram?: string;

  @IsString()
  @MaxLength(180)
  contact: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  imageUrl?: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  site?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1200)
  notes?: string;

  @IsOptional()
  @IsString()
  website?: string;
}
