import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IPetition } from '../interfaces';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Petition implements IPetition {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Vote' }])
  vote: Types.ObjectId[];

  save?();
}

export const PetitionSchema = SchemaFactory.createForClass(Petition);
