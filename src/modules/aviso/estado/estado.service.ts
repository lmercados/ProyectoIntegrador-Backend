import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Estados} from './entities/estado.entity';
import {EstadosRepository } from './estado.repository';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(EstadosRepository)
    private readonly _estadoRepository: EstadosRepository,
  ) {}
  async create(createEstados: Partial<Estados>): Promise<Estados> {
    const savedEstados: Estados = await this._estadoRepository.save(
      createEstados,
    );
    return savedEstados;
  }

  async findAll(): Promise<Estados[]> {
    const readEstados: Estados[] = await this._estadoRepository.find();

    if (!readEstados) {
      throw new NotFoundException('Estados no existen');
    }
    return readEstados;
  }

  async findOne(estadoId: number): Promise<Estados> {
    const readEstados: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstados) {
      throw new NotFoundException('Este ID de Estados no existe');
    }
    return readEstados;
  }

  async update(
    estadoId: number,
    updateEstados: Estados,
  ): Promise<Estados> {
    const readEstados: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstados) {
      throw new NotFoundException('Este ID de Estados no existe');
    }
    readEstados.estado = updateEstados.estado;
    const updatedEstados= await this._estadoRepository.update(
      estadoId,
      updateEstados,
    );
    return readEstados;
  }

  async remove(estadoId: number): Promise<void> {
    const readEstados: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstados) {
      throw new NotFoundException('Este ID de Estados no existe');
    }

    await this._estadoRepository.delete(estadoId);
  }
}
