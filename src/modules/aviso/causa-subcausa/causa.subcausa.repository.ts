import { EntityRepository, Repository } from 'typeorm';
import { causaSubCausa } from './entities/causa.subcausa.entity';

@EntityRepository(causaSubCausa)
export class causaSubCausaRepository extends Repository<causaSubCausa> {}
