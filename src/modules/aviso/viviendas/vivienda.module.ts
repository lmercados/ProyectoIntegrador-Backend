import { Module } from '@nestjs/common';
import { ViviendaService } from './vivienda.service';
import { ViviendaController } from './vivienda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViviendaRepository } from './vivienda.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ViviendaRepository])],
  controllers: [ViviendaController],
  providers: [ViviendaService],
})
export class ViviendaModule {}
