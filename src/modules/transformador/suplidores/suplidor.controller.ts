import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SuplidorService } from './suplidor.service';
import { Suplidor } from './entities/suplidor.entity';

@Controller('suplidor')
export class SuplidorController {
  constructor(private readonly _suplidorService: SuplidorService) {}

  @Post()
  create(@Body() suplidor: Suplidor) {
    return this._suplidorService.create(suplidor);
  }

  @Get()
  findAll() {
    return this._suplidorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') suplidorId: string) {
    return this._suplidorService.findOne(+suplidorId);
  }

  @Put(':id')
  update(@Param('id') suplidorId: string, @Body() Suplidor: Suplidor) {
    return this._suplidorService.update(+suplidorId, Suplidor);
  }

  @Delete(':id')
  remove(@Param('id') suplidorId: string) {
    return this._suplidorService.remove(+suplidorId);
  }
}
