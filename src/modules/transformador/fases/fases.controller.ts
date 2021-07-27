import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FasesService } from './fases.service';
import { CreateFaseDto } from './dto/create-fase.dto';
import { UpdateFaseDto } from './dto/update-fase.dto';
import { Fase } from './entities/fase.entity';

@Controller('fases')
export class FasesController {
  constructor(private readonly fasesService: FasesService) {}

  @Post()
  create(@Body() createFase: CreateFaseDto) {
    return this.fasesService.create(createFase);
  }

  @Get()
  findAll() {
    return this.fasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') faseId: string) {
    return this.fasesService.findOne(+faseId);
  }

  @Put(':id')
  update(@Param('id') faseId: string, @Body() updateFaseDto: Fase) {
    return this.fasesService.update(+faseId, updateFaseDto);
  }

  @Delete(':id')
  remove(@Param('id') faseId: string) {
    return this.fasesService.remove(+faseId);
  }
}
