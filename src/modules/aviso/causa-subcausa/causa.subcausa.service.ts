import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {causaSubCausa} from './entities/causa.subcausa.entity';
import {causaSubCausaRepository } from './causa.subcausa.repository';

@Injectable()
export class causaSubCausaService {
  constructor(
    @InjectRepository(causaSubCausaRepository)
    private readonly _causaRepository: causaSubCausaRepository,
  ) {}
  async create(createcausaSubCausa: Partial<causaSubCausa>): Promise<causaSubCausa> {
    const savedcausaSubCausa: causaSubCausa = await this._causaRepository.save(
      createcausaSubCausa,
    );
    return savedcausaSubCausa;
  }

  async findAll(): Promise<causaSubCausa[]> {
    const readcausaSubCausa: causaSubCausa[] = await this._causaRepository.find();

    if (!readcausaSubCausa) {
      throw new NotFoundException('causaSubCausa no existen');
    }
    return readcausaSubCausa;
  }

  async find(causaId: number): Promise<causaSubCausa[]> {
    const readcausaSubCausa: causaSubCausa[] = await this._causaRepository.find(
      {
        where: { causa: causaId },
      },
    );

    if (!readcausaSubCausa) {
      throw new NotFoundException('Este ID de causaSubCausa no existe');
    }
    return readcausaSubCausa;
  }

  async update(
    causaSubcausaId: number,
    updatecausaSubCausa: causaSubCausa,
  ): Promise<causaSubCausa> {
    const readcausaSubCausa: causaSubCausa = await this._causaRepository.findOne(
      {
        where: { causaSubcausaId: causaSubcausaId },
      },
    );

    if (!readcausaSubCausa) {
      throw new NotFoundException('Este ID de causaSubCausa no existe');
    }
    readcausaSubCausa.causa = updatecausaSubCausa.causa;
    readcausaSubCausa.subcausa = updatecausaSubCausa.subcausa;
    const updatedcausaSubCausa= await this._causaRepository.update(
      causaSubcausaId,
      updatecausaSubCausa,
    );
    return readcausaSubCausa;
  }

  async remove(causaId: number): Promise<void> {
    const readcausaSubCausa: causaSubCausa = await this._causaRepository.findOne(
      {
        where: { causaId: causaId },
      },
    );

    if (!readcausaSubCausa) {
      throw new NotFoundException('Este ID de causaSubCausa no existe');
    }

    await this._causaRepository.delete(causaId);
  }
}
