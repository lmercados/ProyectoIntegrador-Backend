import { EntityRepository, Repository } from 'typeorm';
import { Resultado } from './entities/resultado.evaluacion.entity';

@EntityRepository(Resultado)
export class ResultadoRepository extends Repository<Resultado> {}
