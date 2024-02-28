import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IPetition } from '../interfaces';

@Schema()
export class Petition implements IPetition {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop({ default: 0 })
  vote: number;
}

export const PetitionSchema = SchemaFactory.createForClass(Petition);
