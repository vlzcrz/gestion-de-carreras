import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subject extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  Code: string;

  @Prop({
    index: true,
  })
  Name: string;

  @Prop({
    index: true,
  })
  Department: string;

  @Prop({
    index: true,
  })
  Credits: number;

  @Prop({
    index: true,
  })
  Semester: number;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
