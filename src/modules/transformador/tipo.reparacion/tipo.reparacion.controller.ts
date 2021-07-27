import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { tipoReparacionService } from './tipo.reparacion.service';
import { tipoReparacion } from './entities/tipo.reparacion.entity';

@Controller('tipo-reparacion')
export class tipoReparacionController {
  constructor(private readonly _tipoReparacionService:tipoReparacionService) {}

  @Post()
  create(@Body() tipoReparacion: tipoReparacion) {
    return this._tipoReparacionService.create(tipoReparacion);
  }

  @Get()
  findAll() {
    return this._tipoReparacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') tipoReparacionId: string) {
    return this._tipoReparacionService.findOne(+tipoReparacionId);
  }

  @Put(':id')
  update(@Param('id') tipoReparacionId: string, @Body() tipoReparacion: tipoReparacion) {
    return this._tipoReparacionService.update(+tipoReparacionId, tipoReparacion);
  }

  @Delete(':id')
  remove(@Param('id') tipoReparacionId: string) {
    return this._tipoReparacionService.remove(+tipoReparacionId);
  }
}
