import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, TokenDto } from './dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() login: LoginDto): Promise<TokenDto> {
    return await this.authService.login(login);
  }
}
