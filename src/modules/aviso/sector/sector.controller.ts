import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {SectorService} from './sector.service';
import { Sector } from './entities/sector.entity';

@Controller('avisos/sectores')
export class SectorController {
  constructor(private readonly _sectorService:SectorService) {}

  @Post()
  create(@Body() sector: Sector) {
    return this._sectorService.create(sector);
  }

  @Get()
  findAll() {
    return this._sectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') sectorId: string) {
    return this._sectorService.findOne(+sectorId);
  }

  @Put(':id')
  update(@Param('id') sectorId: string, @Body() sector: Sector) {
    return this._sectorService.update(+sectorId, sector);
  }

  @Delete(':id')
  remove(@Param('id') sectorId: string) {
    return this._sectorService.remove(+sectorId);
  }
}
