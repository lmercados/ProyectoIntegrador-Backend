import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../roles/guards/role.guard';
import { Transformador } from './tr.entity';
import { TransformadorService } from './tr.service';
@Controller('transformador')
export class TransformadorController {
  constructor(private readonly _transformadorService: TransformadorService) {}
  @Post('create')
  createTr(@Body() transformador: Transformador): Promise<Transformador> {
    return this._transformadorService.create(transformador);
  }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Transformador[]> {
    return this._transformadorService.findAll();
  }
}
