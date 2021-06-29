import { EntityRepository, Repository } from 'typeorm';
import { Suplidor } from './entities/suplidor.entity';

@EntityRepository(Suplidor)
export class SuplidorRepository extends Repository<Suplidor> {}
