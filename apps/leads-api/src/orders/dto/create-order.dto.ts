import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  ArrayMinSize,
  IsEmail,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from "class-validator";
import { optionalText, requiredText } from "../../leads/dto/transforms";

export class CreateOrderItemDto {
  @ApiPropertyOptional({ example: "whey" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  productId?: string;

  @ApiProperty({ example: "Whey Protein Concentrado 900g - Noogym" })
  @Transform(requiredText)
  @IsString()
  @MaxLength(220)
  name!: string;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  quantity!: number;

  @ApiProperty({ example: 18500 })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  unitPrice!: number;
}

export class CreateOrderDto {
  @ApiPropertyOptional({ example: "Miguel Silva" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(120)
  customerName?: string;

  @ApiPropertyOptional({ example: "miguel@email.com" })
  @Transform(({ value }) => (value === undefined || value === null || value === "" ? undefined : String(value).trim().toLowerCase()))
  @IsOptional()
  @IsEmail()
  @MaxLength(160)
  customerEmail?: string;

  @ApiPropertyOptional({ example: "+244923456789" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(30)
  customerPhone?: string;

  @ApiProperty({ enum: ["rapida", "expressa"] })
  @IsIn(["rapida", "expressa"])
  deliveryMethod!: "rapida" | "expressa";

  @ApiProperty({ enum: ["delivery", "multicaixa", "card"] })
  @IsIn(["delivery", "multicaixa", "card"])
  paymentMethod!: "delivery" | "multicaixa" | "card";

  @ApiPropertyOptional({ example: "Talatona, Luanda" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(260)
  deliveryAddress?: string;

  @ApiPropertyOptional({ example: "NOOGYM10" })
  @Transform(optionalText)
  @IsOptional()
  @IsString()
  @MaxLength(40)
  couponCode?: string;

  @ApiProperty({ type: [CreateOrderItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  @ArrayMinSize(1)
  items!: CreateOrderItemDto[];
}
