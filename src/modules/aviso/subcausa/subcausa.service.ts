import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {SubCausas} from './entities/subcausa.entity';
import {SubCausasRepository } from './subCausa.repository';

@Injectable()
export class SubCausaService {
  constructor(
    @InjectRepository(SubCausasRepository)
    private readonly _subCausaRepository: SubCausasRepository,
  ) {}
  async create(createSubCausas: Partial<SubCausas>): Promise<SubCausas> {
    const savedSubCausas: SubCausas = await this._subCausaRepository.save(
      createSubCausas,
    );
    return savedSubCausas;
  }

  async findAll(): Promise<SubCausas[]> {
    const readSubCausas: SubCausas[] = await this._subCausaRepository.find();

    if (!readSubCausas) {
      throw new NotFoundException('SubCausas no existen');
    }
    return readSubCausas;
  }

  async findOne(subcausaId: number): Promise<SubCausas> {
    const readSubCausas: SubCausas = await this._subCausaRepository.findOne(
      {
        where: { subcausaId: subcausaId },
      },
    );

    if (!readSubCausas) {
      throw new NotFoundException('Este ID de SubCausas no existe');
    }
    return readSubCausas;
  }

  async update(
    subcausaId: number,
    updateSubCausas: SubCausas,
  ): Promise<SubCausas> {
    const readSubCausas: SubCausas = await this._subCausaRepository.findOne(
      {
        where: { subcausaId: subcausaId },
      },
    );

    if (!readSubCausas) {
      throw new NotFoundException('Este ID de SubCausas no existe');
    }
    readSubCausas.subcausa = updateSubCausas.subcausa;
    const updatedSubCausas= await this._subCausaRepository.update(
      subcausaId,
      updateSubCausas,
    );
    return readSubCausas;
  }

  async remove(subcausaId: number): Promise<void> {
    const readSubCausas: SubCausas = await this._subCausaRepository.findOne(
      {
        where: { subcausaId: subcausaId },
      },
    );

    if (!readSubCausas) {
      throw new NotFoundException('Este ID de SubCausas no existe');
    }

    await this._subCausaRepository.delete(subcausaId);
  }
}
