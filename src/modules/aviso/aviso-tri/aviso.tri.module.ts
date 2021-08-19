import { Module } from '@nestjs/common';
import { AvisoTriService } from './aviso.tri.service';
import { AvisoTriController } from './aviso.tri.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvisoTriRepository } from './aviso.tri.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AvisoTriRepository])],
  controllers: [AvisoTriController],
  providers: [AvisoTriService],
})
export class AvisoTriModule {}
