import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from '../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const userForLogin = {
      id: user.id,
      email: user.email,
      name: user.name,
      roles: user.roles?.map((role) => role.name),
    };

    const { access_token } = await this.authService.login(userForLogin);
    return {
      access_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roles: user.roles || [], // Incluindo roles, caso existam
      },
    };
  }
}
