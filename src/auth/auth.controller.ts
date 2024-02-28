import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // @Post('login')
  // @UseGuards(AuthGuard('jwt'))
  // async login(@Request() req) {
  //   return {
  //     access_token: await this.userService.generateJwtToken(req.user),
  //   };
  // }
}
