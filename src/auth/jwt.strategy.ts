import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface JwtPayload {
  sub: string;
  email: string;
  roles: Array<string | { name: string }>;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('ACCESS_TOKEN_SECRET_KEY')!,
    });
  }

  validate(payload: JwtPayload) {
    const roleNames = payload.roles.map((role) =>
      typeof role === 'string' ? role : role.name,
    );

    return { sub: payload.sub, email: payload.email, roles: roleNames };
  }
}
