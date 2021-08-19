import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {AvisoTri} from './entities/aviso.tri.entity';
import {AvisoTriRepository } from './aviso.tri.repository';

@Injectable()
export class AvisoTriService {
  constructor(
    @InjectRepository(AvisoTriRepository)
    private readonly _avisotriRepository: AvisoTriRepository,
  ) {}
  async create(createAvisoTri: Partial<AvisoTri>): Promise<AvisoTri> {
    const savedAvisoTri: AvisoTri = await this._avisotriRepository.save(
      createAvisoTri,
    );
    return savedAvisoTri;
  }

  async findAll(): Promise<AvisoTri[]> {
    const readAvisoTri: AvisoTri[] = await this._avisotriRepository.find();

    if (!readAvisoTri) {
      throw new NotFoundException('AvisoTri no existen');
    }
    return readAvisoTri;
  }

  async findOne(avisotriId: number): Promise<AvisoTri> {
    const readAvisoTri: AvisoTri = await this._avisotriRepository.findOne(
      {
        where: { avisotriId: avisotriId },
      },
    );

    if (!readAvisoTri) {
      throw new NotFoundException('Este ID de AvisoTri no existe');
    }
    return readAvisoTri;
  }

  async update(
    avisotriId: number,
    updateAvisoTri: AvisoTri,
  ): Promise<AvisoTri> {
    const readAvisoTri: AvisoTri = await this._avisotriRepository.findOne(
      {
        where: { avisotriId: avisotriId },
      },
    );

    if (!readAvisoTri) {
      throw new NotFoundException('Este ID de AvisoTri no existe');
    }
    readAvisoTri.tr = updateAvisoTri.tr;
    const updatedAvisoTri= await this._avisotriRepository.update(
      avisotriId,
      updateAvisoTri,
    );
    return readAvisoTri;
  }

  async remove(avisotriId: number): Promise<void> {
    const readAvisoTri: AvisoTri = await this._avisotriRepository.findOne(
      {
        where: { avisotriId: avisotriId },
      },
    );

    if (!readAvisoTri) {
      throw new NotFoundException('Este ID de AvisoTri no existe');
    }

    await this._avisotriRepository.delete(avisotriId);
  }
}
