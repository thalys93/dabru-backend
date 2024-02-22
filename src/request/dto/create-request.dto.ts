import { Address } from "src/clients/entities/client.entity";
import { Sale } from "src/sale/entities/sale.entity";
import { cartProducts } from "../entities/request.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRequestDto {
  @ApiProperty()
  client_: string;

  @ApiProperty()
  address: Address[];

  @ApiProperty()
  paymentForm: string;

  @ApiProperty()
  total: string;

  @ApiProperty()
  cartItems: cartProducts[];

  @ApiProperty()
  date: Date;

  @ApiProperty()
  public sale: Sale[];
}
