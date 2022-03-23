import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReturnOrderResolverBase } from "./base/returnOrder.resolver.base";
import { ReturnOrder } from "./base/ReturnOrder";
import { ReturnOrderService } from "./returnOrder.service";

@graphql.Resolver(() => ReturnOrder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReturnOrderResolver extends ReturnOrderResolverBase {
  constructor(
    protected readonly service: ReturnOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
