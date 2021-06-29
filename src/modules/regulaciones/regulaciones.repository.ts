import { EntityRepository, Repository } from 'typeorm';
import { Regulacion } from './entities/regulaciones.entity';

@EntityRepository(Regulacion)
export class RegulacionRepository extends Repository<Regulacion> {}
