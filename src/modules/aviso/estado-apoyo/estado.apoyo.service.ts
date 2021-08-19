import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {estadoApoyo} from './entities/estado.apoyo.entity';
import {estadoApoyoRepository } from './estado.apoyo.repository';

@Injectable()
export class estadoApoyoService {
  constructor(
    @InjectRepository(estadoApoyoRepository)
    private readonly _estadoApoyoRepository: estadoApoyoRepository,
  ) {}
  async create(createestadoApoyo: Partial<estadoApoyo>): Promise<estadoApoyo> {
    const savedestadoApoyo: estadoApoyo = await this._estadoApoyoRepository.save(
      createestadoApoyo,
    );
    return savedestadoApoyo;
  }

  async findAll(): Promise<estadoApoyo[]> {
    const readestadoApoyo: estadoApoyo[] = await this._estadoApoyoRepository.find();

    if (!readestadoApoyo) {
      throw new NotFoundException('estadoApoyo no existen');
    }
    return readestadoApoyo;
  }

  async findOne(estadoApoyoId: number): Promise<estadoApoyo> {
    const readestadoApoyo: estadoApoyo = await this._estadoApoyoRepository.findOne(
      {
        where: { estadoApoyoId: estadoApoyoId },
      },
    );

    if (!readestadoApoyo) {
      throw new NotFoundException('Este ID de estadoApoyo no existe');
    }
    return readestadoApoyo;
  }

  async update(
    estadoApoyoId: number,
    updateestadoApoyo: estadoApoyo,
  ): Promise<estadoApoyo> {
    const readestadoApoyo: estadoApoyo = await this._estadoApoyoRepository.findOne(
      {
        where: { estadoApoyoId: estadoApoyoId },
      },
    );

    if (!readestadoApoyo) {
      throw new NotFoundException('Este ID de estadoApoyo no existe');
    }
    readestadoApoyo.estadoApoyo = updateestadoApoyo.estadoApoyo;
    const updatedestadoApoyo= await this._estadoApoyoRepository.update(
      estadoApoyoId,
      updateestadoApoyo,
    );
    return readestadoApoyo;
  }

  async remove(estadoApoyoId: number): Promise<void> {
    const readestadoApoyo: estadoApoyo = await this._estadoApoyoRepository.findOne(
      {
        where: { estadoApoyoId: estadoApoyoId },
      },
    );

    if (!readestadoApoyo) {
      throw new NotFoundException('Este ID de estadoApoyo no existe');
    }

    await this._estadoApoyoRepository.delete(estadoApoyoId);
  }
}
