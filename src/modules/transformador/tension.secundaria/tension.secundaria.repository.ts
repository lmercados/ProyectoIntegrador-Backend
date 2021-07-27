import { EntityRepository, Repository } from 'typeorm';
import { TensionSecundaria } from './entities/tension.secundaria.entity';

@EntityRepository(TensionSecundaria)
export class TensionSecundariaRepository extends Repository<TensionSecundaria> {}
