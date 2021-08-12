import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UnidadConstructivaService } from './unidad.constructiva.service';
import { UnidadConstructiva } from './entities/unidad.constructiva.entity';

@Controller('unidad-constructiva')
export class UnidadConstructivaController {
  constructor(private readonly _unidadConstructivaService: UnidadConstructivaService) {}

  @Post()
  create(@Body() unidadConstructiva: UnidadConstructiva) {
    return this._unidadConstructivaService.create(unidadConstructiva);
  }

  @Get()
  findAll() {
    return this._unidadConstructivaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') unidadId: string) {
    return this._unidadConstructivaService.findOne(+unidadId);
  }
  @Get(':id')
  findFase(@Param('id') unidadId: string) {
    return this._unidadConstructivaService.findUnidad(+unidadId);
  }
  @Put(':id')
  update(@Param('id') unidadId: string, @Body() unidadConstructiva: UnidadConstructiva) {
    return this._unidadConstructivaService.update(+unidadId, unidadConstructiva);
  }

  @Delete(':id')
  remove(@Param('id') unidadId: string) {
    return this._unidadConstructivaService.remove(+unidadId);
  }
}
