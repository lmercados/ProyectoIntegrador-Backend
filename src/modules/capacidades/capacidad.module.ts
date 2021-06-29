import { Module } from '@nestjs/common';
import { CapacidadService } from './capacidad.service';
import { CapacidadController } from './capacidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacidadRepository } from './capacidad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CapacidadRepository])],
  controllers: [CapacidadController],
  providers: [CapacidadService],
})
export class CapacidadModule {}
