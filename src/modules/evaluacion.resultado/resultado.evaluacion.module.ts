import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.evaluacion.service';
import { ResultadoController } from './resultado.evaluacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoRepository } from './resultado.evaluacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultadoRepository])],
  controllers: [ResultadoController],
  providers: [ResultadoService],
})
export class ResultadoModule {}
