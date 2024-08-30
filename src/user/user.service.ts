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

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).lean().exec();
  }

  async addToWatchlist(userId: string, video: Video) {
    const user = await this.watchlist.add(userId, video);
    return user.watchlist;
  }

  getWatchlist(userId: string) {
    return this.watchlist.get(userId);
  }

  deleteVideo(userId: string, videoId: string) {
    return this.watchlist.delete(userId, videoId);
  }
}
