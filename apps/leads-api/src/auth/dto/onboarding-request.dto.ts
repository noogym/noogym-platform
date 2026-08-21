import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { optionalText, requiredText, whatsappText } from "../../leads/dto/transforms";

export class OnboardingRequestDto {
  @ApiProperty({ enum: ["personal", "academia", "vendedor"] })
  @IsIn(["personal", "academia", "vendedor"])
  kind!: "personal" | "academia" | "vendedor";

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

  @ApiProperty({ example: "+244923456789" })
  @Transform(whatsappText)
  @IsString()
  @MinLength(7)
  @MaxLength(30)
  phone!: string;

  @ApiPropertyOptional({ example: "Noogym Store" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(160)
  business?: string;

  @ApiPropertyOptional({ example: "Luanda" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  city?: string;

  @ApiPropertyOptional({ example: "Certificacao internacional" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(180)
  credential?: string;

  @ApiPropertyOptional({ example: "1 a 3 anos" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  selectedOption?: string;
}
