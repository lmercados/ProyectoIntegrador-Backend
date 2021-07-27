import { Module } from '@nestjs/common';
import { SoporteService } from './soportes.service';
import { SoporteController } from './soportes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoporteRepository } from './soportes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SoporteRepository])],
  controllers: [SoporteController],
  providers: [SoporteService],
})
export class SoporteModule {}
