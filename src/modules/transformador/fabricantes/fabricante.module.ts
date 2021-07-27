import { Module } from '@nestjs/common';
import { FabricanteService } from './fabricante.service';
import { FabricanteController } from './fabricante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricanteRepository } from './fabricante.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FabricanteRepository])],
  controllers: [FabricanteController],
  providers: [FabricanteService],
})
export class FabricanteModule {}
