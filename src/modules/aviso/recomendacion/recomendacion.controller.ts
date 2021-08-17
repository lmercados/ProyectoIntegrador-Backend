import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {RecomendacionService} from './recomendacion.service';
import { Recomendacion } from './entities/recomendacion.entity';

@Controller('recomendacion')
export class RecomendacionController {
  constructor(private readonly _recomendacionService:RecomendacionService) {}

  @Post()
  create(@Body() recomendacion: Recomendacion) {
    return this._recomendacionService.create(recomendacion);
  }

  @Get()
  findAll() {
    return this._recomendacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') recomendacionId: string) {
    return this._recomendacionService.findOne(+recomendacionId);
  }

  @Put(':id')
  update(@Param('id') recomendacionId: string, @Body() recomendacion: Recomendacion) {
    return this._recomendacionService.update(+recomendacionId, recomendacion);
  }

  @Delete(':id')
  remove(@Param('id') recomendacionId: string) {
    return this._recomendacionService.remove(+recomendacionId);
  }
}
