import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateFaseDto {
  @IsNumber()
  readonly faseId: number;
  @IsString()
  @MaxLength(3, { message: 'this fase is not valid' })
  readonly fase: string;
}
