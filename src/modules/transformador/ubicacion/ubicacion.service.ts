import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubicacion} from './entities/ubicacion.entity';
import { UbicacionRepository } from './ubicacion.repository';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(UbicacionRepository)
    private readonly _ubicacionRepository: UbicacionRepository,
  ) {}
  async create(createUbicacion: Partial<Ubicacion>): Promise<Ubicacion> {
    const savedUbicacion: Ubicacion = await this._ubicacionRepository.save(
      createUbicacion,
    );
    return savedUbicacion;
  }

  async findAll(): Promise<Ubicacion[]> {
    const readUbicacion: Ubicacion[] = await this._ubicacionRepository.find();

    if (!readUbicacion) {
      throw new NotFoundException('Ubicacion no existen');
    }
    return readUbicacion;
  }

  async findOne(ubicacionId: number): Promise<Ubicacion> {
    const readUbicacion: Ubicacion = await this._ubicacionRepository.findOne(
      {
        where: { ubicacionId: ubicacionId },
      },
    );

    if (!readUbicacion) {
      throw new NotFoundException('Este ID de Ubicacion no existe');
    }
    return readUbicacion;
  }

  async update(
    ubicacionId: number,
    updateUbicacion: Ubicacion,
  ): Promise<Ubicacion> {
    const readUbicacion: Ubicacion = await this._ubicacionRepository.findOne(
      {
        where: { ubicacionId: ubicacionId },
      },
    );

    if (!readUbicacion) {
      throw new NotFoundException('Este ID de Ubicacion no existe');
    }
    readUbicacion.ubicacion = updateUbicacion.ubicacion;
    readUbicacion.ubicacionId = updateUbicacion.ubicacionId;

    const updatedUbicacion= await this._ubicacionRepository.update(
      ubicacionId,
      updateUbicacion,
    );
    return readUbicacion;
  }

  async remove(ubicacionId: number): Promise<void> {
    const readUbicacion: Ubicacion = await this._ubicacionRepository.findOne(
      {
        where: { ubicacionId: ubicacionId },
      },
    );

    if (!readUbicacion) {
      throw new NotFoundException('Este ID de Ubicacion no existe');
    }

    await this._ubicacionRepository.delete(ubicacionId);
  }
}
