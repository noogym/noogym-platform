import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { optionalText, requiredText, whatsappText } from "../../leads/dto/transforms";

export class RegisterDto {
  @ApiProperty({ example: "Joao Silva" })
  @Transform(requiredText)
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  name!: string;

  @ApiProperty({ example: "joao@email.com" })
  @Transform(({ value }) => (value === undefined || value === null ? value : String(value).trim().toLowerCase()))
  @IsEmail()
  @MaxLength(160)
  email!: string;

  @ApiPropertyOptional({ example: "+244923456789" })
  @Transform(whatsappText)
  @IsOptional()
  @IsString()
  @MinLength(7)
  @MaxLength(30)
  phone?: string;

  @ApiProperty({ example: "Noogym2026" })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
    message: "A senha deve conter pelo menos uma letra e um numero.",
  })
  password!: string;

  @ApiPropertyOptional({ example: "0.L4..." })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MinLength(10)
  turnstileToken?: string;
}
