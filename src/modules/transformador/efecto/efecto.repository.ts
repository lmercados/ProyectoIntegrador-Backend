import { EntityRepository, Repository } from 'typeorm';
import { Efecto } from './entities/efecto.entity';

@EntityRepository(Efecto)
export class EfectoRepository extends Repository<Efecto> {}
