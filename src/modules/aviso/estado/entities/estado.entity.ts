import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_estados')
export class Estados extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  estadoId: number;
  @Column({ type: 'varchar',unique: true})
  estado: string;
}
