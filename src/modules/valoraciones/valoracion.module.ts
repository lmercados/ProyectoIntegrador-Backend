import { Module } from '@nestjs/common';
import { ValoracionService } from './valoracion.service';
import { ValoracionController } from './valoracion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValoracionRepository } from './valoracion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ValoracionRepository])],
  controllers: [ValoracionController],
  providers: [ValoracionService],
})
export class ValoracionModule {}
