import { IsNotEmpty } from 'class-validator';
import { SignInUserDto } from './sign-in-user.dto';

export class SignUpUserDto extends SignInUserDto {
  @IsNotEmpty()
  name: string;
}
