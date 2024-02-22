import { Request } from 'src/request/entities/request.entity';
import { Address } from '../entities/client.entity';

export class CreateClientDto {
  name: string;
  email: string;
  address: Address[];
  phone: string;
  lastName: string;
  request: Request[];
}
