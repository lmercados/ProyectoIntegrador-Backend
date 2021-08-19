import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {estadoApoyoService} from './estado.apoyo.service';
import {estadoApoyo } from './entities/estado.apoyo.entity';

@Controller('avisos/estado-apoyos')
export class estadoApoyoController {
  constructor(private readonly _estadoApoyoService:estadoApoyoService) {}

  @Post()
  create(@Body() estadoApoyo: estadoApoyo) {
    return this._estadoApoyoService.create(estadoApoyo);
  }

  @Get()
  findAll() {
    return this._estadoApoyoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') estadoApoyoId: string) {
    return this._estadoApoyoService.findOne(+estadoApoyoId);
  }

  @Put(':id')
  update(@Param('id') estadoApoyoId: string, @Body() estadoApoyo: estadoApoyo) {
    return this._estadoApoyoService.update(+estadoApoyoId, estadoApoyo);
  }

  @Delete(':id')
  remove(@Param('id') estadoApoyoId: string) {
    return this._estadoApoyoService.remove(+estadoApoyoId);
  }
}
