import { EntityRepository, Repository } from 'typeorm';
import { AvisoTrr } from './entities/aviso.trr.entity';

@EntityRepository(AvisoTrr)
export class AvisoTrrRepository extends Repository<AvisoTrr> {}
