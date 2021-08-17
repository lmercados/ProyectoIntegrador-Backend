import { Module } from '@nestjs/common';
import { CausasService } from './causa.service';
import { CausasController } from './causa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CausasRepository } from './causa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CausasRepository])],
  controllers: [CausasController],
  providers: [CausasService],
})
export class CausaModule {}
