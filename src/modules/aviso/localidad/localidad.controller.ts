import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {LocalidadService} from './localidad.service';
import { Localidad } from './entities/localidad.entity';

@Controller('avisos/localidades')
export class LocalidadController {
  constructor(private readonly _localidadService:LocalidadService) {}

  @Post()
  create(@Body() localidad: Localidad) {
    return this._localidadService.create(localidad);
  }

  @Get()
  findAll() {
    return this._localidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') localidadId: string) {
    return this._localidadService.findOne(+localidadId);
  }

  @Put(':id')
  update(@Param('id') localidadId: string, @Body() localidad: Localidad) {
    return this._localidadService.update(+localidadId, localidad);
  }

  @Delete(':id')
  remove(@Param('id') localidadId: string) {
    return this._localidadService.remove(+localidadId);
  }
}
