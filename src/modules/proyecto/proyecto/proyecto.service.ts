import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Proyecto } from './entities/proyecto.entity';
import { ProyectoRepository } from './proyecto.repository';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(ProyectoRepository)
    private readonly _proyectoRepository: ProyectoRepository,
  ) {}
  async create(createProyecto: Partial<Proyecto>): Promise<Proyecto> {
    const savedProyecto: Proyecto = await this._proyectoRepository.save(
      createProyecto,
    );
    return savedProyecto;
  }

  async findAll(): Promise<Proyecto[]> {
    const readProyecto: Proyecto[] = await this._proyectoRepository.find();

    if (!readProyecto) {
      throw new NotFoundException('Proyectos does not exist');
    }
    return readProyecto;
  }

  
  async findOne(codigo: string): Promise<Proyecto> {
    const readProyecto: Proyecto = await this._proyectoRepository.findOne({
      where: { codigo: codigo },
    });

    if (!readProyecto) {
      throw new NotFoundException('Proyecto does not exist');
    }
    return readProyecto;
  }

  async update(
    proyectoId: number,
    updateProyecto: Proyecto,
  ): Promise<Proyecto> {
    const readProyecto: Proyecto = await this._proyectoRepository.findOne({
      where: { proyectoId: proyectoId },
    });

    if (!readProyecto) {
      throw new NotFoundException('Proyecto does not exist');
    }

    readProyecto.descripcion = updateProyecto.descripcion;
    const updatedProyecto = await this._proyectoRepository.update(
      proyectoId,
      readProyecto,
    );
    return readProyecto;
  }

  async remove(proyectoId: number): Promise<void> {
    const readProyecto: Proyecto = await this._proyectoRepository.findOne({
      where: { proyectoId: proyectoId },
    });

    if (!readProyecto) {
      throw new NotFoundException('Proyecto does not exist');
    }

    await this._proyectoRepository.delete(proyectoId);
  }
}
