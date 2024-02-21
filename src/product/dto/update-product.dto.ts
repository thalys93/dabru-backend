import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Colors, ProductDetails } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  id: string;
  name: string;
  value: number;
  details: ProductDetails[];
  publishDate: Date;
  description: string;
  quantity: number;
  colors: Colors[];
  total: number;
}
