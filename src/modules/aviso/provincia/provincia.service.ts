import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Provincia} from './entities/provincia.entity';
import {ProvinciaRepository } from './provincia.repository';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(ProvinciaRepository)
    private readonly _provinciaRepository: ProvinciaRepository,
  ) {}
  async create(createProvincia: Partial<Provincia>): Promise<Provincia> {
    const savedProvincia: Provincia = await this._provinciaRepository.save(
      createProvincia,
    );
    return savedProvincia;
  }

  async findAll(): Promise<Provincia[]> {
    const readProvincia: Provincia[] = await this._provinciaRepository.find();

    if (!readProvincia) {
      throw new NotFoundException('Provincia no existen');
    }
    return readProvincia;
  }

  async findOne(provinciaId: number): Promise<Provincia> {
    const readProvincia: Provincia = await this._provinciaRepository.findOne(
      {
        where: { provinciaId: provinciaId },
      },
    );

    if (!readProvincia) {
      throw new NotFoundException('Este ID de Provincia no existe');
    }
    return readProvincia;
  }

  async update(
    provinciaId: number,
    updateProvincia: Provincia,
  ): Promise<Provincia> {
    const readProvincia: Provincia = await this._provinciaRepository.findOne(
      {
        where: { provinciaId: provinciaId },
      },
    );

    if (!readProvincia) {
      throw new NotFoundException('Este ID de Provincia no existe');
    }
    readProvincia.provincia = updateProvincia.provincia;
    const updatedProvincia= await this._provinciaRepository.update(
      provinciaId,
      updateProvincia,
    );
    return readProvincia;
  }

  async remove(provinciaId: number): Promise<void> {
    const readProvincia: Provincia = await this._provinciaRepository.findOne(
      {
        where: { provinciaId: provinciaId },
      },
    );

    if (!readProvincia) {
      throw new NotFoundException('Este ID de Provincia no existe');
    }

    await this._provinciaRepository.delete(provinciaId);
  }
}
