import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fabricante } from './entities/fabricante.entity';
import { FabricanteRepository } from './fabricante.repository';

@Injectable()
export class FabricanteService {
  constructor(
    @InjectRepository(FabricanteRepository)
    private readonly __fabricanteRepository: FabricanteRepository,
  ) {}
  async create(createFabricante: Partial<Fabricante>): Promise<Fabricante> {
    const savedFabricante: Fabricante = await this.__fabricanteRepository.save(
      createFabricante,
    );
    return savedFabricante;
  }

  async findAll(): Promise<Fabricante[]> {
    const readFabricante: Fabricante[] = await this.__fabricanteRepository.find();

    if (!readFabricante) {
      throw new NotFoundException('Fabricantes no existen');
    }
    return readFabricante;
  }

  async findOne(fabricanteId: number): Promise<Fabricante> {
    const readFabricante: Fabricante = await this.__fabricanteRepository.findOne(
      {
        where: { fabricanteId: fabricanteId },
      },
    );

    if (!readFabricante) {
      throw new NotFoundException('Este ID  de fabricante no existe');
    }
    return readFabricante;
  }

  async update(
    fabricanteId: number,
    updateFabricante: Fabricante,
  ): Promise<Fabricante> {
    const readFabricante: Fabricante = await this.__fabricanteRepository.findOne(
      {
        where: { fabricanteId: fabricanteId },
      },
    );

    if (!readFabricante) {
      throw new NotFoundException('No existe suplidor con este ID');
    }
    readFabricante.fabricante = updateFabricante.fabricante;
    readFabricante.fabricanteId = fabricanteId;
    const updatedFabricante = await this.__fabricanteRepository.update(
      fabricanteId,
      updateFabricante,
    );
    return readFabricante;
  }

  async remove(fabricanteId: number): Promise<void> {
    const readFabricante: Fabricante = await this.__fabricanteRepository.findOne(
      {
        where: { fabricanteId: fabricanteId },
      },
    );

    if (!readFabricante) {
      throw new NotFoundException('No existe fabricante con este ID');
    }

    await this.__fabricanteRepository.delete(fabricanteId);
  }
}
