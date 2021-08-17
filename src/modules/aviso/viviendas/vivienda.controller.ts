import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {ViviendaService} from './vivienda.service';
import { Vivienda } from './entities/vivienda.entity';

@Controller('vivienda')
export class ViviendaController {
  constructor(private readonly _viviendaService:ViviendaService) {}

  @Post()
  create(@Body() vivienda: Vivienda) {
    return this._viviendaService.create(vivienda);
  }

  @Get()
  findAll() {
    return this._viviendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') viviendaId: string) {
    return this._viviendaService.findOne(+viviendaId);
  }

  @Put(':id')
  update(@Param('id') viviendaId: string, @Body() vivienda: Vivienda) {
    return this._viviendaService.update(+viviendaId, vivienda);
  }

  @Delete(':id')
  remove(@Param('id') viviendaId: string) {
    return this._viviendaService.remove(+viviendaId);
  }
}
