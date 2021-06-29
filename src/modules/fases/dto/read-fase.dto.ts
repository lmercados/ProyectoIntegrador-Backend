import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, MaxLength } from 'class-validator';

@Exclude()
export class ReadFaseDto {
  @Expose()
  @IsNumber()
  readonly faseId: number;
  @Expose()
  @IsString()
  @MaxLength(3, { message: 'this fase is not valid' })
  readonly fase: string;
}
