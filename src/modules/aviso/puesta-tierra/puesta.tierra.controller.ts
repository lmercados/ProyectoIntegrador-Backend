import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {puestaTierraService} from './puesta.tierra.service';
import { puestaTierra } from './entities/puesta.tierra.entity';

@Controller('avisos/puesta-tierras')
export class puestaTierraController {
  constructor(private readonly _puestaTierraService:puestaTierraService) {}

  @Post()
  create(@Body() puestaTierra: puestaTierra) {
    return this._puestaTierraService.create(puestaTierra);
  }

  @Get()
  findAll() {
    return this._puestaTierraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') puestaTierraId: string) {
    return this._puestaTierraService.findOne(+puestaTierraId);
  }

  @Put(':id')
  update(@Param('id') puestaTierraId: string, @Body() puestaTierra: puestaTierra) {
    return this._puestaTierraService.update(+puestaTierraId, puestaTierra);
  }

  @Delete(':id')
  remove(@Param('id') puestaTierraId: string) {
    return this._puestaTierraService.remove(+puestaTierraId);
  }
}
