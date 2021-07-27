import { EntityRepository, Repository } from 'typeorm';
import { Fase } from './entities/fase.entity';

@EntityRepository(Fase)
export class FaseRepository extends Repository<Fase> {}
