import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import { Colors, ProductDetails } from "../entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  details: ProductDetails[];

  @ApiProperty()
  publishDate: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  colors: Colors[];

  @ApiProperty()
  total: number;
}
