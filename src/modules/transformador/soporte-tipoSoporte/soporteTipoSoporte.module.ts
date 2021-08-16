import { Module } from '@nestjs/common';
import { soporteTipoSoporteService } from './soporteTipoSoporte.service';
import { soporteTipoSoporteController } from './soporteTipoSoporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { soporteTipoSoporteRepository } from './soporteTipoSoporte.repository';

@Module({
  imports: [TypeOrmModule.forFeature([soporteTipoSoporteRepository])],
  controllers: [soporteTipoSoporteController],
  providers: [soporteTipoSoporteService],
})
export class soporteTipoSoporteModule {}
