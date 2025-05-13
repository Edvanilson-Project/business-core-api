import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsInt()
  @IsNotEmpty()
  branchId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
