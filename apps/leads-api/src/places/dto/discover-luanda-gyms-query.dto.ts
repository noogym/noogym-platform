import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, Max, Min } from "class-validator";

function optionalNumber(defaultValue: number) {
  return Transform(({ value }) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    return Number(value);
  });
}

function optionalBoolean(defaultValue: boolean) {
  return Transform(({ value }) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    if (typeof value === "boolean") {
      return value;
    }

    return ["1", "true", "yes", "sim"].includes(String(value).toLowerCase());
  });
}

export class DiscoverLuandaGymsQueryDto {
  @optionalNumber(20)
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  limitPerZone: number = 20;

  @optionalNumber(8_000)
  @IsOptional()
  @IsNumber()
  @Min(1_000)
  @Max(20_000)
  radius: number = 8_000;

  @optionalBoolean(false)
  @IsOptional()
  @IsBoolean()
  refresh: boolean = false;
}
