import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PersonInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  age: number;

  @Field({ nullable: true })
  address: string;
}
