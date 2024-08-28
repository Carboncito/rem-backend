import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true, type: String, unique: true })
  email: string;
  @Prop({ required: true, type: String })
  password: string;
  @Prop({ type: String })
  name?: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
