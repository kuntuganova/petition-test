import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, TokenDto } from './dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(data: LoginDto): Promise<TokenDto> {
    const { email, password } = data;
    const user = await this.userService.findOneByEmail(email);
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new BadRequestException('Email or password is incorrect');
    }

    const payload = {
      email,
      iat: Date.now(),
      exp: Date.now() + 1000 * 60 * 60,
    };

    const token = this.jwtService.sign(payload);

    return { token };
  }

  async validate(token: string): Promise<User> {
    try {
      const payload = this.jwtService.decode(token.split(' ').pop());
      console.log(payload);

      if (Date.now() > payload.exp) {
        throw new UnauthorizedException('Unauthorized');
      }

      const user = this.userService.findOneByEmail(payload.email);
      return user;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
