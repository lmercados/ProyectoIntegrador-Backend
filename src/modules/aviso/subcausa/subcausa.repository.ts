import { EntityRepository, Repository } from 'typeorm';
import { SubCausas } from './entities/subcausa.entity';

@EntityRepository(SubCausas)
export class SubCausasRepository extends Repository<SubCausas> {}
