import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conexion } from './entities/conexiones.entity';
import { ConexionRepository } from './conexiones.repository';

@Injectable()
export class ConexionService {
  constructor(
    @InjectRepository(ConexionRepository)
    private readonly __conexionRepository: ConexionRepository,
  ) {}
  async create(createConexion: Partial<Conexion>): Promise<Conexion> {
    const savedConexion: Conexion = await this.__conexionRepository.save(
      createConexion,
    );
    return savedConexion;
  }

  async findAll(): Promise<Conexion[]> {
    const readConexion: Conexion[] = await this.__conexionRepository.find();

    if (!readConexion) {
      throw new NotFoundException('Conexiones no existen');
    }
    return readConexion;
  }

  async findFaseConexion(faseId: number): Promise<Conexion[]> {
    const readConexion: Conexion[] = await this.__conexionRepository.find({
      where: { faseId: faseId },
    });

    if (!readConexion) {
      throw new NotFoundException('Este ID de fase no existe');
    }
    return readConexion;
  }
  async findOne(conexionId: number): Promise<Conexion> {
    const readConexion: Conexion = await this.__conexionRepository.findOne({
      where: { conexionId: conexionId },
    });

    if (!readConexion) {
      throw new NotFoundException('Conexiones no existe');
    }
    return readConexion;
  }

  async update(
    conexionId: number,
    updateConexion: Conexion,
  ): Promise<Conexion> {
    const readConexion: Conexion = await this.__conexionRepository.findOne({
      where: { conexionId: conexionId },
    });

    if (!readConexion) {
      throw new NotFoundException('Este ID no existe para esta conexion');
    }
    readConexion.conexionId = conexionId;
    readConexion.conexion = updateConexion.conexion;
    const updatedConexion = await this.__conexionRepository.update(
      conexionId,
      readConexion,
    );
    return readConexion;
  }

  async remove(conexionId: number): Promise<void> {
    const readConexion: Conexion = await this.__conexionRepository.findOne({
      where: { conexionId: conexionId },
    });

    if (!readConexion) {
      throw new NotFoundException('Este ID de conexion no existe');
    }

    await this.__conexionRepository.delete(conexionId);
  }
}
