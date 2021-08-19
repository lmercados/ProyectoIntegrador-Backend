import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Localidad} from './entities/localidad.entity';
import {LocalidadRepository } from './localidad.repository';

@Injectable()
export class LocalidadService {
  constructor(
    @InjectRepository(LocalidadRepository)
    private readonly _localidadRepository: LocalidadRepository,
  ) {}
  async create(createLocalidad: Partial<Localidad>): Promise<Localidad> {
    const savedLocalidad: Localidad = await this._localidadRepository.save(
      createLocalidad,
    );
    return savedLocalidad;
  }

  async findAll(): Promise<Localidad[]> {
    const readLocalidad: Localidad[] = await this._localidadRepository.find();

    if (!readLocalidad) {
      throw new NotFoundException('Localidad no existen');
    }
    return readLocalidad;
  }

  async findOne(localidadId: number): Promise<Localidad> {
    const readLocalidad: Localidad = await this._localidadRepository.findOne(
      {
        where: { localidadId: localidadId },
      },
    );

    if (!readLocalidad) {
      throw new NotFoundException('Este ID de Localidad no existe');
    }
    return readLocalidad;
  }

  async update(
    localidadId: number,
    updateLocalidad: Localidad,
  ): Promise<Localidad> {
    const readLocalidad: Localidad = await this._localidadRepository.findOne(
      {
        where: { localidadId: localidadId },
      },
    );

    if (!readLocalidad) {
      throw new NotFoundException('Este ID de Localidad no existe');
    }
    readLocalidad.localidad = updateLocalidad.localidad;
    const updatedLocalidad= await this._localidadRepository.update(
      localidadId,
      updateLocalidad,
    );
    return readLocalidad;
  }

  async remove(localidadId: number): Promise<void> {
    const readLocalidad: Localidad = await this._localidadRepository.findOne(
      {
        where: { localidadId: localidadId },
      },
    );

    if (!readLocalidad) {
      throw new NotFoundException('Este ID de Localidad no existe');
    }

    await this._localidadRepository.delete(localidadId);
  }
}
