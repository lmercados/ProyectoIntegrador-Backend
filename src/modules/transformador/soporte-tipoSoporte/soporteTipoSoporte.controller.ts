import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { soporteTipoSoporteService } from './soporteTipoSoporte.service';
import {  soporteTipoSoporte} from './entities/soporteTipoSoporte.entity';

@Controller('soporte-tipo-soporte')
export class soporteTipoSoporteController {
  constructor(private readonly _soporteTipoSoporteService: soporteTipoSoporteService) {}

  @Post()
  create(@Body() soporteTipoSoporte: soporteTipoSoporte) {
    return this._soporteTipoSoporteService.create(soporteTipoSoporte);
  }

  @Get()
  findAll() {
    return this._soporteTipoSoporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') soporteTipoSoporteId: string) {
    return this._soporteTipoSoporteService.findOne(+soporteTipoSoporteId);
  }
  @Get('soporte/:id')
  findFaseCapacidad(@Param('id') faseId: string) {
    return this._soporteTipoSoporteService.findsoporteTipoSoporte(+faseId);
  }
  @Put(':id')
  update(@Param('id') soporteTipoSoporteId: string, @Body() soporteTipoSoporte: soporteTipoSoporte) {
    return this._soporteTipoSoporteService.update(+soporteTipoSoporteId, soporteTipoSoporte);
  }

  @Delete(':id')
  remove(@Param('id') soporteTipoSoporteId: string) {
    return this._soporteTipoSoporteService.remove(+soporteTipoSoporteId);
  }
}
