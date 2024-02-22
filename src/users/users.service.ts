import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);

    return { message: 'Usuário Criado com sucesso', user };
  }

  async findAll() {
    const allUsers = await this.usersRepository.find();
    if (allUsers.length === 0) {
      return { message: 'Nenhum usuário encontrado' };
    } else {
      return { found: allUsers };
    }
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return { message: 'Usuário não encontrado' };
    } else {
      return { found: user };
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return { message: 'Usuário não encontrado' };
    } else {
      Object.assign(user, updateUserDto);
    }
    await this.usersRepository.update(id, user);
    return { message: 'Usuário Atualizado com sucesso', user };
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return { message: 'Usuário não encontrado' };
    } else {
      await this.usersRepository.delete(id);
      return { message: `Usuário foi deletado com sucesso!`, userID: id };
    }
  }
}
