import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReturnOrderServiceBase } from "./base/returnOrder.service.base";

@Injectable()
export class ReturnOrderService extends ReturnOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
