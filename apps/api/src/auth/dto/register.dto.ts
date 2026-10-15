import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiPropertyOptional({ description: 'Nome do espaço de trabalho, se a conta for profissional.' })
  @IsOptional()
  @IsString()
  organizationName?: string;

  @ApiPropertyOptional({ description: 'Identificador do espaço de trabalho, se a conta for profissional.' })
  @IsOptional()
  @IsString()
  organizationSlug?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  turnstileToken?: string;

  @ApiProperty()
  @IsBoolean()
  termsAccepted: boolean;

  @ApiProperty()
  @IsBoolean()
  privacyPolicyAccepted: boolean;
}
