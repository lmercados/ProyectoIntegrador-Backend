import { Module } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { EstadoController } from './estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoRepository } from './estado.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoRepository])],
  controllers: [EstadoController],
  providers: [EstadoService],
})
export class EstadoModule {}
