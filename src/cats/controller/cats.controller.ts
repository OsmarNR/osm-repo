import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatService } from '../service/cats.service';
import { Cat } from '../interface/cats.interface';
import { Cats } from '../model/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Cat> {
    return this.catsService.findByName(name);
  }

  @Post()
  async create(@Body() createCat: Cats) {
    this.catsService.create(createCat);
  }

  @Put(':name')
  async update(@Param('name') name: string, @Body() createCat: Cats) {
    this.catsService.update(name, createCat);
  }

  @Delete(':name')
  async delete(@Param('name') name: string) {
    this.catsService.delete(name);
  }
}
