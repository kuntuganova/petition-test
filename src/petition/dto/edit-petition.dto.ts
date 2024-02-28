import { PickType } from '@nestjs/swagger';
import { PetitionDto } from './petition.dto';

export class EditPetitionDto extends PickType(PetitionDto, [
  'name',
  'description',
] as const) {}
