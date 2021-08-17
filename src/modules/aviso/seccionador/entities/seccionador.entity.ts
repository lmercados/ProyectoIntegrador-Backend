import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_seccionador')
export class Seccionador extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  seccionadorId: number;
  @Column({ type: 'varchar',unique: true})
  seccionador: string;
}
