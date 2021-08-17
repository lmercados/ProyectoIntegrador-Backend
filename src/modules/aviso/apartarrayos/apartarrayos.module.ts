import { Module } from '@nestjs/common';
import { ApartarrayosService } from './apartarrayos.service';
import { ApartarrayosController } from './apartarrayos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartarrayosRepository } from './apartarrayos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApartarrayosRepository])],
  controllers: [ApartarrayosController],
  providers: [ApartarrayosService],
})
export class ApartarrayosModule {}
