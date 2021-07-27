import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EstadoService } from './estado.service';
import { Estados } from './entities/estado.entity';

@Controller('estado')
export class EstadoController {
  constructor(private readonly _estadoService:EstadoService) {}

  @Post()
  create(@Body() estado: Estados) {
    return this._estadoService.create(estado);
  }

  @Get()
  findAll() {
    return this._estadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') estadoId: string) {
    return this._estadoService.findOne(+estadoId);
  }

  @Put(':id')
  update(@Param('id') estadoId: string, @Body() estado: Estados) {
    return this._estadoService.update(+estadoId, estado);
  }

  @Delete(':id')
  remove(@Param('id') estadoId: string) {
    return this._estadoService.remove(+estadoId);
  }
}
