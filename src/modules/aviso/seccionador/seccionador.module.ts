import { Module } from '@nestjs/common';
import { SeccionadorService } from './seccionador.service';
import { SeccionadorController } from './seccionador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeccionadorRepository } from './seccionador.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SeccionadorRepository])],
  controllers: [SeccionadorController],
  providers: [SeccionadorService],
})
export class SeccionadorModule {}
