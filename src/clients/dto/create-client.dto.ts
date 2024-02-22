import { Request } from "src/request/entities/request.entity";
import { Address } from "../entities/client.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
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
