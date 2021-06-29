import { EntityRepository, Repository } from 'typeorm';
import { Fabricante } from './entities/fabricante.entity';

@EntityRepository(Fabricante)
export class FabricanteRepository extends Repository<Fabricante> {}
