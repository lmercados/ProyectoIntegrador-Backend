import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {provinciaMunicipioService} from './provincia-municipio.service';
import { provinciaMunicipio } from './entities/provincia-municipio.entity';

@Controller('avisos/provincia-municipios')
export class provinciaMunicipioController {
  constructor(private readonly _provinciaService:provinciaMunicipioService) {}

  @Post()
  create(@Body() provincia: provinciaMunicipio) {
    return this._provinciaService.create(provincia);
  }

  @Get()
  findAll() {
    return this._provinciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') provinciaId: string) {
    return this._provinciaService.findOne(+provinciaId);
  }

  @Put(':id')
  update(@Param('id') provinciaMunicipioId: string, @Body() provincia: provinciaMunicipio) {
    return this._provinciaService.update(+provinciaMunicipioId, provincia);
  }

  @Delete(':id')
  remove(@Param('id') provinciaMunicipioId: string) {
    return this._provinciaService.remove(+provinciaMunicipioId);
  }
}
