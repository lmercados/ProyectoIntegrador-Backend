import { Module } from '@nestjs/common';
import { SuplidorService } from './suplidor.service';
import { SuplidorController } from './suplidor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuplidorRepository } from './suplidor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SuplidorRepository])],
  controllers: [SuplidorController],
  providers: [SuplidorService],
})
export class SuplidorModule {}
