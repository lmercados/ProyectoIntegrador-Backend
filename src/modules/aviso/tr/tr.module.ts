import { Module } from '@nestjs/common';
import { TransformadorController } from './tr.controller';
import { TransformadorRepository } from './tr.repository';
import { TransformadorService } from './tr.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([TransformadorRepository])],
  controllers: [TransformadorController],
  providers: [TransformadorService],
})
export class TransformadorModule {}
