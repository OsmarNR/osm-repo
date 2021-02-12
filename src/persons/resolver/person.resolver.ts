import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Person } from '../model/person.entity';
import { PersonService } from '../service/person.service';
import { GetPersonArgs } from '../dto/get-person.args';
import { PersonInput } from '../dto/add-person.input';
import { UpdatePersonInput } from '../dto/update-person.input';

@Resolver((of) => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query((returns) => String, { name: 'hello' })
  async getHelloGraphQL() {
    return 'Welcome to NestJS and GraphQL';
  }

  @Query((returns) => Person, { name: 'person' })
  async getPerson(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    return this.personService.findById(id);
  }

  @Query((returns) => [Person], { name: 'persons' })
  async getPersons(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Mutation((returns) => Person)
  async addPerson(
    @Args('addPerson') personInput: PersonInput,
  ): Promise<Person> {
    return this.personService.create(personInput);
  }

  @Mutation((returns) => Person)
  async updatePerson(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePerson') updatePersonInput: UpdatePersonInput,
  ): Promise<any> {
    return this.personService.update(id, updatePersonInput);
  }

  @Query((returns) => Boolean)
  async deletePersons(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Boolean> {
    return this.personService.delete(id);
  }
}
