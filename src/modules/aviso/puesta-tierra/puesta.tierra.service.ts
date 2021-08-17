import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {puestaTierra} from './entities/puesta.tierra.entity';
import {puestaTierraRepository } from './puesta.tierra.repository';

@Injectable()
export class puestaTierraService {
  constructor(
    @InjectRepository(puestaTierraRepository)
    private readonly _puestaTierraRepository: puestaTierraRepository,
  ) {}
  async create(createpuestaTierra: Partial<puestaTierra>): Promise<puestaTierra> {
    const savedpuestaTierra: puestaTierra = await this._puestaTierraRepository.save(
      createpuestaTierra,
    );
    return savedpuestaTierra;
  }

  async findAll(): Promise<puestaTierra[]> {
    const readpuestaTierra: puestaTierra[] = await this._puestaTierraRepository.find();

    if (!readpuestaTierra) {
      throw new NotFoundException('puestaTierra no existen');
    }
    return readpuestaTierra;
  }

  async findOne(puestaTierraId: number): Promise<puestaTierra> {
    const readpuestaTierra: puestaTierra = await this._puestaTierraRepository.findOne(
      {
        where: { puestaTierraId: puestaTierraId },
      },
    );

    if (!readpuestaTierra) {
      throw new NotFoundException('Este ID de puestaTierra no existe');
    }
    return readpuestaTierra;
  }

  async update(
    puestaTierraId: number,
    updatepuestaTierra: puestaTierra,
  ): Promise<puestaTierra> {
    const readpuestaTierra: puestaTierra = await this._puestaTierraRepository.findOne(
      {
        where: { puestaTierraId: puestaTierraId },
      },
    );

    if (!readpuestaTierra) {
      throw new NotFoundException('Este ID de puestaTierra no existe');
    }
    readpuestaTierra.puestaTierra = updatepuestaTierra.puestaTierra;
    const updatedpuestaTierra= await this._puestaTierraRepository.update(
      puestaTierraId,
      updatepuestaTierra,
    );
    return readpuestaTierra;
  }

  async remove(puestaTierraId: number): Promise<void> {
    const readpuestaTierra: puestaTierra = await this._puestaTierraRepository.findOne(
      {
        where: { puestaTierraId: puestaTierraId },
      },
    );

    if (!readpuestaTierra) {
      throw new NotFoundException('Este ID de puestaTierra no existe');
    }

    await this._puestaTierraRepository.delete(puestaTierraId);
  }
}
