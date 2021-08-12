import { EntityRepository, Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';

@EntityRepository(Proyecto)
export class ProyectoRepository extends Repository<Proyecto> {}
