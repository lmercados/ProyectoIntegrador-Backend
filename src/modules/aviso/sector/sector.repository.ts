import { EntityRepository, Repository } from 'typeorm';
import { Sector } from './entities/sector.entity';

@EntityRepository(Sector)
export class SectorRepository extends Repository<Sector> {}
