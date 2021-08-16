import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { faseCapacidadService } from './faseCapacidad.service';
import {  faseCapacidad} from './entities/faseCapacidad.entity';

@Controller('fase-capacidad')
export class faseCapacidadController {
  constructor(private readonly _faseCapacidadService: faseCapacidadService) {}

  @Post()
  create(@Body() faseCapacidad: faseCapacidad) {
    return this._faseCapacidadService.create(faseCapacidad);
  }

  @Get()
  findAll() {
    return this._faseCapacidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') faseCapacidadId: string) {
    return this._faseCapacidadService.findOne(+faseCapacidadId);
  }
  @Get('fase/:id')
  findFaseCapacidad(@Param('id') faseId: string) {
    return this._faseCapacidadService.findfaseCapacidad(+faseId);
  }
  @Put(':id')
  update(@Param('id') faseCapacidadId: string, @Body() faseCapacidad: faseCapacidad) {
    return this._faseCapacidadService.update(+faseCapacidadId, faseCapacidad);
  }

  @Delete(':id')
  remove(@Param('id') faseCapacidadId: string) {
    return this._faseCapacidadService.remove(+faseCapacidadId);
  }
}
