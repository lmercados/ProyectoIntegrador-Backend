import { Module } from '@nestjs/common';
import { EstadosService } from './estado.service';
import { EstadosController } from './estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosRepository } from './estado.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EstadosRepository])],
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class AvisoEstadoModule {}
