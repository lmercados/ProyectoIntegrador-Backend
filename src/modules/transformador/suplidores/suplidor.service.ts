import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Suplidor } from './entities/suplidor.entity';
import { SuplidorRepository } from './suplidor.repository';

@Injectable()
export class SuplidorService {
  constructor(
    @InjectRepository(SuplidorRepository)
    private readonly __suplidorRepository: SuplidorRepository,
  ) {}
  async create(createSuplidor: Partial<Suplidor>): Promise<Suplidor> {
    const savedSuplidor: Suplidor = await this.__suplidorRepository.save(
      createSuplidor,
    );
    return savedSuplidor;
  }

  async findAll(): Promise<Suplidor[]> {
    const readSuplidor: Suplidor[] = await this.__suplidorRepository.find();

    if (!readSuplidor) {
      throw new NotFoundException('Suplidor does not exist');
    }
    return readSuplidor;
  }

  async findOne(suplidorId: number): Promise<Suplidor> {
    const readSuplidor: Suplidor = await this.__suplidorRepository.findOne({
      where: { suplidorId: suplidorId },
    });

    if (!readSuplidor) {
      throw new NotFoundException('suplidor id does not exist');
    }
    return readSuplidor;
  }

  async update(
    suplidorId: number,
    updateSuplidor: Suplidor,
  ): Promise<Suplidor> {
    const readSuplidor: Suplidor = await this.__suplidorRepository.findOne({
      where: { suplidorId: suplidorId },
    });

    if (!readSuplidor) {
      throw new NotFoundException('No existe suplidor con este ID');
    }
    readSuplidor.suplidor = updateSuplidor.suplidor;
    readSuplidor.suplidorId = updateSuplidor.suplidorId;
    const updatedCapacidad = await this.__suplidorRepository.update(
      suplidorId,
      updateSuplidor,
    );
    return readSuplidor;
  }

  async remove(suplidorId: number): Promise<void> {
    const readSuplidor: Suplidor = await this.__suplidorRepository.findOne({
      where: { suplidorId: suplidorId },
    });

    if (!readSuplidor) {
      throw new NotFoundException('No existe suplidor con este ID');
    }

    await this.__suplidorRepository.delete(suplidorId);
  }
}
