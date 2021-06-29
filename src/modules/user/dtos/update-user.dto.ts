import { IsEmail } from 'class-validator';

export class updateUserDto {
  @IsEmail()
  readonly username: string;
}
