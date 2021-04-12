import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Name extends Document {
  firstName: string;

  lastName: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);

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
