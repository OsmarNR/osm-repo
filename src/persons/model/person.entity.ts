import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Person {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => Int, { nullable: true })
  @Column()
  age?: number;

  @Field({ nullable: true })
  @Column()
  address?: string;
}
