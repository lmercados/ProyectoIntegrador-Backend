import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Soporte } from './entities/soportes.entity';
import { SoporteRepository } from './soportes.repository';

@Injectable()
export class SoporteService {
  constructor(
    @InjectRepository(SoporteRepository)
    private readonly __soporteRepository: SoporteRepository,
  ) {}
  async create(createSoporte: Partial<Soporte>): Promise<Soporte> {
    const savedSoporte: Soporte = await this.__soporteRepository.save(
      createSoporte,
    );
    return savedSoporte;
  }

  async findAll(): Promise<Soporte[]> {
    const readSoporte: Soporte[] = await this.__soporteRepository.find();

    if (!readSoporte) {
      throw new NotFoundException('Soportes does not exist');
    }
    return readSoporte;
  }

  async findOne(soporteId: number): Promise<Soporte> {
    const readSoporte: Soporte = await this.__soporteRepository.findOne({
      where: { soporteId: soporteId },
    });

    if (!readSoporte) {
      throw new NotFoundException('Soportes does not exist');
    }
    return readSoporte;
  }

  async update(soporteId: number, updateSoporte: Soporte): Promise<Soporte> {
    const readSoporte: Soporte = await this.__soporteRepository.findOne({
      where: { soporteId: soporteId },
    });

    if (!readSoporte) {
      throw new NotFoundException('Soportes does not exist');
    }
    readSoporte.soporte = updateSoporte.soporte;
    readSoporte.soporteId = updateSoporte.soporteId;
    const updatedSoporte = await this.__soporteRepository.update(
      soporteId,
      readSoporte,
    );
    return readSoporte;
  }

  async remove(soporteId: number): Promise<void> {
    const readSoporte: Soporte = await this.__soporteRepository.findOne({
      where: { soporteId: soporteId },
    });

    if (!readSoporte) {
      throw new NotFoundException('Soportes does not exist');
    }

    await this.__soporteRepository.delete(soporteId);
  }
}
