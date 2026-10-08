import { Transform } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

const defaultLuandaLatitude = -8.839988;
const defaultLuandaLongitude = 13.289437;

function optionalNumber(defaultValue: number) {
  return Transform(({ value }) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    return Number(value);
  });
}

export class ListNearbyGymsQueryDto {
  @optionalNumber(defaultLuandaLatitude)
  @IsOptional()
  @IsNumber()
  @Min(-90)
  @Max(90)
  lat: number = defaultLuandaLatitude;

  @optionalNumber(defaultLuandaLongitude)
  @IsOptional()
  @IsNumber()
  @Min(-180)
  @Max(180)
  lng: number = defaultLuandaLongitude;

  @optionalNumber(10_000)
  @IsOptional()
  @IsNumber()
  @Min(500)
  @Max(50_000)
  radius: number = 10_000;

  @optionalNumber(12)
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  limit: number = 12;
}
