import { Types } from 'mongoose';

export class IVote {
  user: Types.ObjectId[];
  petition: Types.ObjectId[];
  dateTime: Date;
}
