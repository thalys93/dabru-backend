import { Address } from 'src/clients/entities/client.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { cartProducts } from '../entities/request.entity';

export class CreateRequestDto {
  client_: string;
  address: Address[];
  paymentForm: string;
  total: string;
  cartItems: cartProducts[];
  date: Date;
  public sale: Sale[];
}
