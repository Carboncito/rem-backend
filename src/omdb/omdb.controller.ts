import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Controller('omdb')
export class OmdbController {
  constructor(private omdbService: OmdbService) {}

  @Get()
  async getVideos(@Query() query) {
    return this.omdbService.getVideos(query);
  }
}
