import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  id: string;
  request_: string;
  completed: boolean;
  client_: string;
  completedAt: Date;
  failed: boolean;
}
