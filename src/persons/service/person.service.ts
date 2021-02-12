import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Person } from '../model/person.entity';
import { PersonInput } from '../dto/add-person.input';
import { UpdatePersonInput } from '../dto/update-person.input';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPOSITORY') private personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find();
  }

  async findById(id): Promise<Person> {
    return await this.personRepository.findOne(id);
  }

  async create(personInput: PersonInput): Promise<Person> {
    return await this.personRepository.save(personInput);
  }

  async update(id: number, person: UpdatePersonInput): Promise<Person> {
    const data = await this.personRepository.findOne(id);
    return await this.personRepository.save({ ...data, ...person });
  }

  async delete(id): Promise<Boolean> {
    const data = await this.personRepository.delete(id);
    return data.affected === 1;
  }
}
