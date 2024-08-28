import { IsNotEmpty, IsString } from 'class-validator';
import { Video } from '../models';

export class AddVideoDto implements Video {
  @IsString()
  @IsNotEmpty()
  videoId: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  year: string;
  @IsString()
  @IsNotEmpty()
  type: string;
  @IsString()
  @IsNotEmpty()
  poster: string;
}
