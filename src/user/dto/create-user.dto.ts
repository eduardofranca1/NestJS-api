import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  // @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  github: string;

  @IsNotEmpty()
  linkedin: string;

  @IsNotEmpty()
  @MaxLength(255)
  message: string;

  @IsNotEmpty()
  level: number;
}
