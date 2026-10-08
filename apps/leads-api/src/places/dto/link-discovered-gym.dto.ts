import { IsString, MaxLength } from "class-validator";

export class LinkDiscoveredGymDto {
  @IsString()
  @MaxLength(64)
  gymId!: string;
}
