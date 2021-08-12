import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Propiedad} from './entities/propiedad.entity';
import { PropiedadRepository } from './propiedad.repository';

@Injectable()
export class PropiedadService {
  constructor(
    @InjectRepository(PropiedadRepository)
    private readonly _propiedadRepository: PropiedadRepository,
  ) {}
  async create(createPropiedad: Partial<Propiedad>): Promise<Propiedad> {
    const savedPropiedad: Propiedad = await this._propiedadRepository.save(
      createPropiedad,
    );
    return savedPropiedad;
  }

  async findAll(): Promise<Propiedad[]> {
    const readPropiedad: Propiedad[] = await this._propiedadRepository.find();

    if (!readPropiedad) {
      throw new NotFoundException('Propiedad no existen');
    }
    return readPropiedad;
  }

  async findOne(propiedadId: number): Promise<Propiedad> {
    const readPropiedad: Propiedad = await this._propiedadRepository.findOne(
      {
        where: { propiedadId: propiedadId },
      },
    );

    if (!readPropiedad) {
      throw new NotFoundException('Este ID de Propiedad no existe');
    }
    return readPropiedad;
  }

  async update(
    propiedadId: number,
    updatePropiedad: Propiedad,
  ): Promise<Propiedad> {
    const readPropiedad: Propiedad = await this._propiedadRepository.findOne(
      {
        where: { propiedadId: propiedadId },
      },
    );

    if (!readPropiedad) {
      throw new NotFoundException('Este ID de Propiedad no existe');
    }
    readPropiedad.propiedad = updatePropiedad.propiedad;
    const updatedPropiedad= await this._propiedadRepository.update(
      propiedadId,
      updatePropiedad,
    );
    return readPropiedad;
  }

  async remove(propiedadId: number): Promise<void> {
    const readPropiedad: Propiedad = await this._propiedadRepository.findOne(
      {
        where: { propiedadId: propiedadId },
      },
    );

    if (!readPropiedad) {
      throw new NotFoundException('Este ID de Propiedad no existe');
    }

    await this._propiedadRepository.delete(propiedadId);
  }
}
