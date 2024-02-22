import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const request = this.saleRepository.create(createSaleDto);
    await this.saleRepository.save(request);

    return { message: 'Venda Criada', request };
  }

  async findAll() {
    const allSales = await this.saleRepository.find();
    if (allSales.length === 0) {
      return { message: 'Nenhuma venda encontrada' };
    } else {
      return { found: allSales };
    }
  }

  async findOne(id: string) {
    const sale = await this.saleRepository.findOne({ where: { id } });
    if (!sale) {
      return { message: 'Venda não encontrada' };
    } else {
      return { found: sale };
    }
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.saleRepository.findOne({ where: { id } });
    if (!sale) {
      return { message: 'Venda não encontrada' };
    } else {
      Object.assign(sale, updateSaleDto);
    }
    await this.saleRepository.update(id, sale);
    return { message: 'Venda Atualizada com sucesso', sale };
  }

  async remove(id: string) {
    const sale = await this.saleRepository.findOne({ where: { id } });
    if (!sale) {
      return { message: 'Venda não encontrada' };
    } else {
      await this.saleRepository.delete(id);
      return { message: `Venda foi deletada com sucesso!`, saleID: id };
    }
  }
}
