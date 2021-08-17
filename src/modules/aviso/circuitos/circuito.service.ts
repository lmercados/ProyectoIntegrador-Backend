import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Circuito} from './entities/circuito.entity';
import {CircuitoRepository } from './circuito.repository';

@Injectable()
export class CircuitoService {
  constructor(
    @InjectRepository(CircuitoRepository)
    private readonly _efectoRepository: CircuitoRepository,
  ) {}
  async create(createCircuito: Partial<Circuito>): Promise<Circuito> {
    const savedCircuito: Circuito = await this._efectoRepository.save(
      createCircuito,
    );
    return savedCircuito;
  }

  async findAll(): Promise<Circuito[]> {
    const readCircuito: Circuito[] = await this._efectoRepository.find();

    if (!readCircuito) {
      throw new NotFoundException('Circuito no existen');
    }
    return readCircuito;
  }

  async findOne(circuitoId: number): Promise<Circuito> {
    const readCircuito: Circuito = await this._efectoRepository.findOne(
      {
        where: { circuitoId: circuitoId },
      },
    );

    if (!readCircuito) {
      throw new NotFoundException('Este ID de Circuito no existe');
    }
    return readCircuito;
  }

  async update(
    circuitoId: number,
    updateCircuito: Circuito,
  ): Promise<Circuito> {
    const readCircuito: Circuito = await this._efectoRepository.findOne(
      {
        where: { circuitoId: circuitoId },
      },
    );

    if (!readCircuito) {
      throw new NotFoundException('Este ID de Circuito no existe');
    }
    readCircuito.circuito = updateCircuito.circuito;
    const updatedCircuito= await this._efectoRepository.update(
      circuitoId,
      updateCircuito,
    );
    return readCircuito;
  }

  async remove(circuitoId: number): Promise<void> {
    const readCircuito: Circuito = await this._efectoRepository.findOne(
      {
        where: { circuitoId: circuitoId },
      },
    );

    if (!readCircuito) {
      throw new NotFoundException('Este ID de Circuito no existe');
    }

    await this._efectoRepository.delete(circuitoId);
  }
}
