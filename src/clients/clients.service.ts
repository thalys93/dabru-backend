import { Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./entities/client.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const client = this.clientRepository.create(createClientDto);

    await this.clientRepository.save(client);
    return { message: "Cliente criado com sucesso", client };
  }

  async findAll() {
    const allClients = await this.clientRepository.find();
    if (allClients.length === 0) {
      return { message: "Nenhum cliente encontrado" };
    } else {
      return { found: allClients };
    }
  }

  async findOne(id: string) {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      return { message: "Cliente não encontrado" };
    } else {
      return { found: client };
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      return { message: "Cliente não encontrado" };
    } else {
      Object.assign(client, updateClientDto);
    }
    await this.clientRepository.update(id, client);
    return { message: "Cliente Atualizado com sucesso", client };
  }

  async remove(id: string) {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      return { message: "Cliente não encontrado" };
    } else {
      await this.clientRepository.delete(id);
      return { message: `Cliente foi deletado com sucesso!`, clientID: id };
    }
  }
}
