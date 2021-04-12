import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Name {
  firstName: string;

  lastName: string;

  constructor(partial: Partial<Name>) {
    Object.assign(this, partial);
  }

  toObject() {
    return this;
  }
}

@Schema()
export class User extends Document {
  @Prop({
    type: [
      {
        firstname: String,
        lastName: String,
      },
    ],
  })
  names: [Name];
}

export const UserSchema = SchemaFactory.createForClass(User);
