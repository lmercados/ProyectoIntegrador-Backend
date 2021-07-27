import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estados} from '../estados/entities/estado.entity';
import { EstadoRepository } from '../estados/estado.repository';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(EstadoRepository)
    private readonly _estadoRepository: EstadoRepository,
  ) {}
  async create(createEstado: Partial<Estados>): Promise<Estados> {
    const savedEstado: Estados = await this._estadoRepository.save(
      createEstado,
    );
    return savedEstado;
  }

  async findAll(): Promise<Estados[]> {
    const readEstado: Estados[] = await this._estadoRepository.find();

    if (!readEstado) {
      throw new NotFoundException('Estado no existen');
    }
    return readEstado;
  }

  async findOne(EstadoId: number): Promise<Estados> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { id_estado: EstadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }
    return readEstado;
  }

  async update(
    EstadoId: number,
    updateEstado: Estados,
  ): Promise<Estados> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { id_estado: EstadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }
    readEstado.estado = updateEstado.estado;
    readEstado.id_estado = updateEstado.id_estado;

    const updatedEstado= await this._estadoRepository.update(
      EstadoId,
      updateEstado,
    );
    return readEstado;
  }

  async remove(EstadoId: number): Promise<void> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { id_estado: EstadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }

    await this._estadoRepository.delete(EstadoId);
  }
}
