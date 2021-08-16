import { Module } from '@nestjs/common';
import { faseCapacidadService } from './faseCapacidad.service';
import { faseCapacidadController } from './faseCapacidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { faseCapacidadRepository } from './faseCapacidad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([faseCapacidadRepository])],
  controllers: [faseCapacidadController],
  providers: [faseCapacidadService],
})
export class faseCapacidadModule {}
