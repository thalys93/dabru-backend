import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  async create(createRequestDto: CreateRequestDto) {
    const request = this.requestRepository.create(createRequestDto);
    await this.requestRepository.save(request);

    return { message: 'Pedido Feito com Sucesso', request };
  }

  async findAll() {
    const allRequests = await this.requestRepository.find();
    if (allRequests.length === 0) {
      return { message: 'Nenhum pedido encontrado' };
    } else {
      return { found: allRequests };
    }
  }

  async findOne(id: string) {
    const request = await this.requestRepository.findOne({ where: { id } });
    if (!request) {
      return { message: 'Pedido não encontrado' };
    } else {
      return { found: request };
    }
  }

  async update(id: string, updateRequestDto: UpdateRequestDto) {
    const request = await this.requestRepository.findOne({ where: { id } });
    if (!request) {
      return { message: 'Pedido não encontrado' };
    } else {
      Object.assign(request, updateRequestDto);
    }
    await this.requestRepository.update(id, request);
    return { message: 'Pedido Atualizado com sucesso', request };
  }

  async remove(id: string) {
    const request = await this.requestRepository.findOne({ where: { id } });
    if (!request) {
      return { message: 'Pedido não encontrado' };
    } else {
      await this.requestRepository.delete(id);
      return { message: `Pedido foi deletado com sucesso!`, requestID: id };
    }
  }
}
