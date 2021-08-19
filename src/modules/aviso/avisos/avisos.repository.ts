import { Entity, EntityRepository, Repository } from 'typeorm';
import { Avisos } from './entities/avisos.entity';

@EntityRepository(Avisos)
export class AvisosRepository extends Repository<Avisos> {}
