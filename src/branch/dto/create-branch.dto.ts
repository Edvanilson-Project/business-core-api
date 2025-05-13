//import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsInt()
  @IsNotEmpty()
  companyId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
