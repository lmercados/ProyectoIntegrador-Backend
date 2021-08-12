import { Entity, EntityRepository, Repository } from 'typeorm';
import { Transformador } from './entities/tr.entity';

@EntityRepository(Transformador)
export class TransformadorRepository extends Repository<Transformador> {}
