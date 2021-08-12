import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Resultado } from './entities/resultado.evaluacion.entity';
import { ResultadoRepository } from './resultado.evaluacion.repository';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(ResultadoRepository)
    private readonly __resultadoRepository: ResultadoRepository,
  ) {}
  async create(createResultado: Partial<Resultado>): Promise<Resultado> {
    const savedResultado: Resultado = await this.__resultadoRepository.save(
      createResultado,
    );
    return savedResultado;
  }

  async findAll(): Promise<Resultado[]> {
    const readResultado: Resultado[] = await this.__resultadoRepository.find();

    if (!readResultado) {
      throw new NotFoundException('Resultados does not exist');
    }
    return readResultado;
  }

  async findResultado(resultadoId: number): Promise<Resultado[]> {
    const readResultado: Resultado[] = await this.__resultadoRepository.find({
      where: { resultadoEvaluacionId: resultadoId },
    });

    if (!readResultado) {
      throw new NotFoundException('resultado id does not exist');
    }
    return readResultado;
  }
  async findOne(resultadoId: number): Promise<Resultado> {
    const readResultado: Resultado = await this.__resultadoRepository.findOne({
      where: { resultadoEvaluacionId: resultadoId },
    });

    if (!readResultado) {
      throw new NotFoundException('resultado does not exist');
    }
    return readResultado;
  }

  async update(
    resultadoId: number,
    updateResultado: Resultado,
  ): Promise<Resultado> {
    const readResultado: Resultado = await this.__resultadoRepository.findOne({
      where: { resultadoEvaluacionId: resultadoId },
    });

    if (!readResultado) {
      throw new NotFoundException('resultado does not exist');
    }
    readResultado.resultadoEvaluacionId = updateResultado.resultadoEvaluacionId;
    readResultado.resultado = updateResultado.resultado;
    const updatedResultado = await this.__resultadoRepository.update(
      resultadoId,
      readResultado,
    );
    return readResultado;
  }

  async remove(resultadoId: number): Promise<void> {
    const readResultado: Resultado = await this.__resultadoRepository.findOne({
      where: { resultadoEvaluacionId: resultadoId },
    });

    if (!readResultado) {
      throw new NotFoundException('resultado does not exist');
    }

    await this.__resultadoRepository.delete(resultadoId);
  }
}
