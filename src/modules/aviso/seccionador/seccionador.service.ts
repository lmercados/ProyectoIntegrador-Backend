import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Seccionador} from './entities/seccionador.entity';
import {SeccionadorRepository } from './seccionador.repository';

@Injectable()
export class SeccionadorService {
  constructor(
    @InjectRepository(SeccionadorRepository)
    private readonly _seccionadorRepository: SeccionadorRepository,
  ) {}
  async create(createSeccionador: Partial<Seccionador>): Promise<Seccionador> {
    const savedSeccionador: Seccionador = await this._seccionadorRepository.save(
      createSeccionador,
    );
    return savedSeccionador;
  }

  async findAll(): Promise<Seccionador[]> {
    const readSeccionador: Seccionador[] = await this._seccionadorRepository.find();

    if (!readSeccionador) {
      throw new NotFoundException('Seccionador no existen');
    }
    return readSeccionador;
  }

  async findOne(seccionadorId: number): Promise<Seccionador> {
    const readSeccionador: Seccionador = await this._seccionadorRepository.findOne(
      {
        where: { seccionadorId: seccionadorId },
      },
    );

    if (!readSeccionador) {
      throw new NotFoundException('Este ID de Seccionador no existe');
    }
    return readSeccionador;
  }

  async update(
    seccionadorId: number,
    updateSeccionador: Seccionador,
  ): Promise<Seccionador> {
    const readSeccionador: Seccionador = await this._seccionadorRepository.findOne(
      {
        where: { seccionadorId: seccionadorId },
      },
    );

    if (!readSeccionador) {
      throw new NotFoundException('Este ID de Seccionador no existe');
    }
    readSeccionador.seccionador = updateSeccionador.seccionador;
    const updatedSeccionador= await this._seccionadorRepository.update(
      seccionadorId,
      updateSeccionador,
    );
    return readSeccionador;
  }

  async remove(seccionadorId: number): Promise<void> {
    const readSeccionador: Seccionador = await this._seccionadorRepository.findOne(
      {
        where: { seccionadorId: seccionadorId },
      },
    );

    if (!readSeccionador) {
      throw new NotFoundException('Este ID de Seccionador no existe');
    }

    await this._seccionadorRepository.delete(seccionadorId);
  }
}
