import { EntityRepository, Repository } from 'typeorm';
import { Causas } from './entities/causa.entity';

@EntityRepository(Causas)
export class CausasRepository extends Repository<Causas> {}
