import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { AddVideoDto } from './dto';
import { UserService } from './user.service';
import { UserTokenPayload } from 'src/models';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('watchlist')
  async addToWatchlist(@Body() addVideoDto: AddVideoDto, @Request() req) {
    const user: UserTokenPayload = req.user;
    return this.userService.addToWatchlist(user.id, addVideoDto);
  }

  @Get('watchlist')
  async getWatchlist(@Request() req) {
    const user: UserTokenPayload = req.user;
    return (await this.userService.getWatchlist(user.id)).watchlist;
  }

  @Delete('watchlist/:videoId')
  async deleteVideo(@Request() req, @Param('videoId') videoId) {
    const user: UserTokenPayload = req.user;
    return (await this.userService.deleteVideo(user.id, videoId)).watchlist;
  }
}
