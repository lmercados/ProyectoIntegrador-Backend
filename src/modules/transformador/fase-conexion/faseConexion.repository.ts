import { EntityRepository, Repository } from 'typeorm';
import { faseConexion} from './entities/faseConexion.entity';

@EntityRepository(faseConexion)
export class faseConexionRepository extends Repository<faseConexion> {}
