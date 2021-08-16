import { EntityRepository, Repository } from 'typeorm';
import { faseCapacidad } from './entities/faseCapacidad.entity';

@EntityRepository(faseCapacidad)
export class faseCapacidadRepository extends Repository<faseCapacidad> {}
