import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { faseCapacidad } from './entities/faseCapacidad.entity';
import { faseCapacidadRepository } from './faseCapacidad.repository';

@Injectable()
export class faseCapacidadService {
  constructor(
    @InjectRepository(faseCapacidadRepository)
    private readonly __faseCapacidadRepository: faseCapacidadRepository,
  ) {}
  async create(createfaseCapacidad: Partial<faseCapacidad>): Promise<faseCapacidad> {
    const savedfaseCapacidad: faseCapacidad = await this.__faseCapacidadRepository.save(
      createfaseCapacidad,
    );
    return savedfaseCapacidad;
  }

  async findAll(): Promise<faseCapacidad[]> {
    const readfaseCapacidad: faseCapacidad[] = await this.__faseCapacidadRepository.find();

    if (!readfaseCapacidad) {
      throw new NotFoundException('faseCapacidad does not exist');
    }
    return readfaseCapacidad;
  }

  async findfaseCapacidad(faseId: number): Promise<faseCapacidad[]> {
    const readfaseCapacidad: faseCapacidad[] = await this.__faseCapacidadRepository.find({
      where: { faseId: faseId },
    });

    if (!readfaseCapacidad) {
      throw new NotFoundException('fase id does not exist');
    }
    return readfaseCapacidad;
  }
  async findOne(faseCapacidadId: number): Promise<faseCapacidad> {
    const readfaseCapacidad: faseCapacidad = await this.__faseCapacidadRepository.findOne({
      where: { faseCapacidadId: faseCapacidadId },
    });

    if (!readfaseCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }
    return readfaseCapacidad;
  }

  async update(
    faseCapacidadId: number,
    updatefaseCapacidad: faseCapacidad,
  ): Promise<faseCapacidad> {
    const readfaseCapacidad: faseCapacidad = await this.__faseCapacidadRepository.findOne({
      where: { faseCapacidadId: faseCapacidadId },
    });

    if (!readfaseCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }

    readfaseCapacidad.capacidadId = updatefaseCapacidad.capacidadId;
    readfaseCapacidad.faseId = updatefaseCapacidad.faseId;
    const updatedfaseCapacidad = await this.__faseCapacidadRepository.update(
      faseCapacidadId,
      readfaseCapacidad,
    );
    return readfaseCapacidad;
  }

  async remove(faseCapacidadId: number): Promise<void> {
    const readfaseCapacidad: faseCapacidad = await this.__faseCapacidadRepository.findOne({
      where: { faseCapacidadId: faseCapacidadId },
    });

    if (!readfaseCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }

    await this.__faseCapacidadRepository.delete(faseCapacidadId);
  }
}
