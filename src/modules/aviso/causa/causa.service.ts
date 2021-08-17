import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Causas} from './entities/causa.entity';
import {CausasRepository } from './causa.repository';

@Injectable()
export class CausasService {
  constructor(
    @InjectRepository(CausasRepository)
    private readonly _causaRepository: CausasRepository,
  ) {}
  async create(createCausas: Partial<Causas>): Promise<Causas> {
    const savedCausas: Causas = await this._causaRepository.save(
      createCausas,
    );
    return savedCausas;
  }

  async findAll(): Promise<Causas[]> {
    const readCausas: Causas[] = await this._causaRepository.find();

    if (!readCausas) {
      throw new NotFoundException('Causas no existen');
    }
    return readCausas;
  }

  async findOne(causaId: number): Promise<Causas> {
    const readCausas: Causas = await this._causaRepository.findOne(
      {
        where: { causaId: causaId },
      },
    );

    if (!readCausas) {
      throw new NotFoundException('Este ID de Causas no existe');
    }
    return readCausas;
  }

  async update(
    causaId: number,
    updateCausas: Causas,
  ): Promise<Causas> {
    const readCausas: Causas = await this._causaRepository.findOne(
      {
        where: { causaId: causaId },
      },
    );

    if (!readCausas) {
      throw new NotFoundException('Este ID de Causas no existe');
    }
    readCausas.causa = updateCausas.causa;
    const updatedCausas= await this._causaRepository.update(
      causaId,
      updateCausas,
    );
    return readCausas;
  }

  async remove(causaId: number): Promise<void> {
    const readCausas: Causas = await this._causaRepository.findOne(
      {
        where: { causaId: causaId },
      },
    );

    if (!readCausas) {
      throw new NotFoundException('Este ID de Causas no existe');
    }

    await this._causaRepository.delete(causaId);
  }
}
