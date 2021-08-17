import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Apartarrayos} from './entities/apartarrayos.entity';
import {ApartarrayosRepository } from './apartarrayos.repository';

@Injectable()
export class ApartarrayosService {
  constructor(
    @InjectRepository(ApartarrayosRepository)
    private readonly _apartarrayosRepository: ApartarrayosRepository,
  ) {}
  async create(createApartarrayos: Partial<Apartarrayos>): Promise<Apartarrayos> {
    const savedApartarrayos: Apartarrayos = await this._apartarrayosRepository.save(
      createApartarrayos,
    );
    return savedApartarrayos;
  }

  async findAll(): Promise<Apartarrayos[]> {
    const readApartarrayos: Apartarrayos[] = await this._apartarrayosRepository.find();

    if (!readApartarrayos) {
      throw new NotFoundException('Apartarrayos no existen');
    }
    return readApartarrayos;
  }

  async findOne(apartarrayosId: number): Promise<Apartarrayos> {
    const readApartarrayos: Apartarrayos = await this._apartarrayosRepository.findOne(
      {
        where: { apartarrayosId: apartarrayosId },
      },
    );

    if (!readApartarrayos) {
      throw new NotFoundException('Este ID de Apartarrayos no existe');
    }
    return readApartarrayos;
  }

  async update(
    apartarrayosId: number,
    updateApartarrayos: Apartarrayos,
  ): Promise<Apartarrayos> {
    const readApartarrayos: Apartarrayos = await this._apartarrayosRepository.findOne(
      {
        where: { apartarrayosId: apartarrayosId },
      },
    );

    if (!readApartarrayos) {
      throw new NotFoundException('Este ID de Apartarrayos no existe');
    }
    readApartarrayos.apartarrayos = updateApartarrayos.apartarrayos;
    const updatedApartarrayos= await this._apartarrayosRepository.update(
      apartarrayosId,
      updateApartarrayos,
    );
    return readApartarrayos;
  }

  async remove(apartarrayosId: number): Promise<void> {
    const readApartarrayos: Apartarrayos = await this._apartarrayosRepository.findOne(
      {
        where: { apartarrayosId: apartarrayosId },
      },
    );

    if (!readApartarrayos) {
      throw new NotFoundException('Este ID de Apartarrayos no existe');
    }

    await this._apartarrayosRepository.delete(apartarrayosId);
  }
}
