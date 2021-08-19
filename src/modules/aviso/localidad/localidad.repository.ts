import { EntityRepository, Repository } from 'typeorm';
import { Localidad } from './entities/localidad.entity';

@EntityRepository(Localidad)
export class LocalidadRepository extends Repository<Localidad> {}
