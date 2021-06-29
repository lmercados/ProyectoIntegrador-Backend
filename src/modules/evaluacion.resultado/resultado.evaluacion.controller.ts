import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ResultadoService } from './resultado.evaluacion.service';
import { Resultado } from './entities/resultado.evaluacion.entity';

@Controller('resultado-evaluacion')
export class ResultadoController {
  constructor(private readonly _resultadoService: ResultadoService) {}

  @Post()
  create(@Body() capacidad: Resultado) {
    return this._resultadoService.create(capacidad);
  }

  @Get()
  findAll() {
    return this._resultadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') resultadoId: string) {
    return this._resultadoService.findOne(+resultadoId);
  }
  @Get('fases/:id')
  findResultado(@Param('id') resultadoId: string) {
    return this._resultadoService.findResultado(+resultadoId);
  }
  @Put(':id')
  update(@Param('id') resultadoId: string, @Body() resultado: Resultado) {
    return this._resultadoService.update(+resultadoId, resultado);
  }

  @Delete(':id')
  remove(@Param('id') resultadoId: string) {
    return this._resultadoService.remove(+resultadoId);
  }
}
