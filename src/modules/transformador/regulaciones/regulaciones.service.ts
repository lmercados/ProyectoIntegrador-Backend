import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regulacion } from './entities/regulaciones.entity';
import { RegulacionRepository } from './regulaciones.repository';

@Injectable()
export class RegulacionService {
  constructor(
    @InjectRepository(RegulacionRepository)
    private readonly __regulacionRepository: RegulacionRepository,
  ) {}
  async create(createRegulacion: Partial<Regulacion>): Promise<Regulacion> {
    const savedRegulacion: Regulacion = await this.__regulacionRepository.save(
      createRegulacion,
    );
    return savedRegulacion;
  }

  async findAll(): Promise<Regulacion[]> {
    const readRegulacion: Regulacion[] = await this.__regulacionRepository.find();

    if (!readRegulacion) {
      throw new NotFoundException('Regulaciones no existen');
    }
    return readRegulacion;
  }

  async findOne(regulacionId: number): Promise<Regulacion> {
    const readRegulacion: Regulacion = await this.__regulacionRepository.findOne(
      {
        where: { id_regulacion: regulacionId },
      },
    );

    if (!readRegulacion) {
      throw new NotFoundException('Este ID  de regulacion no existe');
    }
    return readRegulacion;
  }

  async update(
    regulacionId: number,
    updateRegulacion: Regulacion,
  ): Promise<Regulacion> {
    const readRegulacion: Regulacion = await this.__regulacionRepository.findOne(
      {
        where: { id_regulacion: regulacionId },
      },
    );

    if (!readRegulacion) {
      throw new NotFoundException('No existe suplidor con este ID');
    }
    readRegulacion.regulacion = updateRegulacion.regulacion;
    readRegulacion.id_regulacion = regulacionId;
    const updatedRegulacion = await this.__regulacionRepository.update(
      regulacionId,
      readRegulacion,
    );
    return readRegulacion;
  }

  async remove(regulacionId: number): Promise<void> {
    const readRegulacion: Regulacion = await this.__regulacionRepository.findOne(
      {
        where: { id_regulacion: regulacionId },
      },
    );

    if (!readRegulacion) {
      throw new NotFoundException('No existe regulacion con este ID');
    }

    await this.__regulacionRepository.delete(regulacionId);
  }
}
