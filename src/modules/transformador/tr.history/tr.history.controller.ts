import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../roles/guards/role.guard';
import { TransformadorHistory } from './entities/tr.history.entity';
import { TransformadorHistoryService } from './tr.history.service';
@Controller('transformador-history')
export class TransformadorHistoryController {
  constructor(private readonly _transformadorService: TransformadorHistoryService) {}
  @Post('create')
  createTr(@Body() transformador: TransformadorHistory): Promise<TransformadorHistory> {
    return this._transformadorService.create(transformador);
  }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<TransformadorHistory[]> {
    return this._transformadorService.findAll();
  }
}
