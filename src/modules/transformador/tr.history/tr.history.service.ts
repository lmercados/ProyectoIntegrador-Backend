import { Injectable, NotFoundException } from '@nestjs/common';
import { TransformadorHistory } from './entities/tr.history.entity';
import { TransformadorHistoryRepository } from './tr.history.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TransformadorHistoryService {
  constructor(
    @InjectRepository(TransformadorHistoryRepository)
    private readonly _transformadorRepository: TransformadorHistoryRepository,
  ) {}

  async create(tr: Partial<TransformadorHistory>): Promise<TransformadorHistory> {
    const savedTr: TransformadorHistory = await this._transformadorRepository.save(tr);
    return savedTr;
  }

  async findAll(): Promise<TransformadorHistory[]> {
    const tr: TransformadorHistory[] = await this._transformadorRepository.find();
    if (!tr) {
      throw new NotFoundException('roles does not exist');
    }

    return tr;
  }
}
