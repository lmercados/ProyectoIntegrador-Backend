import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CapacidadService } from './capacidad.service';
import { Capacidad } from './entities/capacidad.entity';

@Controller('capacidad')
export class CapacidadController {
  constructor(private readonly _capacidadService: CapacidadService) {}

  @Post()
  create(@Body() capacidad: Capacidad) {
    return this._capacidadService.create(capacidad);
  }

  @Get()
  findAll() {
    return this._capacidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') capacidadId: string) {
    return this._capacidadService.findOne(+capacidadId);
  }
  @Get(':id')
  findCapacidad(@Param('id') capacidadId: string) {
    return this._capacidadService.findCapacidad(+capacidadId);
  }
  @Put(':id')
  update(@Param('id') capacidadId: string, @Body() capacidad: Capacidad) {
    return this._capacidadService.update(+capacidadId, capacidad);
  }

  @Delete(':id')
  remove(@Param('id') capacidadId: string) {
    return this._capacidadService.remove(+capacidadId);
  }
}
