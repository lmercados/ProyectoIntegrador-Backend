import { EntityRepository, Repository } from 'typeorm';
import {resultadoEstado } from './entities/resultado.estado.entity';

@EntityRepository(resultadoEstado)
export class resultadoEstadoRepository extends Repository<resultadoEstado> {}
