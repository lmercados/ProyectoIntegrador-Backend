import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TensionSecundariaService } from './tension.secundaria.service';
import { TensionSecundaria } from './entities/tension.secundaria.entity';

@Controller('tension-secundaria')
export class TensionSecundariaController {
  constructor(private readonly _tensionService: TensionSecundariaService) {}

  @Post()
  create(@Body() tension: TensionSecundaria) {
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
  update(@Param('id') tensionId: string, @Body() tension: TensionSecundaria) {
    return this._tensionService.update(+tensionId, tension);
  }

  @Delete(':id')
  remove(@Param('id') tensionId: string) {
    return this._tensionService.remove(+tensionId);
  }
}
