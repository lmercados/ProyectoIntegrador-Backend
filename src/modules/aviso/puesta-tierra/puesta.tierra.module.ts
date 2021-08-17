import { Module } from '@nestjs/common';
import { puestaTierraService } from './puesta.tierra.service';
import { puestaTierraController } from './puesta.tierra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { puestaTierraRepository } from './puesta.tierra.repository';

@Module({
  imports: [TypeOrmModule.forFeature([puestaTierraRepository])],
  controllers: [puestaTierraController],
  providers: [puestaTierraService],
})
export class puestaTierraModule {}
