import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './entities/proyecto.entity';

@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly _proyectoService: ProyectoService) {}

  @Post()
  create(@Body() proyecto: Proyecto) {
    return this._proyectoService.create(proyecto);
  }

  @Get()
  findAll() {
    return this._proyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') codigo: string) {
    return this._proyectoService.findOne(codigo);
  }
 
  @Put(':id')
  update(@Param('id') proyectoId: number, @Body() proyecto: Proyecto) {
    return this._proyectoService.update(proyectoId, proyecto);
  }

  @Delete(':id')
  remove(@Param('id') proyectoId: string) {
    return this._proyectoService.remove(+proyectoId);
  }
}
