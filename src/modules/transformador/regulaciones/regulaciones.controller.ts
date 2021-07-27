import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RegulacionService } from './regulaciones.service';
import { Regulacion } from './entities/regulaciones.entity';

@Controller('regulacion')
export class RegulacionController {
  constructor(private readonly _regulacionService: RegulacionService) {}

  @Post()
  create(@Body() regulacion: Regulacion) {
    return this._regulacionService.create(regulacion);
  }

  @Get()
  findAll() {
    return this._regulacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') regulacionId: string) {
    return this._regulacionService.findOne(+regulacionId);
  }

  @Put(':id')
  update(@Param('id') regulacionId: string, @Body() regulacion: Regulacion) {
    return this._regulacionService.update(+regulacionId, regulacion);
  }

  @Delete(':id')
  remove(@Param('id') regulacionId: string) {
    return this._regulacionService.remove(+regulacionId);
  }
}
