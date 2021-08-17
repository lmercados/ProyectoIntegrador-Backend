import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './municipio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioRepository } from './municipio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioRepository])],
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
