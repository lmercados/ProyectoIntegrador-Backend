import { EntityRepository, Repository } from 'typeorm';
import { tipoReparacion } from '../tipo.reparacion/entities/tipo.reparacion.entity';

@EntityRepository(tipoReparacion)
export class tipoReparacionRepository extends Repository<tipoReparacion> {}
