import { EntityRepository, Repository } from 'typeorm';
import { Provincia } from './entities/provincia';

@EntityRepository(Provincia)
export class ProvinciaRepository extends Repository<Provincia> {}
