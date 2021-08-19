import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {CausasService} from './causa.service';
import { Causas } from './entities/causa.entity';

@Controller('avisos/causas')
export class CausasController {
  constructor(private readonly _causaService:CausasService) {}

  @Post()
  create(@Body() causa: Causas) {
    return this._causaService.create(causa);
  }

  @Get()
  findAll() {
    return this._causaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') causaId: string) {
    return this._causaService.findOne(+causaId);
  }

  @Put(':id')
  update(@Param('id') causaId: string, @Body() causa: Causas) {
    return this._causaService.update(+causaId, causa);
  }

  @Delete(':id')
  remove(@Param('id') causaId: string) {
    return this._causaService.remove(+causaId);
  }
}
