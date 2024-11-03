import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubjectRelationship extends Document {
  @Prop({
    index: true,
  })
  SubjectCode: string;

  @Prop({
    index: true,
  })
  PreSubjectCode: string;
}

export const SubjectRelationshipSchema =
  SchemaFactory.createForClass(SubjectRelationship);
