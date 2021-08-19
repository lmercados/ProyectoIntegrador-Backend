import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {causaSubCausaEstadoService} from './causa.subcausa.estado.service';
import { causaSubCausaEstado } from './entities/causa.subcausa.estado.entity';

@Controller('avisos/causa-subcausas')
export class causaSubCausaEstadoController {
  constructor(private readonly _causaService:causaSubCausaEstadoService) {}

  @Post()
  create(@Body() causaSubCausaEstado: causaSubCausaEstado) {
    return this._causaService.create(causaSubCausaEstado);
  }

  @Get()
  findAll() {
    return this._causaService.findAll();
  }

  @Get('causa/:causa/subcausa/:subcausa')
  findOne(@Param('causa') causaId: string,@Param('subcausa') subcausaId: string) {
    return this._causaService.find(+causaId,+subcausaId);
  }

  @Put(':id')
  update(@Param('id') causaSubcausaId: string, @Body() causaSubCausaEstado: causaSubCausaEstado) {
    return this._causaService.update(+causaSubcausaId, causaSubCausaEstado);
  }

  @Delete(':id')
  remove(@Param('id') causaSubcausaId: string) {
    return this._causaService.remove(+causaSubcausaId);
  }
}
