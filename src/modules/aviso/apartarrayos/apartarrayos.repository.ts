import { EntityRepository, Repository } from 'typeorm';
import { Apartarrayos } from './entities/apartarrayos.entity';

@EntityRepository(Apartarrayos)
export class ApartarrayosRepository extends Repository<Apartarrayos> {}
