import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Sector} from './entities/sector';
import {SectorRepository } from './sector.repository';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorRepository)
    private readonly _sectorRepository: SectorRepository,
  ) {}
  async create(createSector: Partial<Sector>): Promise<Sector> {
    const savedSector: Sector = await this._sectorRepository.save(
      createSector,
    );
    return savedSector;
  }

  async findAll(): Promise<Sector[]> {
    const readSector: Sector[] = await this._sectorRepository.find();

    if (!readSector) {
      throw new NotFoundException('Sector no existen');
    }
    return readSector;
  }

  async findOne(sectorId: number): Promise<Sector> {
    const readSector: Sector = await this._sectorRepository.findOne(
      {
        where: { sectorId: sectorId },
      },
    );

    if (!readSector) {
      throw new NotFoundException('Este ID de Sector no existe');
    }
    return readSector;
  }

  async update(
    sectorId: number,
    updateSector: Sector,
  ): Promise<Sector> {
    const readSector: Sector = await this._sectorRepository.findOne(
      {
        where: { sectorId: sectorId },
      },
    );

    if (!readSector) {
      throw new NotFoundException('Este ID de Sector no existe');
    }
    readSector.sector = updateSector.sector;
    const updatedSector= await this._sectorRepository.update(
      sectorId,
      updateSector,
    );
    return readSector;
  }

  async remove(sectorId: number): Promise<void> {
    const readSector: Sector = await this._sectorRepository.findOne(
      {
        where: { sectorId: sectorId },
      },
    );

    if (!readSector) {
      throw new NotFoundException('Este ID de Sector no existe');
    }

    await this._sectorRepository.delete(sectorId);
  }
}
