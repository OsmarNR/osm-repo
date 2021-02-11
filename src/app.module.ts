import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/module/cats.module';
import { PersonModule } from './persons/module/person.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule, PersonModule],
})
export class AppModule {}
