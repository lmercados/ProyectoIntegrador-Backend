import { Entity, EntityRepository, Repository } from 'typeorm';
import { TransformadorHistory } from './entities/tr.history.entity';

@EntityRepository(TransformadorHistory)
export class TransformadorHistoryRepository extends Repository<TransformadorHistory> {}
