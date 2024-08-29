import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class Watchlist {
  @Prop({ required: true, type: String })
  videoId: string;
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  year: string;
  @Prop({ required: true, type: String })
  type: string;
  @Prop({ required: true, type: String })
  poster: string;
}

@Schema()
export class User {
  @Prop({ required: true, type: String, unique: true })
  email: string;
  @Prop({ required: true, type: String })
  password: string;
  @Prop({ type: String })
  name?: string;
  @Prop({ type: String })
  phone?: string;
  @Prop({ type: [Watchlist], default: [] })
  watchlist: Watchlist[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
