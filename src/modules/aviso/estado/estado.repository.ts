import { EntityRepository, Repository } from 'typeorm';
import { Estados } from './entities/estado.entity';

@EntityRepository(Estados)
export class EstadosRepository extends Repository<Estados> {}
