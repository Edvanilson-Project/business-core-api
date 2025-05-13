import {
  IsString,
  IsOptional,
  IsDateString,
  IsBoolean,
  IsEmail,
  IsInt,
  Length,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsInt()
  registrationNumber: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(11, 14)
  cpf: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  issuingAuthority?: string;

  @IsOptional()
  @IsString()
  pis?: string;

  @IsOptional()
  @IsString()
  workCardNumber?: string;

  @IsOptional()
  @IsString()
  workCardSeries?: string;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: Date;

  @IsOptional()
  @IsString()
  maritalStatus?: string;

  @IsOptional()
  @IsString()
  educationLevel?: string;

  @IsOptional()
  @IsString()
  voterRegistration?: string;

  @IsOptional()
  @IsString()
  driverLicense?: string;

  @IsOptional()
  @IsString()
  driverLicenseCategory?: string;

  @IsOptional()
  @IsDateString()
  driverLicenseExpiration?: Date;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  bankName?: string;

  @IsOptional()
  @IsString()
  bankAccountNumber?: string;

  @IsOptional()
  @IsString()
  bankAgencyNumber?: string;

  @IsOptional()
  @IsString()
  healthInsurance?: string;

  @IsDateString()
  hireDate: Date;

  @IsOptional()
  @IsDateString()
  terminationDate?: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
