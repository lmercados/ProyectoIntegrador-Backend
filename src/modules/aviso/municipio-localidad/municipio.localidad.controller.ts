import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {municipioLocalidadService} from './municipioLocalidad-municipio.service';
import { municipioLocalidad } from './entities/municipioLocalidad-municipio';

@Controller('municipio-localidad')
export class municipioLocalidadController {
  constructor(private readonly _municipioLocalidadService:municipioLocalidadService) {}

  @Post()
  create(@Body() municipioLocalidad: municipioLocalidad) {
    return this._municipioLocalidadService.create(municipioLocalidad);
  }

  @Get()
  findAll() {
    return this._municipioLocalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') municipioLocalidadId: string) {
    return this._municipioLocalidadService.findOne(+municipioLocalidadId);
  }

  @Put(':id')
  update(@Param('id') municipioLocalidadId: string, @Body() municipioLocalidad: municipioLocalidad) {
    return this._municipioLocalidadService.update(+municipioLocalidadId, municipioLocalidad);
  }

  @Delete(':id')
  remove(@Param('id') municipioLocalidadId: string) {
    return this._municipioLocalidadService.remove(+municipioLocalidadId);
  }
}
