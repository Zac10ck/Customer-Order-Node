/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ReturnOrder } from "@prisma/client";

export class ReturnOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReturnOrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderFindManyArgs>
  ): Promise<number> {
    return this.prisma.returnOrder.count(args);
  }

  async findMany<T extends Prisma.ReturnOrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderFindManyArgs>
  ): Promise<ReturnOrder[]> {
    return this.prisma.returnOrder.findMany(args);
  }
  async findOne<T extends Prisma.ReturnOrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderFindUniqueArgs>
  ): Promise<ReturnOrder | null> {
    return this.prisma.returnOrder.findUnique(args);
  }
  async create<T extends Prisma.ReturnOrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderCreateArgs>
  ): Promise<ReturnOrder> {
    return this.prisma.returnOrder.create<T>(args);
  }
  async update<T extends Prisma.ReturnOrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderUpdateArgs>
  ): Promise<ReturnOrder> {
    return this.prisma.returnOrder.update<T>(args);
  }
  async delete<T extends Prisma.ReturnOrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReturnOrderDeleteArgs>
  ): Promise<ReturnOrder> {
    return this.prisma.returnOrder.delete(args);
  }
}
