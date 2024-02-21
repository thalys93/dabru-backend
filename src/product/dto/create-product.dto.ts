import { Colors, ProductDetails } from '../entities/product.entity';

export class CreateProductDto {
  name: string;
  value: number;
  details: ProductDetails[];
  publishDate: Date;
  description: string;
  quantity: number;
  colors: Colors[];
  total: number;
}
