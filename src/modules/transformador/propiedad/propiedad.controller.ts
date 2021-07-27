import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { Propiedad } from './entities/propiedad.entity';

@Controller('propiedad')
export class PropiedadController {
  constructor(private readonly _propiedadService:PropiedadService) {}

  @Post()
  create(@Body() propiedad: Propiedad) {
    return this._propiedadService.create(propiedad);
  }

  @Get()
  findAll() {
    return this._propiedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') propiedadId: string) {
    return this._propiedadService.findOne(+propiedadId);
  }

  @Put(':id')
  update(@Param('id') propiedadId: string, @Body() propiedad: Propiedad) {
    return this._propiedadService.update(+propiedadId, propiedad);
  }

  @Delete(':id')
  remove(@Param('id') propiedadId: string) {
    return this._propiedadService.remove(+propiedadId);
  }
}
