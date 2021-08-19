import { EntityRepository, Repository } from 'typeorm';
import { provinciaMunicipio } from './entities/provincia-municipio.entity';

@EntityRepository(provinciaMunicipio)
export class provinciaMunicipioRepository extends Repository<provinciaMunicipio> {}
