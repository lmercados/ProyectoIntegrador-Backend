import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {AvisoTriService} from './aviso.tri.service';
import { AvisoTri } from './entities/aviso.tri.entity';

@Controller('aviso/aviso-tr')
export class AvisoTriController {
  constructor(private readonly _causaService:AvisoTriService) {}

  @Post()
  create(@Body() causa: AvisoTri) {
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
  update(@Param('id') causaId: string, @Body() causa: AvisoTri) {
    return this._causaService.update(+causaId, causa);
  }

  @Delete(':id')
  remove(@Param('id') causaId: string) {
    return this._causaService.remove(+causaId);
  }
}
