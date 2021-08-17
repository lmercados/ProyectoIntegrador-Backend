import { Module } from '@nestjs/common';
import { causaSubCausaService } from './causa.subcausa.service';
import { causaSubCausaController } from './causa.subcausa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { causaSubCausaRepository } from './causa.subcausa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([causaSubCausaRepository])],
  controllers: [causaSubCausaController],
  providers: [causaSubCausaService],
})
export class causaSubCausaModule {}
