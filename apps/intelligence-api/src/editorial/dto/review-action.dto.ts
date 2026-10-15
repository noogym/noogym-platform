import { IsISO8601, IsOptional, IsString } from "class-validator";

export class ReviewActionDto {
  @IsOptional()
  @IsString()
  reviewerId?: string;

  @IsOptional()
  @IsString()
  reviewerName?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsISO8601()
  scheduledFor?: string;
}
