import { Injectable } from '@nestjs/common';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class BcryptService {
  hashString(str: string): string {
    const salt = genSaltSync(Number(process.env.BCRYPT_ROUNDS));
    return hashSync(str, salt);
  }

  compare(str: string, hash: string): boolean {
    return compareSync(str, hash);
  }
}
