import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TensionPrimaria } from './entities/tension.primaria.entity';
import { TensionPrimariaRepository } from './tension.primaria..repository';

@Injectable()
export class TensionPrimariaService {
  constructor(
    @InjectRepository(TensionPrimariaRepository)
    private readonly __tensionRepository: TensionPrimariaRepository,
  ) {}
  async create(
    createTension: Partial<TensionPrimaria>,
  ): Promise<TensionPrimaria> {
    const savedTension: TensionPrimaria = await this.__tensionRepository.save(
      createTension,
    );
    return savedTension;
  }

  async findAll(): Promise<TensionPrimaria[]> {
    const readTension: TensionPrimaria[] = await this.__tensionRepository.find();

    if (!readTension) {
      throw new NotFoundException('Tensiones no existen');
    }
    return readTension;
  }

  async findOne(tensionId: number): Promise<TensionPrimaria> {
    const readTension: TensionPrimaria = await this.__tensionRepository.findOne(
      {
        where: { id_tension: tensionId },
      },
    );

    if (!readTension) {
      throw new NotFoundException('Este ID  de tension no existe');
    }
    return readTension;
  }

  async update(
    tensionId: number,
    updateTension: TensionPrimaria,
  ): Promise<TensionPrimaria> {
    const readTension: TensionPrimaria = await this.__tensionRepository.findOne(
      {
        where: { id_tension: tensionId },
      },
    );

    if (!readTension) {
      throw new NotFoundException('No existe suplidor con este ID');
    }
    readTension.tension = updateTension.tension;
    readTension.id_tension = tensionId;
    const updatedTension = await this.__tensionRepository.update(
      tensionId,
      readTension,
    );
    return readTension;
  }

  async remove(tensionId: number): Promise<void> {
    const readTension: TensionPrimaria = await this.__tensionRepository.findOne(
      {
        where: { id_tension: tensionId },
      },
    );

    if (!readTension) {
      throw new NotFoundException('No existe tension con este ID');
    }

    await this.__tensionRepository.delete(tensionId);
  }
}
