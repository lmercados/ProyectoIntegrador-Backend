import { Module } from '@nestjs/common';
import { TensionPrimariaService } from './tension.primaria.service';
import { TensionPrimariaController } from './tension.primaria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TensionPrimariaRepository } from './tension.primaria..repository';

@Module({
  imports: [TypeOrmModule.forFeature([TensionPrimariaRepository])],
  controllers: [TensionPrimariaController],
  providers: [TensionPrimariaService],
})
export class TensionModule {}
