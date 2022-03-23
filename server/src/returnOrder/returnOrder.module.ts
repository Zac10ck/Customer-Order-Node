import { Module } from "@nestjs/common";
import { ReturnOrderModuleBase } from "./base/returnOrder.module.base";
import { ReturnOrderService } from "./returnOrder.service";
import { ReturnOrderController } from "./returnOrder.controller";
import { ReturnOrderResolver } from "./returnOrder.resolver";

@Module({
  imports: [ReturnOrderModuleBase],
  controllers: [ReturnOrderController],
  providers: [ReturnOrderService, ReturnOrderResolver],
  exports: [ReturnOrderService],
})
export class ReturnOrderModule {}
