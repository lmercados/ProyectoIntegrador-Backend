import { Module } from '@nestjs/common';
import { CircuitoService } from './circuito.service';
import { CircuitoController } from './circuito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircuitoRepository } from './circuito.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CircuitoRepository])],
  controllers: [CircuitoController],
  providers: [CircuitoService],
})
export class CircuitoModule {}
