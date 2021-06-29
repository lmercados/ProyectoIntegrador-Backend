import { Module } from '@nestjs/common';
import { TensionSecundariaService } from './tension.secundaria.service';
import { TensionSecundariaController } from './tension.secundaria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TensionSecundariaRepository } from './tension.secundaria.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TensionSecundariaRepository])],
  controllers: [TensionSecundariaController],
  providers: [TensionSecundariaService],
})
export class TensionSecundariaModule {}
