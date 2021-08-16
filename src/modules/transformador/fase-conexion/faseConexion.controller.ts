import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { faseConexionService } from './faseConexion.service';
import {  faseConexion} from './entities/faseConexion.entity';

@Controller('fase-conexion')
export class faseConexionController {
  constructor(private readonly _faseConexionService: faseConexionService) {}

  @Post()
  create(@Body() faseConexion: faseConexion) {
    return this._faseConexionService.create(faseConexion);
  }

  @Get()
  findAll() {
    return this._faseConexionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') faseConexionId: string) {
    return this._faseConexionService.findOne(+faseConexionId);
  }
  @Get('fase/:id')
  findFaseConexion(@Param('id') faseId: string) {
    return this._faseConexionService.findfaseConexion(+faseId);
  }
  @Put(':id')
  update(@Param('id') faseConexionId: string, @Body() faseConexion: faseConexion) {
    return this._faseConexionService.update(+faseConexionId, faseConexion);
  }

  @Delete(':id')
  remove(@Param('id') faseConexionId: string) {
    return this._faseConexionService.remove(+faseConexionId);
  }
}
