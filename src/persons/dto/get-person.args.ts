import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetPersonArgs {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  address?: string;
}
