import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FabricanteService } from './fabricante.service';
import { Fabricante } from './entities/fabricante.entity';

@Controller('fabricante')
export class FabricanteController {
  constructor(private readonly _fabricanteService: FabricanteService) {}

  @Post()
  create(@Body() fabricante: Fabricante) {
    return this._fabricanteService.create(fabricante);
  }

  @Get()
  findAll() {
    return this._fabricanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') fabricanteId: string) {
    return this._fabricanteService.findOne(+fabricanteId);
  }

  @Put(':id')
  update(@Param('id') fabricanteId: string, @Body() fabricante: Fabricante) {
    return this._fabricanteService.update(+fabricanteId, fabricante);
  }

  @Delete(':id')
  remove(@Param('id') fabricanteId: string) {
    return this._fabricanteService.remove(+fabricanteId);
  }
}
