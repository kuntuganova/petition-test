import { ObjectId } from 'mongoose';
import { IUser } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements IUser {
  @ApiProperty()
  _id?: ObjectId;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
