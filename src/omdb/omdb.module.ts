import { Module } from '@nestjs/common';
import { OmdbController } from './omdb.controller';
import { OmdbService } from './omdb.service';

@Module({
  providers: [OmdbService],
  controllers: [OmdbController],
})
export class OmdbModule {}
