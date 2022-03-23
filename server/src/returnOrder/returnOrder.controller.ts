import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReturnOrderService } from "./returnOrder.service";
import { ReturnOrderControllerBase } from "./base/returnOrder.controller.base";

@swagger.ApiTags("returnOrders")
@common.Controller("returnOrders")
export class ReturnOrderController extends ReturnOrderControllerBase {
  constructor(
    protected readonly service: ReturnOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
