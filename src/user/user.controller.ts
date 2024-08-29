import { Body, Controller, Post, Request } from '@nestjs/common';
import { AddVideoDto } from './dto';
import { UserService } from './user.service';
import { UserTokenPayload } from 'src/models';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('watchlist')
  async addVideo(@Body() addVideoDto: AddVideoDto, @Request() req) {
    const user: UserTokenPayload = req.user;
    return this.userService.add(user.id, addVideoDto);
  }
}
