import { Module } from '@nestjs/common';
import { TransformadorHistoryController } from './tr.history.controller';
import { TransformadorHistoryRepository } from './tr.history.repository';
import { TransformadorHistoryService } from './tr.history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([TransformadorHistoryRepository])],
  controllers: [TransformadorHistoryController],
  providers: [TransformadorHistoryService],
})
export class TransformadorHistoryModule {}
