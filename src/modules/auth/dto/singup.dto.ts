import { IsNotEmpty, IsString } from 'class-validator';
export class SingupDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  email: string;
}
