import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PersonController } from '../controller/person.controller';
import { PersonService } from '../service/person.service';
import { personProviders } from '../provider/person.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [...personProviders, PersonService],
})
export class PersonModule {}
