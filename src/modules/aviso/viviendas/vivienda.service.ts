import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Vivienda} from './entities/vivienda.entity';
import {ViviendaRepository } from './vivienda.repository';

@Injectable()
export class ViviendaService {
  constructor(
    @InjectRepository(ViviendaRepository)
    private readonly _efectoRepository: ViviendaRepository,
  ) {}
  async create(createVivienda: Partial<Vivienda>): Promise<Vivienda> {
    const savedVivienda: Vivienda = await this._efectoRepository.save(
      createVivienda,
    );
    return savedVivienda;
  }

  async findAll(): Promise<Vivienda[]> {
    const readVivienda: Vivienda[] = await this._efectoRepository.find();

    if (!readVivienda) {
      throw new NotFoundException('Vivienda no existen');
    }
    return readVivienda;
  }

  async findOne(viviendaId: number): Promise<Vivienda> {
    const readVivienda: Vivienda = await this._efectoRepository.findOne(
      {
        where: { viviendaId: viviendaId },
      },
    );

    if (!readVivienda) {
      throw new NotFoundException('Este ID de Vivienda no existe');
    }
    return readVivienda;
  }

  async update(
    viviendaId: number,
    updateVivienda: Vivienda,
  ): Promise<Vivienda> {
    const readVivienda: Vivienda = await this._efectoRepository.findOne(
      {
        where: { viviendaId: viviendaId },
      },
    );

    if (!readVivienda) {
      throw new NotFoundException('Este ID de Vivienda no existe');
    }
    readVivienda.vivienda = updateVivienda.vivienda;
    const updatedVivienda= await this._efectoRepository.update(
      viviendaId,
      updateVivienda,
    );
    return readVivienda;
  }

  async remove(viviendaId: number): Promise<void> {
    const readVivienda: Vivienda = await this._efectoRepository.findOne(
      {
        where: { viviendaId: viviendaId },
      },
    );

    if (!readVivienda) {
      throw new NotFoundException('Este ID de Vivienda no existe');
    }

    await this._efectoRepository.delete(viviendaId);
  }
}
