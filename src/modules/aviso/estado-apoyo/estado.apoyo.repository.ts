import { EntityRepository, Repository } from 'typeorm';
import { estadoApoyo } from './entities/estado.apoyo.entity';

@EntityRepository(estadoApoyo)
export class estadoApoyoRepository extends Repository<estadoApoyo> {}
