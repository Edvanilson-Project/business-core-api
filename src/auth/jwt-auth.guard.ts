import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../common/decorators/public.decorator';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const isAuthenticated = await super.canActivate(context);

    if (!isAuthenticated) {
      console.error('Usuário não autenticado');
      throw new UnauthorizedException('Usuário não autenticado');
    }

    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as { roles?: string[] };

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    if (
      !user ||
      !user.roles ||
      !user.roles.some((role) => requiredRoles.includes(role))
    ) {
      console.error('Acesso negado: Role insuficiente');
      throw new UnauthorizedException('Acesso negado: Role insuficiente');
    }

    return true;
  }
}
