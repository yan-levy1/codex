import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductAttribute {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;
}

class ProductDetails {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  warranty: string;

  @ApiProperty({ type: [ProductAttribute] })
  @ValidateNested({ each: true })
  @Type(() => ProductAttribute)
  @IsArray()
  attributes: ProductAttribute[];
}

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ type: ProductDetails })
  @ValidateNested()
  @Type(() => ProductDetails)
  details: ProductDetails;

  @ApiProperty({
    type: [String],
    description: 'Descriptions for each uploaded image',
  })
  @IsArray()
  @IsString({ each: true })
  imageDescriptions: string[];
}
