import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_capacidades')
export class Capacidad extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  capacidadId: number;
  @Column({ type: 'float', unique: true })
  capacidad: number;
}
