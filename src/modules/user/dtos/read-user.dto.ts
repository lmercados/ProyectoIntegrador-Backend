import { Exclude, Expose, Type } from 'class-transformer';
import { IsEmail, IsNumber } from 'class-validator';
import { readRoleDto } from '../../roles/dtos';
import { readUserDetailsDto } from './read-user-details';

@Exclude()
export class readUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsEmail()
  readonly email: string;

  @Expose()
  @IsEmail()
  readonly username: string;

  @Expose()
  @Type((type) => readUserDetailsDto)
  readonly details: readUserDetailsDto;

  @Expose()
  @Type((type) => readRoleDto)
  readonly Roles: readRoleDto;
}
