import { PickType } from '@nestjs/swagger';
import { PetitionDto } from './petition.dto';
import { Vote } from 'src/vote/schema';

export class EditPetitionDto extends PickType(PetitionDto, [
  'name',
  'description',
] as const) {
  vote?: Vote;
}
