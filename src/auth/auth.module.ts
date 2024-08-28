import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user';
import { BcryptService } from 'src/utils';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    AuthService,
    BcryptService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
