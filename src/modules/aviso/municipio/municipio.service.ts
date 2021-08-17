import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Municipio} from './entities/municipio';
import {MunicipioRepository } from './municipio.repository';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(MunicipioRepository)
    private readonly _municipioRepository: MunicipioRepository,
  ) {}
  async create(createMunicipio: Partial<Municipio>): Promise<Municipio> {
    const savedMunicipio: Municipio = await this._municipioRepository.save(
      createMunicipio,
    );
    return savedMunicipio;
  }

  async findAll(): Promise<Municipio[]> {
    const readMunicipio: Municipio[] = await this._municipioRepository.find();

    if (!readMunicipio) {
      throw new NotFoundException('Municipio no existen');
    }
    return readMunicipio;
  }

  async findOne(municipioId: number): Promise<Municipio> {
    const readMunicipio: Municipio = await this._municipioRepository.findOne(
      {
        where: { municipioId: municipioId },
      },
    );

    if (!readMunicipio) {
      throw new NotFoundException('Este ID de Municipio no existe');
    }
    return readMunicipio;
  }

  async update(
    municipioId: number,
    updateMunicipio: Municipio,
  ): Promise<Municipio> {
    const readMunicipio: Municipio = await this._municipioRepository.findOne(
      {
        where: { municipioId: municipioId },
      },
    );

    if (!readMunicipio) {
      throw new NotFoundException('Este ID de Municipio no existe');
    }
    readMunicipio.municipio = updateMunicipio.municipio;
    const updatedMunicipio= await this._municipioRepository.update(
      municipioId,
      updateMunicipio,
    );
    return readMunicipio;
  }

  async remove(municipioId: number): Promise<void> {
    const readMunicipio: Municipio = await this._municipioRepository.findOne(
      {
        where: { municipioId: municipioId },
      },
    );

    if (!readMunicipio) {
      throw new NotFoundException('Este ID de Municipio no existe');
    }

    await this._municipioRepository.delete(municipioId);
  }
}
