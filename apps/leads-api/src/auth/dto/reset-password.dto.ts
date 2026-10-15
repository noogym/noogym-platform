import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class ResetPasswordDto {
  @ApiProperty({ example: "reset-token-from-email" })
  @IsString()
  @MinLength(20)
  token!: string;

  @ApiProperty({ example: "Noogym2026" })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
    message: "A senha deve conter pelo menos uma letra e um numero.",
  })
  password!: string;
}
