import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor() {}

  // async comparePassword(
  //   enteredPassword: string,
  //   hashedPassword: string,
  // ): Promise<boolean> {
  //   return bcrypt.compare(enteredPassword, hashedPassword);
  // }

  // async generateJwtToken(user: any): Promise<string> {
  //   const payload = { sub: user._id, username: user.email };
  //   return this.jwtService.sign(payload);
  // }
}
