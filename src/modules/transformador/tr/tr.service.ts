import { Injectable, NotFoundException } from '@nestjs/common';
import { Transformador } from './entities/tr.entity';
import { TransformadorRepository } from './tr.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TransformadorService {
  constructor(
    @InjectRepository(TransformadorRepository)
    private readonly _transformadorRepository: TransformadorRepository,
  ) {}

  async create(tr: Partial<Transformador>): Promise<Transformador> {
    const savedTr: Transformador = await this._transformadorRepository.save(tr);
    return savedTr;
  }

  async findAll(): Promise<Transformador[]> {
    const tr: Transformador[] = await this._transformadorRepository.find();
    if (!tr) {
      throw new NotFoundException('roles does not exist');
    }

    return tr;
  }
}
