import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { Address } from '../entities/client.entity';
import { Request } from 'src/request/entities/request.entity';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  id: string;
  name: string;
  email: string;
  address: Address[];
  phone: string;
  lastName: string;
  request: Request[];
}
