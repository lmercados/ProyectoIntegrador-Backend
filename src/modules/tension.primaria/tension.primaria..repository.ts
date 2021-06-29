import { EntityRepository, Repository } from 'typeorm';
import { TensionPrimaria } from './entities/tension.primaria.entity';

@EntityRepository(TensionPrimaria)
export class TensionPrimariaRepository extends Repository<TensionPrimaria> {}
