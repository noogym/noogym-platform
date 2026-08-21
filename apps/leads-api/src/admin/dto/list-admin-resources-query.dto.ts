import { Transform } from "class-transformer";
import { IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

function optionalNumber(defaultValue: number) {
  return Transform(({ value }) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    return Number(value);
  });
}

export class ListAdminResourcesQueryDto {
  @optionalNumber(120)
  @IsOptional()
  @Min(1)
  @Max(500)
  limit: number = 120;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  search?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  role?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  status?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  city?: string;
}
