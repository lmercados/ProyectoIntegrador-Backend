import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {ProvinciaService} from './provincia.service';
import { Provincia } from './entities/provincia';

@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly _provinciaService:ProvinciaService) {}

  @Post()
  create(@Body() provincia: Provincia) {
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
  update(@Param('id') provinciaId: string, @Body() provincia: Provincia) {
    return this._provinciaService.update(+provinciaId, provincia);
  }

  @Delete(':id')
  remove(@Param('id') provinciaId: string) {
    return this._provinciaService.remove(+provinciaId);
  }
}
