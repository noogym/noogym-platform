import { Transform } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

function optionalNumber(defaultValue: number) {
  return Transform(({ value }) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    return Number(value);
  });
}

export class ListDiscoveredLuandaGymsQueryDto {
  @optionalNumber(80)
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(200)
  limit: number = 80;
}
