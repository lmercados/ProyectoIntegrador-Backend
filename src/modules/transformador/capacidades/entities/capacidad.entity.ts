import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_capacidades')
export class Capacidad extends BaseEntity {
  @Column({ type: 'int', nullable: false })
  id_fase: number;
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_capacidad: number;
  @Column({ type: 'float', nullable: false })
  capacidad: number;
}
