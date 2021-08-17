import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { resultadoEstadoService } from './resultado.estado.service';
import {  resultadoEstado} from './entities/resultado.estado.entity';

@Controller('resultado-estado')
export class resultadoEstadoController {
  constructor(private readonly _resultadoEstadoService: resultadoEstadoService) {}

  @Post()
  create(@Body() resultadoEstado: resultadoEstado) {
    return this._resultadoEstadoService.create(resultadoEstado);
  }

  @Get()
  findAll() {
    return this._resultadoEstadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') resultadoEstadoId: string) {
    return this._resultadoEstadoService.findOne(+resultadoEstadoId);
  }
  @Get('resultado/:id')
  findResultadoEstado(@Param('id') resultadoId: string) {
    return this._resultadoEstadoService.findresultadoEstado(+resultadoId);
  }
  @Put(':id')
  update(@Param('id') resultadoEstadoId: string, @Body() resultadoEstado: resultadoEstado) {
    return this._resultadoEstadoService.update(+resultadoEstadoId, resultadoEstado);
  }

  @Delete(':id')
  remove(@Param('id') resultadoEstadoId: string) {
    return this._resultadoEstadoService.remove(+resultadoEstadoId);
  }
}
