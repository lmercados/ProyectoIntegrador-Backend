import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tension_primaria')
export class TensionPrimaria extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  tensionPrimariaId: number;
  @Column({ type: 'varchar', unique: true })
  tension: string;
}
