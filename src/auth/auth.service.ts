import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    try {
      // Validação de entrada
      if (!email || !password) {
        console.error('Email or password is missing');
        return null;
      }

      // Busca o usuário pelo email
      const user = await this.userService.findByEmail(email);

      if (!user) {
        console.error(`User with email ${email} not found`);
        return null;
      }

      if (!user.password) {
        console.error(`Password is missing for user with email ${email}`);
        return null;
      }

      // Comparando a senha informada com a armazenada (criptografada)
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.error(`Invalid password for user with email ${email}`);
        return null;
      }

      // Remover a senha do objeto de resposta
      const { password: _password, ...result } = user;

      return result;
    } catch (error) {
      console.error('Unexpected error during user validation:', error);
      throw new Error('Error during user validation');
    }
  }

  // Realiza o login do usuário e gera o token JWT
  async login(user: {
    id: number;
    email: string;
    name: string;
    roles?: (string | { name: string })[];
  }): Promise<{ access_token: string }> {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: Array.isArray(user.roles)
        ? user.roles.map((role) =>
            typeof role === 'string' ? role : role.name,
          )
        : [],
    };

    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
