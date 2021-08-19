import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {provinciaMunicipio} from './entities/provincia-municipio.entity';
import {provinciaMunicipioRepository } from './provincia-municipio.repository';

@Injectable()
export class provinciaMunicipioService {
  constructor(
    @InjectRepository(provinciaMunicipioRepository)
    private readonly _provinciaRepository: provinciaMunicipioRepository,
  ) {}
  async create(createprovinciaMunicipio: Partial<provinciaMunicipio>): Promise<provinciaMunicipio> {
    const savedprovinciaMunicipio: provinciaMunicipio = await this._provinciaRepository.save(
      createprovinciaMunicipio,
    );
    return savedprovinciaMunicipio;
  }

  async findAll(): Promise<provinciaMunicipio[]> {
    const readprovinciaMunicipio: provinciaMunicipio[] = await this._provinciaRepository.find();

    if (!readprovinciaMunicipio) {
      throw new NotFoundException('provinciaMunicipio no existen');
    }
    return readprovinciaMunicipio;
  }

  async findOne(provinciaId: number): Promise<provinciaMunicipio[]> {
    const readprovinciaMunicipio: provinciaMunicipio[]  = await this._provinciaRepository.find(
      {
        where: { provincia: provinciaId },
      },
    );

    if (!readprovinciaMunicipio) {
      throw new NotFoundException('Este ID de provinciaMunicipio no existe');
    }
    return readprovinciaMunicipio;
  }

  async update(
    provinciaMunicipioId: number,
    updateprovinciaMunicipio: provinciaMunicipio,
  ): Promise<provinciaMunicipio> {
    const readprovinciaMunicipio: provinciaMunicipio = await this._provinciaRepository.findOne(
      {
        where: { provinciaMunicipioId: provinciaMunicipioId },
      },
    );

    if (!readprovinciaMunicipio) {
      throw new NotFoundException('Este ID de provinciaMunicipio no existe');
    }
    readprovinciaMunicipio.provincia = updateprovinciaMunicipio.provincia;
    const updatedprovinciaMunicipio= await this._provinciaRepository.update(
      provinciaMunicipioId,
      updateprovinciaMunicipio,
    );
    return readprovinciaMunicipio;
  }

  async remove(provinciaMunicipioId: number): Promise<void> {
    const readprovinciaMunicipio: provinciaMunicipio = await this._provinciaRepository.findOne(
      {
        where: { provinciaMunicipioId: provinciaMunicipioId },
      },
    );

    if (!readprovinciaMunicipio) {
      throw new NotFoundException('Este ID de provinciaMunicipio no existe');
    }

    await this._provinciaRepository.delete(provinciaMunicipioId);
  }
}
