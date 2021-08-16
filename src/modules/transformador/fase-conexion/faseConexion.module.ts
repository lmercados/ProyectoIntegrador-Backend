import { Module } from '@nestjs/common';
import { faseConexionService } from './faseConexion.service';
import { faseConexionController } from './faseConexion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { faseConexionRepository } from './faseConexion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([faseConexionRepository])],
  controllers: [faseConexionController],
  providers: [faseConexionService],
})
export class faseConexionModule {}
