import { Module } from '@nestjs/common';
import { RecomendacionService } from './recomendacion.service';
import { RecomendacionController } from './recomendacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecomendacionRepository } from './recomendacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RecomendacionRepository])],
  controllers: [RecomendacionController],
  providers: [RecomendacionService],
})
export class ApoyoModule {}
