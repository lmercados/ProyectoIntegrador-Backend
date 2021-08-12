import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoRepository } from './proyecto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProyectoRepository])],
  controllers: [ProyectoController],
  providers: [ProyectoService],
})
export class ProyectoModule {}
