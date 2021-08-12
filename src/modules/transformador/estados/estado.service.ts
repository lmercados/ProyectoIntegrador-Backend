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

  async findOne(estadoId: number): Promise<Estados> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }
    return readEstado;
  }

  async update(
    estadoId: number,
    updateEstado: Estados,
  ): Promise<Estados> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }
    readEstado.estado = updateEstado.estado;
    readEstado.estadoId = updateEstado.estadoId;

    const updatedEstado= await this._estadoRepository.update(
      estadoId,
      updateEstado,
    );
    return readEstado;
  }

  async remove(estadoId: number): Promise<void> {
    const readEstado: Estados = await this._estadoRepository.findOne(
      {
        where: { estadoId: estadoId },
      },
    );

    if (!readEstado) {
      throw new NotFoundException('Este ID de Estado no existe');
    }

    await this._estadoRepository.delete(estadoId);
  }
}
