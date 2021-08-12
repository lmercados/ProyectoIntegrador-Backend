import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { UnidadConstructiva } from './entities/unidad.constructiva.entity';
import { UnidadConstructivaRepository } from './unidad.constructiva.repository';

@Injectable()
export class UnidadConstructivaService {
  constructor(
    @InjectRepository(UnidadConstructivaRepository)
    private readonly _unidadConstructivaRepository: UnidadConstructivaRepository,
  ) {}
  async create(createUnidadConstructiva: Partial<UnidadConstructiva>): Promise<UnidadConstructiva> {
    const savedUnidadConstructiva: UnidadConstructiva = await this._unidadConstructivaRepository.save(
      createUnidadConstructiva,
    );
    return savedUnidadConstructiva;
  }

  async findAll(): Promise<UnidadConstructiva[]> {
    const readUnidadConstructiva: UnidadConstructiva[] = await this._unidadConstructivaRepository.find();

    if (!readUnidadConstructiva) {
      throw new NotFoundException('UnidadConstructivas does not exist');
    }
    return readUnidadConstructiva;
  }

  async findUnidad(unidadId: number): Promise<UnidadConstructiva[]> {
    const readUnidadConstructiva: UnidadConstructiva[] = await this._unidadConstructivaRepository.find({
      where: { id_unidad: unidadId },
    });

    if (!readUnidadConstructiva) {
      throw new NotFoundException('fase id does not exist');
    }
    return readUnidadConstructiva;
  }
  async findOne(unidadConstructivaId: number): Promise<UnidadConstructiva> {
    const readUnidadConstructiva: UnidadConstructiva = await this._unidadConstructivaRepository.findOne({
      where: { id_unidad: unidadConstructivaId },
    });

    if (!readUnidadConstructiva) {
      throw new NotFoundException('UnidadConstructiva does not exist');
    }
    return readUnidadConstructiva;
  }

  async update(
    unidadConstructivaId: number,
    updateUnidadConstructiva: UnidadConstructiva,
  ): Promise<UnidadConstructiva> {
    const readUnidadConstructiva: UnidadConstructiva = await this._unidadConstructivaRepository.findOne({
      where: { id_unidad: unidadConstructivaId },
    });

    if (!readUnidadConstructiva) {
      throw new NotFoundException('UnidadConstructiva does not exist');
    }

    readUnidadConstructiva.codigo = updateUnidadConstructiva.codigo;
    readUnidadConstructiva.descripcion = updateUnidadConstructiva.descripcion;
    const updatedUnidadConstructiva = await this._unidadConstructivaRepository.update(
      unidadConstructivaId,
      readUnidadConstructiva,
    );
    return readUnidadConstructiva;
  }

  async remove(unidadConstructivaId: number): Promise<void> {
    const readUnidadConstructiva: UnidadConstructiva = await this._unidadConstructivaRepository.findOne({
      where: { id_unidad: unidadConstructivaId },
    });

    if (!readUnidadConstructiva) {
      throw new NotFoundException('UnidadConstructiva does not exist');
    }

    await this._unidadConstructivaRepository.delete(unidadConstructivaId);
  }
}
