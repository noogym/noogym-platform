import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { optionalText } from "../../leads/dto/transforms";

export class ForgotPasswordDto {
  @ApiProperty({ example: "joao@email.com" })
  @Transform(({ value }) => (value === undefined || value === null ? value : String(value).trim().toLowerCase()))
  @IsEmail()
  @MaxLength(160)
  email!: string;

  @ApiPropertyOptional({ example: "0.L4..." })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MinLength(10)
  turnstileToken?: string;
}
