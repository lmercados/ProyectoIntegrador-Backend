import { Module } from '@nestjs/common';
import { tipoReparacionService } from './tipo.reparacion.service';
import { tipoReparacionController } from './tipo.reparacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tipoReparacionRepository } from './tipo.reparacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([tipoReparacionRepository])],
  controllers: [tipoReparacionController],
  providers: [tipoReparacionService],
})
export class TipoReparacionModule {}
