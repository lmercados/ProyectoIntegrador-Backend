import { EntityRepository, Repository } from 'typeorm';
import { Seccionador } from './entities/seccionador.entity';

@EntityRepository(Seccionador)
export class SeccionadorRepository extends Repository<Seccionador> {}
