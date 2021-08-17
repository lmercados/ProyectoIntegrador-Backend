import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {SeccionadorService} from './seccionador.service';
import { Seccionador } from './entities/seccionador.entity';

@Controller('seccionador')
export class SeccionadorController {
  constructor(private readonly _seccionadorService:SeccionadorService) {}

  @Post()
  create(@Body() seccionador: Seccionador) {
    return this._seccionadorService.create(seccionador);
  }

  @Get()
  findAll() {
    return this._seccionadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') seccionadorId: string) {
    return this._seccionadorService.findOne(+seccionadorId);
  }

  @Put(':id')
  update(@Param('id') seccionadorId: string, @Body() seccionador: Seccionador) {
    return this._seccionadorService.update(+seccionadorId, seccionador);
  }

  @Delete(':id')
  remove(@Param('id') seccionadorId: string) {
    return this._seccionadorService.remove(+seccionadorId);
  }
}
