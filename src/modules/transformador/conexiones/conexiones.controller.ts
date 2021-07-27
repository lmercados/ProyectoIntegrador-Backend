import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ConexionService } from './conexiones.service';
import { Conexion } from './entities/conexiones.entity';

@Controller('conexion')
export class ConexionController {
  constructor(private readonly __conexionService: ConexionService) {}

  @Post()
  create(@Body() conexion: Conexion) {
    return this.__conexionService.create(conexion);
  }

  @Get()
  findAll() {
    return this.__conexionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') conexionId: string) {
    return this.__conexionService.findOne(+conexionId);
  }
  @Get('fase/:id')
  findFaseConexion(@Param('id') faseId: string) {
    return this.__conexionService.findFaseConexion(+faseId);
  }
  @Put(':id')
  update(@Param('id') conexionId: string, @Body() conexion: Conexion) {
    return this.__conexionService.update(+conexionId, conexion);
  }

  @Delete(':id')
  remove(@Param('id') conexionId: string) {
    return this.__conexionService.remove(+conexionId);
  }
}
