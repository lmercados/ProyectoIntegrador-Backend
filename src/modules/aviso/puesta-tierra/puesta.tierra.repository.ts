import { EntityRepository, Repository } from 'typeorm';
import { puestaTierra } from './entities/puesta.tierra.entity';

@EntityRepository(puestaTierra)
export class puestaTierraRepository extends Repository<puestaTierra> {}
