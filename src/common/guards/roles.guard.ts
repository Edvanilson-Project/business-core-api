import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

interface UserWithRoles {
  roles?: string[];
}

interface RequestWithUser extends Request {
  user?: UserWithRoles;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) {
      return false;
    }

    if (!user.roles || !Array.isArray(user.roles)) {
      return false;
    }

    const hasRole = requiredRoles.some((role) => user.roles!.includes(role));
    if (!hasRole) {
      console.warn('Usuário não possui nenhuma das roles exigidas');
    }

    return hasRole;
  }
}
