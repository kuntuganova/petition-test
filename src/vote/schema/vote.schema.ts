import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IVote } from '../interfaces/vote.interface';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Vote implements IVote {
  _id?: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'User' }])
  user: Types.ObjectId[];

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Petition' }])
  petition: Types.ObjectId[];

  @Prop({ default: Date.now })
  dateTime: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
