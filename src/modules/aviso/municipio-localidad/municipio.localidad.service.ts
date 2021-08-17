import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {municipioLocalidad} from './entities/municipio.localidad';
import {municipioLocalidadRepository } from './municipio.localidad.repository';

@Injectable()
export class municipioLocalidadService {
  constructor(
    @InjectRepository(municipioLocalidadRepository)
    private readonly _provinciaRepository: municipioLocalidadRepository,
  ) {}
  async create(createmunicipioLocalidad: Partial<municipioLocalidad>): Promise<municipioLocalidad> {
    const savedmunicipioLocalidad: municipioLocalidad = await this._provinciaRepository.save(
      createmunicipioLocalidad,
    );
    return savedmunicipioLocalidad;
  }

  async findAll(): Promise<municipioLocalidad[]> {
    const readmunicipioLocalidad: municipioLocalidad[] = await this._provinciaRepository.find();

    if (!readmunicipioLocalidad) {
      throw new NotFoundException('municipioLocalidad no existen');
    }
    return readmunicipioLocalidad;
  }

  async findOne(municipioLocalidadId: number): Promise<municipioLocalidad> {
    const readmunicipioLocalidad: municipioLocalidad = await this._provinciaRepository.findOne(
      {
        where: { municipioLocalidadId: municipioLocalidadId },
      },
    );

    if (!readmunicipioLocalidad) {
      throw new NotFoundException('Este ID de municipioLocalidad no existe');
    }
    return readmunicipioLocalidad;
  }

  async update(
    municipioLocalidadId: number,
    updatemunicipioLocalidad: municipioLocalidad,
  ): Promise<municipioLocalidad> {
    const readmunicipioLocalidad: municipioLocalidad = await this._provinciaRepository.findOne(
      {
        where: { municipioLocalidadId: municipioLocalidadId },
      },
    );

    if (!readmunicipioLocalidad) {
      throw new NotFoundException('Este ID de municipioLocalidad no existe');
    }
    readmunicipioLocalidad.municipio = updatemunicipioLocalidad.municipio;
    readmunicipioLocalidad.localidad = updatemunicipioLocalidad.localidad;
    const updatedmunicipioLocalidad= await this._provinciaRepository.update(
      municipioLocalidadId,
      updatemunicipioLocalidad,
    );
    return readmunicipioLocalidad;
  }

  async remove(municipioLocalidadId: number): Promise<void> {
    const readmunicipioLocalidad: municipioLocalidad = await this._provinciaRepository.findOne(
      {
        where: { municipioLocalidadId: municipioLocalidadId },
      },
    );

    if (!readmunicipioLocalidad) {
      throw new NotFoundException('Este ID de municipioLocalidad no existe');
    }

    await this._provinciaRepository.delete(municipioLocalidadId);
  }
}
