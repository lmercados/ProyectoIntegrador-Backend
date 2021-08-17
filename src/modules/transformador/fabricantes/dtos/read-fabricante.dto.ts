import { Expose,Exclude } from 'class-transformer';
import {IsString } from 'class-validator';
import { Fabricante } from '../entities/fabricante.entity';


@Exclude()
export class readFabricanteDto {
  @Expose()
  @IsString()
  readonly fabricante: string;
 
}
