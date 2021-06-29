import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Valoracion } from './entities/valoracion.entity';
import { ValoracionRepository } from './valoracion.repository';

@Injectable()
export class ValoracionService {
  constructor(
    @InjectRepository(ValoracionRepository)
    private readonly __valoracionRepository: ValoracionRepository,
  ) {}
  async create(createValoracion: Partial<Valoracion>): Promise<Valoracion> {
    const savedValoracion: Valoracion = await this.__valoracionRepository.save(
      createValoracion,
    );
    return savedValoracion;
  }

  async findAll(): Promise<Valoracion[]> {
    const readValoracion: Valoracion[] = await this.__valoracionRepository.find();

    if (!readValoracion) {
      throw new NotFoundException('Valoraciones no existen');
    }
    return readValoracion;
  }

  async findOne(valoracionId: number): Promise<Valoracion> {
    const readValoracion: Valoracion = await this.__valoracionRepository.findOne(
      {
        where: { id_valoracion: valoracionId },
      },
    );

    if (!readValoracion) {
      throw new NotFoundException('Este ID de valoracion no existe');
    }
    return readValoracion;
  }

  async update(
    valoracionId: number,
    updateValoracion: Valoracion,
  ): Promise<Valoracion> {
    const readValoracion: Valoracion = await this.__valoracionRepository.findOne(
      {
        where: { id_valoracion: valoracionId },
      },
    );

    if (!readValoracion) {
      throw new NotFoundException('Este ID de valoracion no existe');
    }
    readValoracion.valoracion = updateValoracion.valoracion;
    readValoracion.id_valoracion = updateValoracion.id_valoracion;

    const updatedCapacidad = await this.__valoracionRepository.update(
      valoracionId,
      updateValoracion,
    );
    return readValoracion;
  }

  async remove(valoracionId: number): Promise<void> {
    const readValoracion: Valoracion = await this.__valoracionRepository.findOne(
      {
        where: { id_valoracion: valoracionId },
      },
    );

    if (!readValoracion) {
      throw new NotFoundException('Este ID de valoracion no existe');
    }

    await this.__valoracionRepository.delete(valoracionId);
  }
}
