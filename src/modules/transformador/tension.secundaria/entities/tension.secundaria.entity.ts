import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tension_secundaria')
export class TensionSecundaria extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  tensionSecundariaId: number;
  @Column({ type: 'varchar', unique: true })
  tension: string;
}
