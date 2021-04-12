import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Name extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);

@Schema()
export class User extends Document {
  @Prop([Name])
  names: [Name];
}

export const UserSchema = SchemaFactory.createForClass(User);
