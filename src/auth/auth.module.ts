import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user';
import { BcryptService } from 'src/utils';

@Module({
  imports: [UserModule],
  providers: [AuthService, BcryptService],
  controllers: [AuthController],
})
export class AuthModule {}
