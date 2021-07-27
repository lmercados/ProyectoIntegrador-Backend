import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tension_primaria')
export class TensionPrimaria extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_tension: number;
  @Column({ type: 'varchar', nullable: false })
  tension: string;
}
