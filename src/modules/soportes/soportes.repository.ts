import { EntityRepository, Repository } from 'typeorm';
import { Soporte } from './entities/soportes.entity';

@EntityRepository(Soporte)
export class SoporteRepository extends Repository<Soporte> {}
