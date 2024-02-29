import { Types } from 'mongoose';

export class IVote {
  _id?: string;
  user: Types.ObjectId[];
  petition: Types.ObjectId[];
  dateTime: Date;
}
