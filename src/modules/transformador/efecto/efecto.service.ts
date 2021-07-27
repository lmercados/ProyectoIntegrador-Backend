import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Efecto} from './entities/efecto.entity';
import { EfectoRepository } from './efecto.repository';

@Injectable()
export class EfectoService {
  constructor(
    @InjectRepository(EfectoRepository)
    private readonly _efectoRepository: EfectoRepository,
  ) {}
  async create(createEfecto: Partial<Efecto>): Promise<Efecto> {
    const savedEfecto: Efecto = await this._efectoRepository.save(
      createEfecto,
    );
    return savedEfecto;
  }

  async findAll(): Promise<Efecto[]> {
    const readEfecto: Efecto[] = await this._efectoRepository.find();

    if (!readEfecto) {
      throw new NotFoundException('Efecto no existen');
    }
    return readEfecto;
  }

  async findOne(efectoId: number): Promise<Efecto> {
    const readEfecto: Efecto = await this._efectoRepository.findOne(
      {
        where: { id_efecto: efectoId },
      },
    );

    if (!readEfecto) {
      throw new NotFoundException('Este ID de Efecto no existe');
    }
    return readEfecto;
  }

  async update(
    efectoId: number,
    updateEfecto: Efecto,
  ): Promise<Efecto> {
    const readEfecto: Efecto = await this._efectoRepository.findOne(
      {
        where: { id_efecto: efectoId },
      },
    );

    if (!readEfecto) {
      throw new NotFoundException('Este ID de Efecto no existe');
    }
    readEfecto.efecto = updateEfecto.efecto;
    readEfecto.id_efecto = updateEfecto.id_efecto;

    const updatedEfecto= await this._efectoRepository.update(
      efectoId,
      updateEfecto,
    );
    return readEfecto;
  }

  async remove(efectoId: number): Promise<void> {
    const readEfecto: Efecto = await this._efectoRepository.findOne(
      {
        where: { id_efecto: efectoId },
      },
    );

    if (!readEfecto) {
      throw new NotFoundException('Este ID de Efecto no existe');
    }

    await this._efectoRepository.delete(efectoId);
  }
}
