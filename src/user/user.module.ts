import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas';
import { UserService } from './user.service';
import { SavedVideosService } from './watchlist/watchlist.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, SavedVideosService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
