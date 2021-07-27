import { Module } from '@nestjs/common';
import { EfectoService } from './efecto.service';
import { EfectoController } from './efecto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EfectoRepository } from './efecto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EfectoRepository])],
  controllers: [EfectoController],
  providers: [EfectoService],
})
export class EfectoModule {}
