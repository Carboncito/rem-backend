import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas';
import { Video } from '../models';

@Injectable()
export class SavedVideosService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  addVideo(userId: string, video: Video) {
    return this.userModel
      .findByIdAndUpdate(
        userId,
        {
          $push: { savedVideos: video },
        },
        { new: true },
      )
      .lean()
      .exec();
  }
}
