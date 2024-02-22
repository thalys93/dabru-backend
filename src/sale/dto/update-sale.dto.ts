import { PartialType } from "@nestjs/mapped-types";
import { CreateSaleDto } from "./create-sale.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  request_: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  client_: string;

  @ApiProperty()
  completedAt: Date;

  @ApiProperty()
  failed: boolean;
}
