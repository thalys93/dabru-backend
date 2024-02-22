import { Request } from "src/request/entities/request.entity";
import { Address } from "../entities/client.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateClientDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
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
