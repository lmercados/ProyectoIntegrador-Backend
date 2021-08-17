import { Module } from '@nestjs/common';
import { provinciaMunicipioService } from './provincia-municipio.service';
import { provinciaMunicipioController } from './provincia-municipio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {provinciaMunicipioRepository } from './provincia-municipio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([provinciaMunicipioRepository])],
  controllers: [provinciaMunicipioController],
  providers: [provinciaMunicipioService],
})
export class provinciaMunicipioModule {}
