import { PickType } from '@nestjs/swagger';
import { VoteDto } from './vote.dto';

export class EditVoteDto extends PickType(VoteDto, [
  'user',
  'petition',
] as const) {}
