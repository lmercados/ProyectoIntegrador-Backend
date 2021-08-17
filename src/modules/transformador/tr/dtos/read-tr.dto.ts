import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { readFabricanteDto } from '../../fabricantes/dtos/read-fabricante.dto';


@Exclude()

export class readTrDto {
  @Expose()
  @IsNumber()
  readonly transformadorId: number;
  @Expose()
  @IsString()
  readonly serie: string;
  @Expose()
  @IsString()
  @Type((type) => readFabricanteDto)
  readonly fabricante: string;

}
