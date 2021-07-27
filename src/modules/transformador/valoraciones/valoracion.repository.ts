import { EntityRepository, Repository } from 'typeorm';
import { Valoracion } from './entities/valoracion.entity';

@EntityRepository(Valoracion)
export class ValoracionRepository extends Repository<Valoracion> {}
