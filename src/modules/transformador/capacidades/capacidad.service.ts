import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Capacidad } from './entities/capacidad.entity';
import { CapacidadRepository } from './capacidad.repository';

@Injectable()
export class CapacidadService {
  constructor(
    @InjectRepository(CapacidadRepository)
    private readonly __capacidadRepository: CapacidadRepository,
  ) {}
  async create(createCapacidad: Partial<Capacidad>): Promise<Capacidad> {
    const savedCapacidad: Capacidad = await this.__capacidadRepository.save(
      createCapacidad,
    );
    return savedCapacidad;
  }

  async findAll(): Promise<Capacidad[]> {
    const readCapacidad: Capacidad[] = await this.__capacidadRepository.find();

    if (!readCapacidad) {
      throw new NotFoundException('Capacidads does not exist');
    }
    return readCapacidad;
  }

  async findFase(faseId: number): Promise<Capacidad[]> {
    const readCapacidad: Capacidad[] = await this.__capacidadRepository.find({
      where: { id_fase: faseId },
    });

    if (!readCapacidad) {
      throw new NotFoundException('fase id does not exist');
    }
    return readCapacidad;
  }
  async findOne(capacidadId: number): Promise<Capacidad> {
    const readCapacidad: Capacidad = await this.__capacidadRepository.findOne({
      where: { id_capacidad: capacidadId },
    });

    if (!readCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }
    return readCapacidad;
  }

  async update(
    capacidadId: number,
    updateCapacidad: Capacidad,
  ): Promise<Capacidad> {
    const readCapacidad: Capacidad = await this.__capacidadRepository.findOne({
      where: { id_capacidad: capacidadId },
    });

    if (!readCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }
    readCapacidad.id_fase = updateCapacidad.id_fase;
    readCapacidad.capacidad = updateCapacidad.capacidad;
    const updatedCapacidad = await this.__capacidadRepository.update(
      capacidadId,
      readCapacidad,
    );
    return readCapacidad;
  }

  async remove(capacidadId: number): Promise<void> {
    const readCapacidad: Capacidad = await this.__capacidadRepository.findOne({
      where: { id_capacidad: capacidadId },
    });

    if (!readCapacidad) {
      throw new NotFoundException('capacidad does not exist');
    }

    await this.__capacidadRepository.delete(capacidadId);
  }
}
