import { Module } from '@nestjs/common';
import { CatsController } from '../controller/cats.controller';
import { CatService } from '../service/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
