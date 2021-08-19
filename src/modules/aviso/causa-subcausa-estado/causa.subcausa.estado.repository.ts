import { EntityRepository, Repository } from 'typeorm';
import { causaSubCausaEstado } from './entities/causa.subcausa.estado.entity';

@EntityRepository(causaSubCausaEstado)
export class causaSubCausaEstadoRepository extends Repository<causaSubCausaEstado> {}
