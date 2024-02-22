import { PartialType } from "@nestjs/mapped-types";
import { CreateClientDto } from "./create-client.dto";
import { Address } from "../entities/client.entity";
import { Request } from "src/request/entities/request.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(RegExHelper.email)
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  address: Address[];

  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  request: Request[];
}
