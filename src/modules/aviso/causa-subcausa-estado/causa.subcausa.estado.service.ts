import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {causaSubCausaEstado} from './entities/causa.subcausa.estado.entity';
import {causaSubCausaEstadoRepository } from './causa.subcausa.estado.repository';

@Injectable()
export class causaSubCausaEstadoService {
  constructor(
    @InjectRepository(causaSubCausaEstadoRepository)
    private readonly _causaRepository: causaSubCausaEstadoRepository,
  ) {}
  async create(createcausaSubCausaEstado: Partial<causaSubCausaEstado>): Promise<causaSubCausaEstado> {
    const savedcausaSubCausaEstado: causaSubCausaEstado = await this._causaRepository.save(
      createcausaSubCausaEstado,
    );
    return savedcausaSubCausaEstado;
  }

  async findAll(): Promise<causaSubCausaEstado[]> {
    const readcausaSubCausaEstado: causaSubCausaEstado[] = await this._causaRepository.find();

    if (!readcausaSubCausaEstado) {
      throw new NotFoundException('causaSubCausaEstado no existen');
    }
    return readcausaSubCausaEstado;
  }

  async find(causaId: number,subcausaId: number): Promise<causaSubCausaEstado> {
    const readcausaSubCausaEstado: causaSubCausaEstado= await this._causaRepository.findOne(
      {
        where: { causa: causaId,subcausa:subcausaId },
      },
    );

    if (!readcausaSubCausaEstado) {
      throw new NotFoundException('Este ID de causaSubCausaEstado no existe');
    }
    return readcausaSubCausaEstado;
  }

  async update(
    causaSubcausaId: number,
    updatecausaSubCausaEstado: causaSubCausaEstado,
  ): Promise<causaSubCausaEstado> {
    const readcausaSubCausaEstado: causaSubCausaEstado = await this._causaRepository.findOne(
      {
        where: { causaSubcausaId: causaSubcausaId },
      },
    );

    if (!readcausaSubCausaEstado) {
      throw new NotFoundException('Este ID de causaSubCausaEstado no existe');
    }
    readcausaSubCausaEstado.causa = updatecausaSubCausaEstado.causa;
    readcausaSubCausaEstado.subcausa = updatecausaSubCausaEstado.subcausa;
    const updatedcausaSubCausaEstado= await this._causaRepository.update(
      causaSubcausaId,
      updatecausaSubCausaEstado,
    );
    return readcausaSubCausaEstado;
  }

  async remove(causaId: number): Promise<void> {
    const readcausaSubCausaEstado: causaSubCausaEstado = await this._causaRepository.findOne(
      {
        where: { causaId: causaId },
      },
    );

    if (!readcausaSubCausaEstado) {
      throw new NotFoundException('Este ID de causaSubCausaEstado no existe');
    }

    await this._causaRepository.delete(causaId);
  }
}
