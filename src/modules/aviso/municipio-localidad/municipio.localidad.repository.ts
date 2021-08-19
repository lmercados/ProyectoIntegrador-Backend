import { EntityRepository, Repository } from 'typeorm';
import { municipioLocalidad } from './entities/municipio.localidad.entity';

@EntityRepository(municipioLocalidad)
export class municipioLocalidadRepository extends Repository<municipioLocalidad> {}
