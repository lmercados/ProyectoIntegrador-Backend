import { EntityRepository, Repository } from 'typeorm';
import { Apoyo } from './entities/apoyo.entity';

@EntityRepository(Apoyo)
export class ApoyoRepository extends Repository<Apoyo> {}
