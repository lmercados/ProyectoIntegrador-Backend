import { EntityRepository, Repository } from 'typeorm';
import { RazonesRechazo } from './entities/razones.rechazo.entity';

@EntityRepository(RazonesRechazo)
export class RazonesRechazoRepository extends Repository<RazonesRechazo> {}
