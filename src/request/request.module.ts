import { Module } from "@nestjs/common";
import { RequestService } from "./request.service";
import {
  RequestController,
  RequestProtectedController,
} from "./request.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Request } from "./entities/request.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  controllers: [RequestController, RequestProtectedController],
  providers: [RequestService],
})
export class RequestModule {}
