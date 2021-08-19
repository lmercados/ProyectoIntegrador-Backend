import { Controller, Post, Body, Get, UseGuards,Param,Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { serialize } from 'class-transformer';
//import { RoleGuard } from '../roles/guards/role.guard';
import { Avisos } from './entities/avisos.entity';
import { AvisosService } from './avisos.service';
@Controller('aviso')
export class AvisosController {
  constructor(private readonly _avisoService: AvisosService) {}
  @Post('create')
  createTr(@Body() aviso: Avisos): Promise<Avisos> {
    console.log(aviso);
    return this._avisoService.create(aviso);
  }
  @Get()
  //@UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Avisos[]> {
    return this._avisoService.findAll();
  }
  @Get(':aviso')
  findByAviso(@Param('aviso') aviso: string) {
    return this._avisoService.findByAviso(aviso);
  }
  @Get('estado-aviso/:estado')
  findByEstado(@Param('estado') estado: string) {
    return this._avisoService.findByestado(estado);
  }
  @Put(':id')
  update(@Param('id') avisoId: string, @Body() updateAvisos: Avisos) {
    return this._avisoService.updateAviso(+avisoId, updateAvisos);
  }
}

