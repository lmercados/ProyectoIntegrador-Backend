import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {AvisoTrr} from './entities/aviso.trr.entity';
import {AvisoTrrRepository } from './aviso.trr.repository';

@Injectable()
export class AvisoTrrService {
  constructor(
    @InjectRepository(AvisoTrrRepository)
    private readonly _avisotrrRepository: AvisoTrrRepository,
  ) {}
  async create(createAvisoTrr: Partial<AvisoTrr>): Promise<AvisoTrr> {
    const savedAvisoTrr: AvisoTrr = await this._avisotrrRepository.save(
      createAvisoTrr,
    );
    return savedAvisoTrr;
  }

  async findAll(): Promise<AvisoTrr[]> {
    const readAvisoTrr: AvisoTrr[] = await this._avisotrrRepository.find();

    if (!readAvisoTrr) {
      throw new NotFoundException('AvisoTrr no existen');
    }
    return readAvisoTrr;
  }

  async findOne(avisotrrId: number): Promise<AvisoTrr> {
    const readAvisoTrr: AvisoTrr = await this._avisotrrRepository.findOne(
      {
        where: { avisotrrId: avisotrrId },
      },
    );

    if (!readAvisoTrr) {
      throw new NotFoundException('Este ID de AvisoTrr no existe');
    }
    return readAvisoTrr;
  }

  async update(
    avisotrrId: number,
    updateAvisoTrr: AvisoTrr,
  ): Promise<AvisoTrr> {
    const readAvisoTrr: AvisoTrr = await this._avisotrrRepository.findOne(
      {
        where: { avisotrrId: avisotrrId },
      },
    );

    if (!readAvisoTrr) {
      throw new NotFoundException('Este ID de AvisoTrr no existe');
    }
    readAvisoTrr.tr = updateAvisoTrr.tr;
    const updatedAvisoTrr= await this._avisotrrRepository.update(
      avisotrrId,
      updateAvisoTrr,
    );
    return readAvisoTrr;
  }

  async remove(avisotrrId: number): Promise<void> {
    const readAvisoTrr: AvisoTrr = await this._avisotrrRepository.findOne(
      {
        where: { avisotrrId: avisotrrId },
      },
    );

    if (!readAvisoTrr) {
      throw new NotFoundException('Este ID de AvisoTrr no existe');
    }

    await this._avisotrrRepository.delete(avisotrrId);
  }
}
