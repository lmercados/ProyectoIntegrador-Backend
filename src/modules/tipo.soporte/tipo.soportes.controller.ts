import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoSoporteService } from './tipo.soportes.service';
import { TipoSoporte } from './entities/tipo.soportes.entity';

@Controller('tipo-soportes')
export class TipoSoporteController {
  constructor(private readonly tiposoporteService: TipoSoporteService) {}

  @Post()
  create(@Body() createtipoSoporte: TipoSoporte) {
    return this.tiposoporteService.create(createtipoSoporte);
  }

  @Get()
  findAll() {
    return this.tiposoporteService.findAll();
  }
  @Get('soporte/:id')
  findAllSoporte(@Param('id') soporteId: string) {
    return this.tiposoporteService.findAllSoporte(+soporteId);
  }
  @Get(':id')
  findOne(@Param('id') tiposoporteId: string) {
    return this.tiposoporteService.findOne(+tiposoporteId);
  }

  @Put(':id')
  update(
    @Param('id') tiposoporteId: string,
    @Body() updatetipoSoporte: TipoSoporte,
  ) {
    return this.tiposoporteService.update(+tiposoporteId, updatetipoSoporte);
  }

  @Delete(':id')
  remove(@Param('id') tiposoporteId: string) {
    return this.tiposoporteService.remove(+tiposoporteId);
  }
}
