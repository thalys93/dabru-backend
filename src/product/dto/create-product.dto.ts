import { ApiProperty } from "@nestjs/swagger";
import { Colors, ProductDetails } from "../entities/product.entity";

export class CreateProductDto {
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
