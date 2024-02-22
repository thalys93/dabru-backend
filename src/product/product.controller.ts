import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Produtos")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("")
  findAll() {
    return this.productService.findAll();
  }

  @Get("/pr/:id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(id);
  }
}

@ApiTags("Produtos Protegidos")
@Controller("products/protected/")
export class ProductProtectedController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Patch("/pr/:id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete("/pr/:id")
  remove(@Param("id") id: string) {
    return this.productService.remove(id);
  }
}
