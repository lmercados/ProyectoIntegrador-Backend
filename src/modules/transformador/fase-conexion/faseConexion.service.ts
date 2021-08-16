import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { faseConexion} from './entities/faseConexion.entity';
import { faseConexionRepository } from './faseConexion.repository';

@Injectable()
export class faseConexionService {
  constructor(
    @InjectRepository(faseConexionRepository)
    private readonly __faseConexionRepository: faseConexionRepository,
  ) {}
  async create(createfaseConexion: Partial<faseConexion>): Promise<faseConexion> {
    const savedfaseConexion: faseConexion = await this.__faseConexionRepository.save(
      createfaseConexion,
    );
    return savedfaseConexion;
  }

  async findAll(): Promise<faseConexion[]> {
    const readfaseConexion: faseConexion[] = await this.__faseConexionRepository.find();

    if (!readfaseConexion) {
      throw new NotFoundException('faseConexion does not exist');
    }
    return readfaseConexion;
  }

  async findfaseConexion(faseId: number): Promise<faseConexion[]> {
    const readfaseConexion: faseConexion[] = await this.__faseConexionRepository.find({
      where: { faseId: faseId },
    });

    if (!readfaseConexion) {
      throw new NotFoundException('fase id does not exist');
    }
    return readfaseConexion;
  }
  async findOne(faseConexionId: number): Promise<faseConexion> {
    const readfaseConexion: faseConexion = await this.__faseConexionRepository.findOne({
      where: { faseConexionId: faseConexionId },
    });

    if (!readfaseConexion) {
      throw new NotFoundException('conexion does not exist');
    }
    return readfaseConexion;
  }

  async update(
    faseConexionId: number,
    updatefaseConexion: faseConexion,
  ): Promise<faseConexion> {
    const readfaseConexion: faseConexion = await this.__faseConexionRepository.findOne({
      where: { faseConexionId: faseConexionId },
    });

    if (!readfaseConexion) {
      throw new NotFoundException('conexion does not exist');
    }

    readfaseConexion.conexionId = updatefaseConexion.conexionId;
    readfaseConexion.faseId = updatefaseConexion.faseId;
    const updatedfaseConexion = await this.__faseConexionRepository.update(
      faseConexionId,
      readfaseConexion,
    );
    return readfaseConexion;
  }

  async remove(faseConexionId: number): Promise<void> {
    const readfaseConexion: faseConexion = await this.__faseConexionRepository.findOne({
      where: { faseConexionId: faseConexionId },
    });

    if (!readfaseConexion) {
      throw new NotFoundException('conexion does not exist');
    }

    await this.__faseConexionRepository.delete(faseConexionId);
  }
}
