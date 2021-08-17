import { EntityRepository, Repository } from 'typeorm';
import { Vivienda } from './entities/vivienda.entity';

@EntityRepository(Vivienda)
export class ViviendaRepository extends Repository<Vivienda> {}
