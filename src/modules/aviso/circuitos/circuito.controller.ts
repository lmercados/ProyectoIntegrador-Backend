import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {CircuitoService} from './circuito.service';
import { Circuito } from './entities/circuito.entity';

@Controller('circuito')
export class CircuitoController {
  constructor(private readonly _circuitoService:CircuitoService) {}

  @Post()
  create(@Body() circuito: Circuito) {
    return this._circuitoService.create(circuito);
  }

  @Get()
  findAll() {
    return this._circuitoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') circuitoId: string) {
    return this._circuitoService.findOne(+circuitoId);
  }

  @Put(':id')
  update(@Param('id') circuitoId: string, @Body() circuito: Circuito) {
    return this._circuitoService.update(+circuitoId, circuito);
  }

  @Delete(':id')
  remove(@Param('id') circuitoId: string) {
    return this._circuitoService.remove(+circuitoId);
  }
}
