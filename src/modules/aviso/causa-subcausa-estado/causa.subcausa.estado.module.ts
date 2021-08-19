import { Module } from '@nestjs/common';
import { causaSubCausaEstadoService } from './causa.subcausa.estado.service';
import { causaSubCausaEstadoController } from './causa.subcausa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { causaSubCausaEstadoRepository } from './causa.subcausa.estado.repository';

@Module({
  imports: [TypeOrmModule.forFeature([causaSubCausaEstadoRepository])],
  controllers: [causaSubCausaEstadoController],
  providers: [causaSubCausaEstadoService],
})
export class causaSubCausaEstadoModule {}
