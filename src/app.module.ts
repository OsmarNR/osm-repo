import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PersonModule } from './persons/module/person.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PersonModule,
  ],
})
export class AppModule {}
