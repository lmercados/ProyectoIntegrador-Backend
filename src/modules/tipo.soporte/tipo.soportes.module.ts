import { Module } from '@nestjs/common';
import { TipoSoporteService } from './tipo.soportes.service';
import { TipoSoporteController } from './tipo.soportes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSoporteRepository } from './tipo.soportes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSoporteRepository])],
  controllers: [TipoSoporteController],
  providers: [TipoSoporteService],
})
export class TipoSoporteModule {}
