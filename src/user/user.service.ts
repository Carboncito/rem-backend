import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas';
import { WatchlistService } from './watchlist';
import { Video } from './models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private watchlist: WatchlistService,
  ) {}

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).lean().exec();
  }

  async add(userId: string, video: Video) {
    this.watchlist.add(userId, video);
    return video;
  }
}
