import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleDto {
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
