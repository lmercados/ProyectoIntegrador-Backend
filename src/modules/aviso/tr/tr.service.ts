import { Injectable, NotFoundException } from '@nestjs/common';
import { Transformador } from './entities/tr.entity';
import { TransformadorRepository } from './tr.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, serialize } from 'class-transformer';
@Injectable()
export class TransformadorService {
  constructor(
    @InjectRepository(TransformadorRepository)
    private readonly _transformadorRepository: TransformadorRepository,
  ) {}

  async create(tr: Partial<Transformador>): Promise<Transformador> {
    const savedTr: Transformador = await this._transformadorRepository.save(tr);
    const result : Transformador= await this._transformadorRepository.findOne(+savedTr.transformadorId);
    return result;
  }

  async findAll(): Promise<Transformador[]> {
    const tr: Transformador[] = await this._transformadorRepository.find();
    if (!tr) {
      throw new NotFoundException('roles does not exist');
    }

     return tr;
  }
   async findBySerie(serie: string): Promise<Transformador> {
    const readTr: Transformador = await this._transformadorRepository.findOne(
      {
        where: { serie: serie }
      }
    );

    if (!readTr) {
      throw new NotFoundException('Este TR no existe');
    }
    return readTr;
  }
  async updateEstadoUbicacion(
    transformadorId: number,
    updateTransformador: Transformador,
  ): Promise<Transformador> {
    let readTransformador: Transformador = await this._transformadorRepository.findOne(
      {
        where: { transformadorId: transformadorId },
      },
    );

    if (!readTransformador) {
      throw new NotFoundException('Este ID de tipoReparacion no existe');
    }
    readTransformador.ubicacion = updateTransformador.ubicacion;
    readTransformador.propiedad = updateTransformador.propiedad;
    readTransformador.usuario = updateTransformador.usuario;
    readTransformador.efecto = updateTransformador.efecto;
    const updatedTransformador = await this._transformadorRepository.update(
      transformadorId,
      updateTransformador,
    );
    readTransformador = await this._transformadorRepository.findOne(
      {
        where: { transformadorId: transformadorId },
      },
    );
    return readTransformador;
  }
}
