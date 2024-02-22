import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);

    await this.productRepository.save(product);
    return { message: "Produto criado com sucesso", product };
  }

  async findAll() {
    const allProducts = await this.productRepository.find();
    if (allProducts.length === 0) {
      return { message: "Nenhum produto encontrado" };
    } else {
      return { found: allProducts };
    }
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException("Produto não encontrado");
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException("Produto não encontrado");
    } else {
      Object.assign(product, updateProductDto);
    }
    await this.productRepository.update(id, product);
    return { message: "Produto Atualizado com sucesso", product };
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException("Produto não encontrado");
    }
    await this.productRepository.delete(id);
    return { message: `Produto foi deletado com sucesso!`, productID: id };
  }
}
