import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {MunicipioService} from './municipio.service';
import { Municipio } from './entities/municipio.entity';

@Controller('avisos/municipios')
export class MunicipioController {
  constructor(private readonly _municipioService:MunicipioService) {}

  @Post()
  create(@Body() municipio: Municipio) {
    return this._municipioService.create(municipio);
  }

  @Get()
  findAll() {
    return this._municipioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') municipioId: string) {
    return this._municipioService.findOne(+municipioId);
  }

  @Put(':id')
  update(@Param('id') municipioId: string, @Body() municipio: Municipio) {
    return this._municipioService.update(+municipioId, municipio);
  }

  @Delete(':id')
  remove(@Param('id') municipioId: string) {
    return this._municipioService.remove(+municipioId);
  }
}
