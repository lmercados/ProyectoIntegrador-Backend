import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateFaseDto } from './dto/create-fase.dto';
import { ReadFaseDto } from './dto/read-fase.dto';
import { UpdateFaseDto } from './dto/update-fase.dto';
import { Fase } from './entities/fase.entity';
import { FaseRepository } from './fases.repository';

@Injectable()
export class FasesService {
  constructor(
    @InjectRepository(FaseRepository)
    private readonly __faseRepository: FaseRepository,
  ) {}
  async create(createFase: Partial<CreateFaseDto>): Promise<ReadFaseDto> {
    const savedFase: Fase = await this.__faseRepository.save(createFase);
    return plainToClass(ReadFaseDto, savedFase);
  }

  async findAll(): Promise<Fase[]> {
    const readFase: Fase[] = await this.__faseRepository.find();

    if (!readFase) {
      throw new NotFoundException('fases does not exist');
    }
    return readFase;
  }

  async findOne(faseId: number): Promise<Fase> {
    const readFase: Fase = await this.__faseRepository.findOne({
      where: { id_fase: faseId },
    });

    if (!readFase) {
      throw new NotFoundException('fases does not exist');
    }
    return readFase;
  }

  async update(faseId: number, updateFaseDto: Fase): Promise<Fase> {
    const readFase: Fase = await this.__faseRepository.findOne({
      where: { id_fase: faseId },
    });

    if (!readFase) {
      throw new NotFoundException('fases does not exist');
    }
    readFase.fase = updateFaseDto.fase;
    const updatedFase = await this.__faseRepository.update(faseId, readFase);
    return readFase;
  }

  async remove(faseId: number): Promise<void> {
    const readFase: Fase = await this.__faseRepository.findOne({
      where: { id_fase: faseId },
    });

    if (!readFase) {
      throw new NotFoundException('fases does not exist');
    }

    await this.__faseRepository.delete(faseId);
  }
}
