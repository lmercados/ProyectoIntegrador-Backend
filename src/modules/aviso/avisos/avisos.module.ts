import { Module } from '@nestjs/common';
import { AvisosController } from './avisos.controller';
import { AvisosRepository } from './avisos.repository';
import { AvisosService } from './avisos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([AvisosRepository])],
  controllers: [AvisosController],
  providers: [AvisosService],
})
export class AvisoModule {}
