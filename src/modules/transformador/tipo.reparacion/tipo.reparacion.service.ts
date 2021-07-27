import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tipoReparacion} from '../tipo.reparacion/entities/tipo.reparacion.entity';
import { tipoReparacionRepository } from '../tipo.reparacion/tipo.reparacion.repository';

@Injectable()
export class tipoReparacionService {
  constructor(
    @InjectRepository(tipoReparacionRepository)
    private readonly _tipoReparacionRepository: tipoReparacionRepository,
  ) {}
  async create(createtipoReparacion: Partial<tipoReparacion>): Promise<tipoReparacion> {
    const savedtipoReparacion: tipoReparacion = await this._tipoReparacionRepository.save(
      createtipoReparacion,
    );
    return savedtipoReparacion;
  }

  async findAll(): Promise<tipoReparacion[]> {
    const readtipoReparacion: tipoReparacion[] = await this._tipoReparacionRepository.find();

    if (!readtipoReparacion) {
      throw new NotFoundException('tipoReparacion no existen');
    }
    return readtipoReparacion;
  }

  async findOne(tipoReparacionId: number): Promise<tipoReparacion> {
    const readtipoReparacion: tipoReparacion = await this._tipoReparacionRepository.findOne(
      {
        where: { id_tipoReparacion: tipoReparacionId },
      },
    );

    if (!readtipoReparacion) {
      throw new NotFoundException('Este ID de tipoReparacion no existe');
    }
    return readtipoReparacion;
  }

  async update(
    tipoReparacionId: number,
    updatetipoReparacion: tipoReparacion,
  ): Promise<tipoReparacion> {
    const readtipoReparacion: tipoReparacion = await this._tipoReparacionRepository.findOne(
      {
        where: { id_tipoReparacion: tipoReparacionId },
      },
    );

    if (!readtipoReparacion) {
      throw new NotFoundException('Este ID de tipoReparacion no existe');
    }
    readtipoReparacion.reparacion = updatetipoReparacion.reparacion;
    readtipoReparacion.id_tipo_reparacion = updatetipoReparacion.id_tipo_reparacion;

    const updatedtipoReparacion= await this._tipoReparacionRepository.update(
      tipoReparacionId,
      updatetipoReparacion,
    );
    return readtipoReparacion;
  }

  async remove(tipoReparacionId: number): Promise<void> {
    const readtipoReparacion: tipoReparacion = await this._tipoReparacionRepository.findOne(
      {
        where: { id_tipoReparacion: tipoReparacionId },
      },
    );

    if (!readtipoReparacion) {
      throw new NotFoundException('Este ID de tipoReparacion no existe');
    }

    await this._tipoReparacionRepository.delete(tipoReparacionId);
  }
}
