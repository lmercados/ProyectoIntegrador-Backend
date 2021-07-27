import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EfectoService } from './efecto.service';
import { Efecto } from './entities/efecto.entity';

@Controller('efecto')
export class EfectoController {
  constructor(private readonly _efectoService:EfectoService) {}

  @Post()
  create(@Body() efecto: Efecto) {
    return this._efectoService.create(efecto);
  }

  @Get()
  findAll() {
    return this._efectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') efectoId: string) {
    return this._efectoService.findOne(+efectoId);
  }

  @Put(':id')
  update(@Param('id') efectoId: string, @Body() efecto: Efecto) {
    return this._efectoService.update(+efectoId, efecto);
  }

  @Delete(':id')
  remove(@Param('id') efectoId: string) {
    return this._efectoService.remove(+efectoId);
  }
}
