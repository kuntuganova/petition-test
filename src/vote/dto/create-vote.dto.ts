import { PickType } from '@nestjs/swagger';
import { VoteDto } from './vote.dto';

export class CreateVoteDto extends PickType(VoteDto, [
  'user',
  'petition',
] as const) {}
