import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionRepository } from './ubicacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionRepository])],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
