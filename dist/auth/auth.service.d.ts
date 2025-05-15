import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Omit<User, 'password'> | null>;
    login(user: {
        id: number;
        email: string;
        name: string;
        roles?: (string | {
            name: string;
        })[];
    }): Promise<{
        access_token: string;
    }>;
}
