import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoSoporte } from './entities/tipo.soportes.entity';
import { TipoSoporteRepository } from './tipo.soportes.repository';

@Injectable()
export class TipoSoporteService {
  constructor(
    @InjectRepository(TipoSoporteRepository)
    private readonly __tiposoporteRepository: TipoSoporteRepository,
  ) {}
  async create(createtipoSoporte: Partial<TipoSoporte>): Promise<TipoSoporte> {
    const savedtipoSoporte: TipoSoporte = await this.__tiposoporteRepository.save(
      createtipoSoporte,
    );
    return savedtipoSoporte;
  }

  async findAll(): Promise<TipoSoporte[]> {
    const readtipoSoporte: TipoSoporte[] = await this.__tiposoporteRepository.find();

    if (!readtipoSoporte) {
      throw new NotFoundException('Tipo de Soportes does not exist');
    }
    return readtipoSoporte;
  }
  async findAllSoporte(tipoSoporteId: number): Promise<TipoSoporte[]> {
    const readtipoSoporte: TipoSoporte[] = await this.__tiposoporteRepository.find(
      { where: { tipoSoporteId: tipoSoporteId } },
    );

    if (!readtipoSoporte) {
      throw new NotFoundException('Tipo de Soportes no existen');
    }
    return readtipoSoporte;
  }
  async findOne(tiposoporteId: number): Promise<TipoSoporte> {
    const readtipoSoporte: TipoSoporte = await this.__tiposoporteRepository.findOne(
      {
        where: { tipoSoporteId: tiposoporteId },
      },
    );

    if (!readtipoSoporte) {
      throw new NotFoundException('Este ID para este soporte no existe');
    }
    return readtipoSoporte;
  }

  async update(
    tiposoporteId: number,
    updatetipoSoporte: TipoSoporte,
  ): Promise<TipoSoporte> {
    const readtipoSoporte: TipoSoporte = await this.__tiposoporteRepository.findOne(
      {
        where: { tipoSoporteId: tiposoporteId },
      },
    );

    if (!readtipoSoporte) {
      throw new NotFoundException('Este ID para este soporte no existe');
    }
    readtipoSoporte.tipoSoporteId = tiposoporteId;
    readtipoSoporte.tipoSoporte = updatetipoSoporte.tipoSoporte;

    const updatedtipoSoporte = await this.__tiposoporteRepository.update(
      tiposoporteId,
      readtipoSoporte,
    );
    return readtipoSoporte;
  }

  async remove(tiposoporteId: number): Promise<void> {
    const readtipoSoporte: TipoSoporte = await this.__tiposoporteRepository.findOne(
      {
        where: { tipoSoporteId: tiposoporteId },
      },
    );

    if (!readtipoSoporte) {
      throw new NotFoundException('Este ID para este soporte no existe');
    }

    await this.__tiposoporteRepository.delete(tiposoporteId);
  }
}
