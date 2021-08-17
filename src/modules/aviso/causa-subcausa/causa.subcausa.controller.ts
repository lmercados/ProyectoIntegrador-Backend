import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {causaSubCausaService} from './causa.subcausa.service';
import { causaSubCausa } from './entities/causa.subcausa.entity';

@Controller('causa-subcausa')
export class causaSubCausaController {
  constructor(private readonly _causaService:causaSubCausaService) {}

  @Post()
  create(@Body() causaSubCausa: causaSubCausa) {
    return this._causaService.create(causaSubCausa);
  }

  @Get()
  findAll() {
    return this._causaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') causaSubcausaId: string) {
    return this._causaService.findOne(+causaSubcausaId);
  }

  @Put(':id')
  update(@Param('id') causaSubcausaId: string, @Body() causaSubCausa: causaSubCausa) {
    return this._causaService.update(+causaSubcausaId, causaSubCausa);
  }

  @Delete(':id')
  remove(@Param('id') causaSubcausaId: string) {
    return this._causaService.remove(+causaSubcausaId);
  }
}
