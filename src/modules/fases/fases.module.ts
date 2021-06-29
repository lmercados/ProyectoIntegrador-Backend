import { Module } from '@nestjs/common';
import { FasesService } from './fases.service';
import { FasesController } from './fases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaseRepository } from './fases.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FaseRepository])],
  controllers: [FasesController],
  providers: [FasesService],
})
export class FasesModule {}
