import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas';
import { Video } from '../models';

@Injectable()
export class WatchlistService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  add(userId: string, video: Video) {
    return this.userModel
      .findByIdAndUpdate(
        userId,
        {
          $push: { watchlist: video },
        },
        { new: true },
      )
      .lean()
      .exec();
  }

  get(userId: string) {
    return this.userModel.findById(userId).select('watchlist').lean().exec();
  }

  delete(userId: string, videoId: string) {
    return this.userModel
      .findByIdAndUpdate(
        userId,
        {
          $pull: { watchlist: { _id: videoId } },
        },
        { new: true },
      )
      .select('watchlist')
      .lean()
      .exec();
  }
}
