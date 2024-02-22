import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDto } from './create-request.dto';
import { Address } from 'src/clients/entities/client.entity';
import { cartProducts } from '../entities/request.entity';
import { Sale } from 'src/sale/entities/sale.entity';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  id: string;
  client_: string;
  address: Address[];
  paymentForm: string;
  total: string;
  cartItems: cartProducts[];
  date: Date;
  public sale: Sale[];
}
