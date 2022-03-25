import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName?: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email?: string;

  @IsPhoneNumber()
  @IsOptional()
  readonly mobile?: string;
}
