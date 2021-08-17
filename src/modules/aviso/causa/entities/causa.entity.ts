import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_causas')
export class Causas extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  causaId: number;
  @Column({ type: 'varchar',unique: true})
  causa: string;
}
