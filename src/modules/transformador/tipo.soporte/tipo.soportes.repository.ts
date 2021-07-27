import { EntityRepository, Repository } from 'typeorm';
import { TipoSoporte } from './entities/tipo.soportes.entity';

@EntityRepository(TipoSoporte)
export class TipoSoporteRepository extends Repository<TipoSoporte> {}
