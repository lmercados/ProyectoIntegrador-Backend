import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {ApoyoService} from './apoyo.service';
import { Apoyo } from './entities/apoyo.entity';

@Controller('avisos/apoyos')
export class ApoyoController {
  constructor(private readonly _apoyoService:ApoyoService) {}

  @Post()
  create(@Body() apoyo: Apoyo) {
    return this._apoyoService.create(apoyo);
  }

  @Get()
  findAll() {
    return this._apoyoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') apoyoId: string) {
    return this._apoyoService.findOne(+apoyoId);
  }

  @Put(':id')
  update(@Param('id') apoyoId: string, @Body() apoyo: Apoyo) {
    return this._apoyoService.update(+apoyoId, apoyo);
  }

  @Delete(':id')
  remove(@Param('id') apoyoId: string) {
    return this._apoyoService.remove(+apoyoId);
  }
}
