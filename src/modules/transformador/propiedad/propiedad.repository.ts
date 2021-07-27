import { EntityRepository, Repository } from 'typeorm';
import { Propiedad } from './entities/propiedad.entity';

@EntityRepository(Propiedad)
export class PropiedadRepository extends Repository<Propiedad> {}
