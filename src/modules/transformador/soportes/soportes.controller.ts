import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SoporteService } from './soportes.service';
import { Soporte } from './entities/soportes.entity';

@Controller('soportes')
export class SoporteController {
  constructor(private readonly soporteService: SoporteService) {}

  @Post()
  create(@Body() createSoporte: Soporte) {
    return this.soporteService.create(createSoporte);
  }

  @Get()
  findAll() {
    return this.soporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') soporteId: string) {
    return this.soporteService.findOne(+soporteId);
  }

  @Put(':id')
  update(@Param('id') soporteId: string, @Body() updateSoporte: Soporte) {
    return this.soporteService.update(+soporteId, updateSoporte);
  }

  @Delete(':id')
  remove(@Param('id') soporteId: string) {
    return this.soporteService.remove(+soporteId);
  }
}
