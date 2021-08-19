import { EntityRepository, Repository } from 'typeorm';
import { AvisoTri } from './entities/aviso.tri.entity';

@EntityRepository(AvisoTri)
export class AvisoTriRepository extends Repository<AvisoTri> {}
