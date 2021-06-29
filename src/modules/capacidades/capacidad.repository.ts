import { EntityRepository, Repository } from 'typeorm';
import { Capacidad } from './entities/capacidad.entity';

@EntityRepository(Capacidad)
export class CapacidadRepository extends Repository<Capacidad> {}
