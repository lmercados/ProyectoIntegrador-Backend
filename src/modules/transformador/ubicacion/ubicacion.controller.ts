import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { Ubicacion } from './entities/ubicacion.entity';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private readonly _ubicacionService:UbicacionService) {}

  @Post()
  create(@Body() ubicacion: Ubicacion) {
    return this._ubicacionService.create(ubicacion);
  }

  @Get()
  findAll() {
    return this._ubicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') ubicacionId: string) {
    return this._ubicacionService.findOne(+ubicacionId);
  }

  @Put(':id')
  update(@Param('id') ubicacionId: string, @Body() ubicacion: Ubicacion) {
    return this._ubicacionService.update(+ubicacionId, ubicacion);
  }

  @Delete(':id')
  remove(@Param('id') ubicacionId: string) {
    return this._ubicacionService.remove(+ubicacionId);
  }
}
