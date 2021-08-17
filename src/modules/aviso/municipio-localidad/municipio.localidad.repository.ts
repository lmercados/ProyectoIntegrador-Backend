import { EntityRepository, Repository } from 'typeorm';
import { municipioLocalidad } from './entities/municipio.localidad';

@EntityRepository(municipioLocalidad)
export class municipioLocalidadRepository extends Repository<municipioLocalidad> {}
