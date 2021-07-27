import { EntityRepository, Repository } from 'typeorm';
import { Estados } from '../estados/entities/estado.entity';

@EntityRepository(Estados)
export class EstadoRepository extends Repository<Estados> {}
