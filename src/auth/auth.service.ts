import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserTokenPayload } from 'src/models';
import { UserService } from 'src/user';
import { BcryptService } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private bcryptService: BcryptService,
  ) {}

  async signIn(email: string, password: string): Promise<{ token: string }> {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new NotFoundException();

    const isValidPassword = this.bcryptService.compare(password, user.password);

    if (!isValidPassword) throw new NotFoundException();

    const payload: UserTokenPayload = {
      id: user._id as string,
      email: user.email,
    };

    return { token: await this.jwtService.signAsync(payload) };
  }
}
