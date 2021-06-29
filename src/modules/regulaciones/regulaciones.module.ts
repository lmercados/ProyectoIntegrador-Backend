import { Module } from '@nestjs/common';
import { RegulacionService } from './regulaciones.service';
import { RegulacionController } from './regulaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegulacionRepository } from './regulaciones.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RegulacionRepository])],
  controllers: [RegulacionController],
  providers: [RegulacionService],
})
export class RegulacionModule {}
