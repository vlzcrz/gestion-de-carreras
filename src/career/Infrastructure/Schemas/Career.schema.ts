import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Career extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  Name: string;
}

export const CareerSchema = SchemaFactory.createForClass(Career);
