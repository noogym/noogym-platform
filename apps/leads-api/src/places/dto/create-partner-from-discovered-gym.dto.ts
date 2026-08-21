import { IsIn, IsInt, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreatePartnerFromDiscoveredGymDto {
  @IsOptional()
  @IsString()
  @MaxLength(160)
  city?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  neighborhood?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(180)
  slug?: string;

  @IsOptional()
  @IsIn(["DRAFT", "ACTIVE"])
  status?: "DRAFT" | "ACTIVE";

  @IsOptional()
  @IsInt()
  @Min(0)
  basePrice?: number;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  website?: string;
}
