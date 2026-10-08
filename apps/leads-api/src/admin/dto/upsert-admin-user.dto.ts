import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpsertAdminUserDto {
  @IsString()
  @MaxLength(160)
  name!: string;

  @IsEmail()
  @MaxLength(160)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  phone?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(120)
  password?: string;
}
