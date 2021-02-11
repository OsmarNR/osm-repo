import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/cats.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [{ name: 'Tom', age: 72, breed: 'Siamese' }];

  findAll(): Cat[] {
    return this.cats;
  }

  findByName(catName: string): Cat {
    return this.cats.find((cat) => cat.name === catName);
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  update(name: string, cat: Cat) {
    const index = this.cats.findIndex((cat) => cat.name === name);
    if (index !== -1) {
      this.cats.splice(index, 1, cat);
    }
  }

  delete(name: string) {
    const index = this.cats.findIndex((cat) => cat.name === name);
    if (index !== -1) {
      this.cats.splice(index, 1);
    }
  }
}
