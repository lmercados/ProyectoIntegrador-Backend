import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { soporteTipoSoporte } from './entities/soporteTipoSoporte.entity';
import {soporteTipoSoporteRepository} from './soporteTipoSoporte.repository';

@Injectable()
export class soporteTipoSoporteService {
  constructor(
    @InjectRepository(soporteTipoSoporteRepository)
    private readonly __soporteTipoSoporteRepository: soporteTipoSoporteRepository,
  ) {}
  async create(createsoporteTipoSoporte: Partial<soporteTipoSoporte>): Promise<soporteTipoSoporte> {
    const savedsoporteTipoSoporte: soporteTipoSoporte = await this.__soporteTipoSoporteRepository.save(
      createsoporteTipoSoporte,
    );
    return savedsoporteTipoSoporte;
  }

  async findAll(): Promise<soporteTipoSoporte[]> {
    const readsoporteTipoSoporte: soporteTipoSoporte[] = await this.__soporteTipoSoporteRepository.find();

    if (!readsoporteTipoSoporte) {
      throw new NotFoundException('soporteTipoSoporte does not exist');
    }
    return readsoporteTipoSoporte;
  }

  async findsoporteTipoSoporte(soporteId: number): Promise<soporteTipoSoporte[]> {
    const readsoporteTipoSoporte: soporteTipoSoporte[] = await this.__soporteTipoSoporteRepository.find({
      where: { soporteId: soporteId },
    });

    if (!readsoporteTipoSoporte) {
      throw new NotFoundException('fase id does not exist');
    }
    return readsoporteTipoSoporte;
  }
  async findOne(soporteTipoSoporteId: number): Promise<soporteTipoSoporte> {
    const readsoporteTipoSoporte: soporteTipoSoporte = await this.__soporteTipoSoporteRepository.findOne({
      where: { soporteTipoSoporteId: soporteTipoSoporteId },
    });

    if (!readsoporteTipoSoporte) {
      throw new NotFoundException('capacidad does not exist');
    }
    return readsoporteTipoSoporte;
  }

  async update(
    soporteTipoSoporteId: number,
    updatesoporteTipoSoporte: soporteTipoSoporte,
  ): Promise<soporteTipoSoporte> {
    const readsoporteTipoSoporte: soporteTipoSoporte = await this.__soporteTipoSoporteRepository.findOne({
      where: { soporteTipoSoporteId: soporteTipoSoporteId },
    });

    if (!readsoporteTipoSoporte) {
      throw new NotFoundException('capacidad does not exist');
    }

    readsoporteTipoSoporte.soporteId = updatesoporteTipoSoporte.soporteId;
    readsoporteTipoSoporte.tipoSoporteId = updatesoporteTipoSoporte.tipoSoporteId;
    const updatedsoporteTipoSoporte = await this.__soporteTipoSoporteRepository.update(
      soporteTipoSoporteId,
      readsoporteTipoSoporte,
    );
    return readsoporteTipoSoporte;
  }

  async remove(soporteTipoSoporteId: number): Promise<void> {
    const readsoporteTipoSoporte: soporteTipoSoporte = await this.__soporteTipoSoporteRepository.findOne({
      where: { soporteTipoSoporteId: soporteTipoSoporteId },
    });

    if (!readsoporteTipoSoporte) {
      throw new NotFoundException('capacidad does not exist');
    }

    await this.__soporteTipoSoporteRepository.delete(soporteTipoSoporteId);
  }
}
