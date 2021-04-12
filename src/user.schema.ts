import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Name extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

@Schema()
export class User extends Document {
  @Prop()
  names: [Name];
}

export const UserSchema = SchemaFactory.createForClass(User);
