import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PersonService } from '../service/person.service';
import { personProviders } from '../provider/person.providers';
import { PersonResolver } from '../resolver/person.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [...personProviders, PersonService, PersonResolver],
})
export class PersonModule {}
