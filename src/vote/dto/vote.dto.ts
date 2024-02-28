import { ApiProperty } from '@nestjs/swagger';
import { IVote } from '../interfaces';
import { Types } from 'mongoose';

export class VoteDto implements IVote {
  @ApiProperty()
  user: Types.ObjectId[];

  @ApiProperty()
  petition: Types.ObjectId[];

  @ApiProperty()
  dateTime: Date;
}
