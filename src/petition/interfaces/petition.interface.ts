import { ObjectId } from 'mongoose';

export interface IPetition {
  _id?: ObjectId;
  name: string;
  description: string;
  creationDate: Date;
  vote: number;
}
