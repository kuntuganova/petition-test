import { ApiProperty } from '@nestjs/swagger';
import { IPetition } from '../interfaces';
import { ObjectId } from 'mongoose';

export class PetitionDto implements IPetition {
  @ApiProperty()
  _id?: ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  creationDate: Date;

  @ApiProperty()
  vote: number;
}
