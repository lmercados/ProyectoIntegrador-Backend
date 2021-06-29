import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TensionPrimariaService } from './tension.primaria.service';
import { TensionPrimaria } from './entities/tension.primaria.entity';

@Controller('tension-primaria')
export class TensionPrimariaController {
  constructor(private readonly _tensionService: TensionPrimariaService) {}

  @Post()
  create(@Body() tension: TensionPrimaria) {
    return this._tensionService.create(tension);
  }

  @Get()
  findAll() {
    return this._tensionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') tensionId: string) {
    return this._tensionService.findOne(+tensionId);
  }

  @Put(':id')
  update(@Param('id') tensionId: string, @Body() tension: TensionPrimaria) {
    return this._tensionService.update(+tensionId, tension);
  }

  @Delete(':id')
  remove(@Param('id') tensionId: string) {
    return this._tensionService.remove(+tensionId);
  }
}
