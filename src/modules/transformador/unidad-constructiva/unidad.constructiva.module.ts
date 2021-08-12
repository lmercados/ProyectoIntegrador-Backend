import { Module } from '@nestjs/common';
import { UnidadConstructivaService } from './unidad.constructiva.service';
import { UnidadConstructivaController } from './unidad.constructiva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadConstructivaRepository } from './unidad.constructiva.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadConstructivaRepository])],
  controllers: [UnidadConstructivaController],
  providers: [UnidadConstructivaService],
})
export class UnidadConstructivaModule {}
