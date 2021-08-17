import { EntityRepository, Repository } from 'typeorm';
import { Recomendacion } from './entities/recomendacion.entity';

@EntityRepository(Recomendacion)
export class RecomendacionRepository extends Repository<Recomendacion> {}
