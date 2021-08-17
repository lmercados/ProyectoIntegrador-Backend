import { Module } from '@nestjs/common';
import { municipioLocalidadService } from './municipio.localidad.service';
import { municipioLocalidadController } from './municipio.localidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {municipioLocalidadRepository } from './municipio.localidad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([municipioLocalidadRepository])],
  controllers: [municipioLocalidadController],
  providers: [municipioLocalidadService],
})
export class provinciaMunicipioModule{}
