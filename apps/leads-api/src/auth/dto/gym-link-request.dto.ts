import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { optionalText, requiredText } from "../../leads/dto/transforms";

export class GymLinkRequestDto {
  @ApiProperty({ enum: ["phone", "email", "code"] })
  @IsIn(["phone", "email", "code"])
  method!: "phone" | "email" | "code";

  @ApiProperty({ example: "+244923456789" })
  @Transform(requiredText)
  @IsString()
  @MinLength(3)
  @MaxLength(160)
  identifier!: string;

  @ApiPropertyOptional({ example: "joao@email.com" })
  @Transform(({ value }) => (value === undefined || value === null ? value : String(value).trim().toLowerCase()))
  @IsOptional()
  @IsEmail()
  @MaxLength(160)
  email?: string;

  @ApiPropertyOptional({ example: "Joao Silva" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;
}
