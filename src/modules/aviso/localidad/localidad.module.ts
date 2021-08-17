import { Module } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalidadRepository } from './localidad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LocalidadRepository])],
  controllers: [LocalidadController],
  providers: [LocalidadService],
})
export class LocalidadModule {}
