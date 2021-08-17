import { EntityRepository, Repository } from 'typeorm';
import { Circuito } from './entities/circuito.entity';

@EntityRepository(Circuito)
export class CircuitoRepository extends Repository<Circuito> {}
