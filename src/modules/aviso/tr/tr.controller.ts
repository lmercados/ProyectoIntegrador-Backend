import { Controller, Post, Body, Get, UseGuards,Param,Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { serialize } from 'class-transformer';
import { RoleGuard } from '../roles/guards/role.guard';
import { Transformador } from './entities/tr.entity';
import { TransformadorService } from './tr.service';
@Controller('transformador')
export class TransformadorController {
  constructor(private readonly _transformadorService: TransformadorService) {}
  @Post('create')
  createTr(@Body() transformador: Transformador): Promise<Transformador> {
    return this._transformadorService.create(transformador);
  }
  @Get()
  //@UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Transformador[]> {
    return this._transformadorService.findAll();
  }
  @Get('serie/:serie')
  findBySerie(@Param('serie') serie: string) {
    return this._transformadorService.findBySerie(serie);
  }
  @Put('estado-ubicacion/:id')
  updateEstadoUbicacion(@Param('id') transformadorId: string, @Body() updateTransformador: Transformador) {
    return this._transformadorService.updateEstadoUbicacion(+transformadorId, updateTransformador);
  }
}

