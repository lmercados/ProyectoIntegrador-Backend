import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Apoyo} from './entities/apoyo.entity';
import {ApoyoRepository } from './apoyo.repository';

@Injectable()
export class ApoyoService {
  constructor(
    @InjectRepository(ApoyoRepository)
    private readonly _apoyoRepository: ApoyoRepository,
  ) {}
  async create(createApoyo: Partial<Apoyo>): Promise<Apoyo> {
    const savedApoyo: Apoyo = await this._apoyoRepository.save(
      createApoyo,
    );
    return savedApoyo;
  }

  async findAll(): Promise<Apoyo[]> {
    const readApoyo: Apoyo[] = await this._apoyoRepository.find();

    if (!readApoyo) {
      throw new NotFoundException('Apoyo no existen');
    }
    return readApoyo;
  }

  async findOne(apoyoId: number): Promise<Apoyo> {
    const readApoyo: Apoyo = await this._apoyoRepository.findOne(
      {
        where: { apoyoId: apoyoId },
      },
    );

    if (!readApoyo) {
      throw new NotFoundException('Este ID de Apoyo no existe');
    }
    return readApoyo;
  }

  async update(
    apoyoId: number,
    updateApoyo: Apoyo,
  ): Promise<Apoyo> {
    const readApoyo: Apoyo = await this._apoyoRepository.findOne(
      {
        where: { apoyoId: apoyoId },
      },
    );

    if (!readApoyo) {
      throw new NotFoundException('Este ID de Apoyo no existe');
    }
    readApoyo.apoyo = updateApoyo.apoyo;
    const updatedApoyo= await this._apoyoRepository.update(
      apoyoId,
      updateApoyo,
    );
    return readApoyo;
  }

  async remove(apoyoId: number): Promise<void> {
    const readApoyo: Apoyo = await this._apoyoRepository.findOne(
      {
        where: { apoyoId: apoyoId },
      },
    );

    if (!readApoyo) {
      throw new NotFoundException('Este ID de Apoyo no existe');
    }

    await this._apoyoRepository.delete(apoyoId);
  }
}
