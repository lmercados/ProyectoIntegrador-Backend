import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resultadoEstado } from './entities/resultado.estado.entity';
import {resultadoEstadoRepository} from './resultado.estado.repository';

@Injectable()
export class resultadoEstadoService {
  constructor(
    @InjectRepository(resultadoEstadoRepository)
    private readonly __resultadoEstadoRepository: resultadoEstadoRepository,
  ) {}
  async create(createresultadoEstado: Partial<resultadoEstado>): Promise<resultadoEstado> {
    const savedresultadoEstado: resultadoEstado = await this.__resultadoEstadoRepository.save(
      createresultadoEstado,
    );
    return savedresultadoEstado;
  }

  async findAll(): Promise<resultadoEstado[]> {
    const readresultadoEstado: resultadoEstado[] = await this.__resultadoEstadoRepository.find();

    if (!readresultadoEstado) {
      throw new NotFoundException('resultadoEstado does not exist');
    }
    return readresultadoEstado;
  }

  async findresultadoEstado(resultadoId: number): Promise<resultadoEstado[]> {
    const readresultadoEstado: resultadoEstado[] = await this.__resultadoEstadoRepository.find({
      where: { resultado: resultadoId },
    });

    if (!readresultadoEstado) {
      throw new NotFoundException('estados id does not exist');
    }
    return readresultadoEstado;
  }
  async findOne(estadoResultadoId: number): Promise<resultadoEstado> {
    const readresultadoEstado: resultadoEstado = await this.__resultadoEstadoRepository.findOne({
      where: { resultadoEstadoId: estadoResultadoId },
    });

    if (!readresultadoEstado) {
      throw new NotFoundException('estados does not exist');
    }
    return readresultadoEstado;
  }

  async update(
    estadoResultadoId: number,
    updateresultadoEstado: resultadoEstado,
  ): Promise<resultadoEstado> {
    const readresultadoEstado: resultadoEstado = await this.__resultadoEstadoRepository.findOne({
      where: { resultadoEstadoId: estadoResultadoId },
    });

    if (!readresultadoEstado) {
      throw new NotFoundException('estados does not exist');
    }

    readresultadoEstado.estado = updateresultadoEstado.estado;
    readresultadoEstado.resultado = updateresultadoEstado.resultado;
    const updatedresultadoEstado = await this.__resultadoEstadoRepository.update(
      estadoResultadoId,
      readresultadoEstado,
    );
    return readresultadoEstado;
  }

  async remove(estadoResultadoId: number): Promise<void> {
    const readresultadoEstado: resultadoEstado = await this.__resultadoEstadoRepository.findOne({
      where: { resultadoEstadoId: estadoResultadoId },
    });

    if (!readresultadoEstado) {
      throw new NotFoundException('estados does not exist');
    }

    await this.__resultadoEstadoRepository.delete(estadoResultadoId);
  }
}
