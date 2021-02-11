import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.entity';

@Controller('person')
export class PersonController {
  constructor(private readonly personsService: PersonService) {}

  @Get()
  findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id): Promise<Person> {
    return this.personsService.findById(id);
  }

  @Post()
  async create(@Body() personData: Person): Promise<any> {
    return this.personsService.create(personData);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() personData: Person): Promise<any> {
    personData.id = Number(id);
    return this.personsService.update(personData);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.personsService.delete(id);
  }
}
