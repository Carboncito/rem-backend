import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas';
import { SavedVideosService } from './saved-videos';
import { Video } from './models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private savedVideos: SavedVideosService,
  ) {}

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).lean().exec();
  }

  async addVideo(userId: string, video: Video) {
    this.savedVideos.addVideo(userId, video);
    return video;
  }
}
