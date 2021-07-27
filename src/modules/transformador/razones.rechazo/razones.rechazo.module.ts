import { Module } from '@nestjs/common';
import { RazonesRechazoService } from './razones.rechazo.service';
import { RazonesRechazoController } from './razones.rechazo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazonesRechazoRepository } from './razones.rechazo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RazonesRechazoRepository])],
  controllers: [RazonesRechazoController],
  providers: [RazonesRechazoService],
})
export class RazonesRechazoModule {}
