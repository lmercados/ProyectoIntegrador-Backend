import { Module } from '@nestjs/common';
import { AvisoTrrService } from './aviso.trr.service';
import { AvisoTrrController } from './aviso.trr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvisoTrrRepository } from './aviso.trr.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AvisoTrrRepository])],
  controllers: [AvisoTrrController],
  providers: [AvisoTrrService],
})
export class AvisoTrrModule {}
