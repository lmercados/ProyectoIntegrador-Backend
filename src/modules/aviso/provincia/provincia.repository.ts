import { EntityRepository, Repository } from 'typeorm';
import { Provincia } from './entities/provincia.entity';

@EntityRepository(Provincia)
export class ProvinciaRepository extends Repository<Provincia> {}
