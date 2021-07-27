import { Module } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { PropiedadController } from './propiedad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropiedadRepository } from './propiedad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropiedadRepository])],
  controllers: [PropiedadController],
  providers: [PropiedadService],
})
export class PropiedadModule {}
