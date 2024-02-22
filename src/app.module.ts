import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { RequestModule } from './request/request.module';
import { SaleModule } from './sale/sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configs/orm.config';

@Module({
  imports: [
    ProductModule,
    UsersModule,
    ClientsModule,
    RequestModule,
    SaleModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
