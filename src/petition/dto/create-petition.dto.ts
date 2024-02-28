import { PickType } from '@nestjs/swagger';
import { PetitionDto } from './petition.dto';

export class CreatePetitionDto extends PickType(PetitionDto, [
  'name',
  'description',
] as const) {}
