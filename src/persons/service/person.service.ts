import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Person } from '../model/person.entity';

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

  async create(person: Person): Promise<Person> {
    return await this.personRepository.save(person);
  }

  async update(person: Person): Promise<UpdateResult> {
    return await this.personRepository.update(person.id, person);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.personRepository.delete(id);
  }
}
