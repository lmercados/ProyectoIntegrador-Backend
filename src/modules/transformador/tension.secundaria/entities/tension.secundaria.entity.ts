import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tension_secundaria')
export class TensionSecundaria extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_tension: number;
  @Column({ type: 'varchar', nullable: false })
  tension: string;
}
