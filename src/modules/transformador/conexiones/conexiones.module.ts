import { Module } from '@nestjs/common';
import { ConexionService } from './conexiones.service';
import { ConexionController } from './conexiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexionRepository } from './conexiones.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ConexionRepository])],
  controllers: [ConexionController],
  providers: [ConexionService],
})
export class ConexionModule {}
