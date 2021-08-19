import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {AvisoTrrService} from './aviso.trr.service';
import { AvisoTrr } from './entities/aviso.trr.entity';

@Controller('aviso/aviso-trr')
export class AvisoTrrController {
  constructor(private readonly _avisotrrService:AvisoTrrService) {}

  @Post()
  create(@Body() avisotrr: AvisoTrr) {
    return this._avisotrrService.create(avisotrr);
  }

  @Get()
  findAll() {
    return this._avisotrrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') avisotrrId: string) {
    return this._avisotrrService.findOne(+avisotrrId);
  }

  @Put(':id')
  update(@Param('id') avisotrrId: string, @Body() avisotrr: AvisoTrr) {
    return this._avisotrrService.update(+avisotrrId, avisotrr);
  }

  @Delete(':id')
  remove(@Param('id') avisotrrId: string) {
    return this._avisotrrService.remove(+avisotrrId);
  }
}
