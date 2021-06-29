import { EntityRepository, Repository } from 'typeorm';
import { Conexion } from './entities/conexiones.entity';

@EntityRepository(Conexion)
export class ConexionRepository extends Repository<Conexion> {}
