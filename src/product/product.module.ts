import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import {
  ProductController,
  ProductProtectedController,
} from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController, ProductProtectedController],
  providers: [ProductService],
})
export class ProductModule {}
