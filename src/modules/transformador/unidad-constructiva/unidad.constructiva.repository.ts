import { EntityRepository, Repository } from 'typeorm';
import { UnidadConstructiva } from './entities/unidad.constructiva.entity';

@EntityRepository(UnidadConstructiva)
export class UnidadConstructivaRepository extends Repository<UnidadConstructiva> {}
