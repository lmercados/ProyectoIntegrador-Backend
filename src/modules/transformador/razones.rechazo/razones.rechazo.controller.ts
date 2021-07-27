import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RazonesRechazoService } from './razones.rechazo.service';
import { RazonesRechazo } from './entities/razones.rechazo.entity';

@Controller('razones-rechazo')
export class RazonesRechazoController {
  constructor(private readonly _razonesRechazoService: RazonesRechazoService) {}

  @Post()
  create(@Body() razonesRechazo: RazonesRechazo) {
    return this._razonesRechazoService.create(razonesRechazo);
  }

  @Get()
  findAll() {
    return this._razonesRechazoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') razonRechazoId: string) {
    return this._razonesRechazoService.findOne(+razonRechazoId);
  }
  @Get(':id')
  findRazonesRechazoService(@Param('id') razonRechazoId: string) {
    return this._razonesRechazoService.findRazonesRechazo(+razonRechazoId);
  }
  @Put(':id')
  update(
    @Param('id') razonRechazoId: string,
    @Body() razonesRechazo: RazonesRechazo,
  ) {
    return this._razonesRechazoService.update(+razonRechazoId, razonesRechazo);
  }

  @Delete(':id')
  remove(@Param('id') razonRechazoId: string) {
    return this._razonesRechazoService.remove(+razonRechazoId);
  }
}
