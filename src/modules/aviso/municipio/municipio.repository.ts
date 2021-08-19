import { EntityRepository, Repository } from 'typeorm';
import { Municipio } from './entities/municipio.entity';

@EntityRepository(Municipio)
export class MunicipioRepository extends Repository<Municipio> {}
