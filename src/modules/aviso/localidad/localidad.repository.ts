import { EntityRepository, Repository } from 'typeorm';
import { Localidad } from './entities/localidad';

@EntityRepository(Localidad)
export class LocalidadRepository extends Repository<Localidad> {}
