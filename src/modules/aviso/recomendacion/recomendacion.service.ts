import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Recomendacion} from './entities/recomendacion.entity';
import {RecomendacionRepository } from './recomendacion.repository';

@Injectable()
export class RecomendacionService {
  constructor(
    @InjectRepository(RecomendacionRepository)
    private readonly _recomendacionRepository: RecomendacionRepository,
  ) {}
  async create(createRecomendacion: Partial<Recomendacion>): Promise<Recomendacion> {
    const savedRecomendacion: Recomendacion = await this._recomendacionRepository.save(
      createRecomendacion,
    );
    return savedRecomendacion;
  }

  async findAll(): Promise<Recomendacion[]> {
    const readRecomendacion: Recomendacion[] = await this._recomendacionRepository.find();

    if (!readRecomendacion) {
      throw new NotFoundException('Recomendacion no existen');
    }
    return readRecomendacion;
  }

  async findOne(recomendacionId: number): Promise<Recomendacion> {
    const readRecomendacion: Recomendacion = await this._recomendacionRepository.findOne(
      {
        where: { recomendacionId: recomendacionId },
      },
    );

    if (!readRecomendacion) {
      throw new NotFoundException('Este ID de Recomendacion no existe');
    }
    return readRecomendacion;
  }

  async update(
    recomendacionId: number,
    updateRecomendacion: Recomendacion,
  ): Promise<Recomendacion> {
    const readRecomendacion: Recomendacion = await this._recomendacionRepository.findOne(
      {
        where: { recomendacionId: recomendacionId },
      },
    );

    if (!readRecomendacion) {
      throw new NotFoundException('Este ID de Recomendacion no existe');
    }
    readRecomendacion.recomendacion = updateRecomendacion.recomendacion;
    const updatedRecomendacion= await this._recomendacionRepository.update(
      recomendacionId,
      updateRecomendacion,
    );
    return readRecomendacion;
  }

  async remove(recomendacionId: number): Promise<void> {
    const readRecomendacion: Recomendacion = await this._recomendacionRepository.findOne(
      {
        where: { recomendacionId: recomendacionId },
      },
    );

    if (!readRecomendacion) {
      throw new NotFoundException('Este ID de Recomendacion no existe');
    }

    await this._recomendacionRepository.delete(recomendacionId);
  }
}
