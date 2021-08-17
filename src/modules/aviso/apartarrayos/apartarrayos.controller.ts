import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {ApartarrayosService} from './apartarrayos.service';
import { Apartarrayos } from './entities/apartarrayos.entity';

@Controller('apartarrayos')
export class ApartarrayosController {
  constructor(private readonly _apartarrayosService:ApartarrayosService) {}

  @Post()
  create(@Body() apartarrayos: Apartarrayos) {
    return this._apartarrayosService.create(apartarrayos);
  }

  @Get()
  findAll() {
    return this._apartarrayosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') apartarrayosId: string) {
    return this._apartarrayosService.findOne(+apartarrayosId);
  }

  @Put(':id')
  update(@Param('id') apartarrayosId: string, @Body() apartarrayos: Apartarrayos) {
    return this._apartarrayosService.update(+apartarrayosId, apartarrayos);
  }

  @Delete(':id')
  remove(@Param('id') apartarrayosId: string) {
    return this._apartarrayosService.remove(+apartarrayosId);
  }
}
