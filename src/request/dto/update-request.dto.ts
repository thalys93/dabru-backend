import { PartialType } from "@nestjs/mapped-types";
import { CreateRequestDto } from "./create-request.dto";
import { Address } from "src/clients/entities/client.entity";
import { cartProducts } from "../entities/request.entity";
import { Sale } from "src/sale/entities/sale.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  @ApiProperty()
  id: string;

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
