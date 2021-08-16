import { EntityRepository, Repository } from 'typeorm';
import {soporteTipoSoporte } from './entities/soporteTipoSoporte.entity';

@EntityRepository(soporteTipoSoporte)
export class soporteTipoSoporteRepository extends Repository<soporteTipoSoporte> {}
