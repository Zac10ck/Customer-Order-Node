/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReturnOrderWhereInput } from "./ReturnOrderWhereInput";
import { Type } from "class-transformer";
import { ReturnOrderOrderByInput } from "./ReturnOrderOrderByInput";

@ArgsType()
class ReturnOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReturnOrderWhereInput,
  })
  @Field(() => ReturnOrderWhereInput, { nullable: true })
  @Type(() => ReturnOrderWhereInput)
  where?: ReturnOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [ReturnOrderOrderByInput],
  })
  @Field(() => [ReturnOrderOrderByInput], { nullable: true })
  @Type(() => ReturnOrderOrderByInput)
  orderBy?: Array<ReturnOrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReturnOrderFindManyArgs };
