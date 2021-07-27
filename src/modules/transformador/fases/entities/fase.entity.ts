import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_fases')
export class Fase extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_fase: number;
  @Column({ type: 'varchar' })
  fase: string;
}
