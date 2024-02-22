import { PartialType } from "@nestjs/mapped-types";
import { CreateClientDto } from "./create-client.dto";
import { Address } from "../entities/client.entity";
import { Request } from "src/request/entities/request.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: Address[];

  @ApiProperty()
  phone: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  request: Request[];
}
