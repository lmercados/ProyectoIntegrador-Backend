import { Module } from '@nestjs/common';
import { ApoyoService } from './apoyo.service';
import { ApoyoController } from './apoyo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoyoRepository } from './apoyo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApoyoRepository])],
  controllers: [ApoyoController],
  providers: [ApoyoService],
})
export class ApoyoModule {}
