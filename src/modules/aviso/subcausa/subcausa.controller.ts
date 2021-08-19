import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {SubCausaService} from './subcausa.service';
import { SubCausas } from './entities/subcausa.entity';

@Controller('avisos/subcausas')
export class SubCausasController {
  constructor(private readonly _subcausaService:SubCausaService) {}

  @Post()
  create(@Body() subcausa: SubCausas) {
    return this._subcausaService.create(subcausa);
  }

  @Get()
  findAll() {
    return this._subcausaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') subcausaId: string) {
    return this._subcausaService.findOne(+subcausaId);
  }

  @Put(':id')
  update(@Param('id') subcausaId: string, @Body() subcausa: SubCausas) {
    return this._subcausaService.update(+subcausaId, subcausa);
  }

  @Delete(':id')
  remove(@Param('id') subcausaId: string) {
    return this._subcausaService.remove(+subcausaId);
  }
}
