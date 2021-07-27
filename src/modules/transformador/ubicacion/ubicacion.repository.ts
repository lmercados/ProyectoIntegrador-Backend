import { EntityRepository, Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';

@EntityRepository(Ubicacion)
export class UbicacionRepository extends Repository<Ubicacion> {}
