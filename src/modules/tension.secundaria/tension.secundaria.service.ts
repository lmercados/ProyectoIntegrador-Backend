import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TensionSecundaria } from './entities/tension.secundaria.entity';
import { TensionSecundariaRepository } from './tension.secundaria.repository';

@Injectable()
export class TensionSecundariaService {
  constructor(
    @InjectRepository(TensionSecundariaRepository)
    private readonly __tensionRepository: TensionSecundariaRepository,
  ) {}
  async create(
    createTension: Partial<TensionSecundaria>,
  ): Promise<TensionSecundaria> {
    const savedTension: TensionSecundaria = await this.__tensionRepository.save(
      createTension,
    );
    return savedTension;
  }

  async findAll(): Promise<TensionSecundaria[]> {
    const readTension: TensionSecundaria[] = await this.__tensionRepository.find();

    if (!readTension) {
      throw new NotFoundException('Tensiones no existen');
    }
    return readTension;
  }

  async findOne(tensionId: number): Promise<TensionSecundaria> {
    const readTension: TensionSecundaria = await this.__tensionRepository.findOne(
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
    updateTension: TensionSecundaria,
  ): Promise<TensionSecundaria> {
    const readTension: TensionSecundaria = await this.__tensionRepository.findOne(
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
    const readTension: TensionSecundaria = await this.__tensionRepository.findOne(
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
