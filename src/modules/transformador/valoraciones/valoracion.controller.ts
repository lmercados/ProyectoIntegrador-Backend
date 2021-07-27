import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ValoracionService } from './valoracion.service';
import { Valoracion } from './entities/valoracion.entity';

@Controller('valoracion')
export class ValoracionController {
  constructor(private readonly _valoracionService: ValoracionService) {}

  @Post()
  create(@Body() valoracion: Valoracion) {
    return this._valoracionService.create(valoracion);
  }

  @Get()
  findAll() {
    return this._valoracionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') valoracionId: string) {
    return this._valoracionService.findOne(+valoracionId);
  }

  @Put(':id')
  update(@Param('id') valoracionId: string, @Body() valoracion: Valoracion) {
    return this._valoracionService.update(+valoracionId, valoracion);
  }

  @Delete(':id')
  remove(@Param('id') valoracionId: string) {
    return this._valoracionService.remove(+valoracionId);
  }
}
