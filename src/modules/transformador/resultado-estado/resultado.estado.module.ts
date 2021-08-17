import { Module } from '@nestjs/common';
import { resultadoEstadoService } from './resultado.estado.service';
import { resultadoEstadoController } from './resultado.estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resultadoEstadoRepository } from './resultado.estado.repository';

@Module({
  imports: [TypeOrmModule.forFeature([resultadoEstadoRepository])],
  controllers: [resultadoEstadoController],
  providers: [resultadoEstadoService],
})
export class resultadoEstadoModule {}
