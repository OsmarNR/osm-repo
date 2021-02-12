import { InputType, PartialType } from '@nestjs/graphql';
import { PersonInput } from './add-person.input';

@InputType()
export class UpdatePersonInput extends PartialType(PersonInput) {}
