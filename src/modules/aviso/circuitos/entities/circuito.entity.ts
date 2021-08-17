import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_circuitos')
export class Circuito extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  circuitoId: number;
  @Column({ type: 'varchar',unique: true})
  circuito: string;
}
