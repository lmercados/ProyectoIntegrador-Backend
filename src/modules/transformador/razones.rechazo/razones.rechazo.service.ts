import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { RazonesRechazo } from './entities/razones.rechazo.entity';
import { RazonesRechazoRepository } from './razones.rechazo.repository';

@Injectable()
export class RazonesRechazoService {
  constructor(
    @InjectRepository(RazonesRechazoRepository)
    private readonly __razonesRechazoRepository: RazonesRechazoRepository,
  ) {}
  async create(
    createRazonesRechazo: Partial<RazonesRechazo>,
  ): Promise<RazonesRechazo> {
    const savedRazonesRechazo: RazonesRechazo = await this.__razonesRechazoRepository.save(
      createRazonesRechazo,
    );
    return savedRazonesRechazo;
  }

  async findAll(): Promise<RazonesRechazo[]> {
    const readRazonesRechazo: RazonesRechazo[] = await this.__razonesRechazoRepository.find();

    if (!readRazonesRechazo) {
      throw new NotFoundException('RazonesRechazos does not exist');
    }
    return readRazonesRechazo;
  }

  async findRazonesRechazo(
    razonRechazoId: number,
  ): Promise<RazonesRechazo[]> {
    const readRazonesRechazo: RazonesRechazo[] = await this.__razonesRechazoRepository.find(
      {
        where: { razonRechazoId: razonRechazoId },
      },
    );

    if (!readRazonesRechazo) {
      throw new NotFoundException('razonesRechazo id does not exist');
    }
    return readRazonesRechazo;
  }
  async findOne(razonRechazoId: number): Promise<RazonesRechazo> {
    const readRazonesRechazo: RazonesRechazo = await this.__razonesRechazoRepository.findOne(
      {
        where: { razonRechazoId: razonRechazoId },
      },
    );

    if (!readRazonesRechazo) {
      throw new NotFoundException('razonesRechazo does not exist');
    }
    return readRazonesRechazo;
  }

  async update(
    razonRechazoId: number,
    updateRazonesRechazo: RazonesRechazo,
  ): Promise<RazonesRechazo> {
    const readRazonesRechazo: RazonesRechazo = await this.__razonesRechazoRepository.findOne(
      {
        where: { razonRechazoId: razonRechazoId },
      },
    );

    if (!readRazonesRechazo) {
      throw new NotFoundException('razonesRechazo does not exist');
    }
    readRazonesRechazo.razonRechazoId = updateRazonesRechazo.razonRechazoId;
    readRazonesRechazo.razones = updateRazonesRechazo.razones;
    const updatedRazonesRechazo = await this.__razonesRechazoRepository.update(
      razonRechazoId,
      readRazonesRechazo,
    );
    return readRazonesRechazo;
  }

  async remove(razonRechazoId: number): Promise<void> {
    const readRazonesRechazo: RazonesRechazo = await this.__razonesRechazoRepository.findOne(
      {
        where: { razonRechazoId: razonRechazoId },
      },
    );

    if (!readRazonesRechazo) {
      throw new NotFoundException('razonesRechazo does not exist');
    }

    await this.__razonesRechazoRepository.delete(razonRechazoId);
  }
}
