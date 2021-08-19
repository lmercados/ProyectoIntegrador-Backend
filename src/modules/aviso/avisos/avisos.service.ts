import { Injectable, NotFoundException } from '@nestjs/common';
import { Avisos } from './entities/avisos.entity';
import { AvisosRepository } from './avisos.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, serialize } from 'class-transformer';
import { AvisoTrr } from '../aviso-trr/entities/aviso.trr.entity';
import { AvisoTri } from '../aviso-tri/entities/aviso.tri.entity';
@Injectable()
export class AvisosService {
  constructor(
    @InjectRepository(AvisosRepository)
    private readonly _avisoRepository: AvisosRepository
  ) {}

  async create(tr: Partial<Avisos>): Promise<Avisos> {

    const savedTr: Avisos = await this._avisoRepository.save(tr);
    const result : Avisos= await this._avisoRepository.findOne(+savedTr.avisoId);
    return result;
  }

  async findAll(): Promise<Avisos[]> {
    const tr: Avisos[] = await this._avisoRepository.find();
    if (!tr) {
      throw new NotFoundException('roles does not exist');
    }

     return tr;
  }
   async findByAviso(aviso: string): Promise<Avisos> {
    const readTr: Avisos = await this._avisoRepository.findOne(
      {
        where: { aviso: aviso }
      }
    );

    if (!readTr) {
      throw new NotFoundException('Este Aviso no existe');
    }
    return readTr;
  }  async findByestado(estadoId: string): Promise<Avisos[]> {
    const readTr: Avisos[] = await this._avisoRepository.find(
      {
        where: { estado: estadoId }
      }
    );

    if (!readTr) {
      throw new NotFoundException('Este Aviso no existe');
    }
    return readTr;
  }
  async updateAviso(
    avisoId: number,
    updateAvisos: Avisos,
  ): Promise<Avisos> {
 
    let readAvisos: Avisos = await this._avisoRepository.findOne(
      {
        where: { avisoId: avisoId },
      },
    );

    if (!readAvisos) {
      throw new NotFoundException('Este ID de aviso no existe');
    }
 
    const updatedAvisos = await this._avisoRepository.update(
      avisoId,
      updateAvisos,
    );
    readAvisos = await this._avisoRepository.findOne(
      {
        where: { avisoId: avisoId },
      },
    );
    return readAvisos;
  }
}
