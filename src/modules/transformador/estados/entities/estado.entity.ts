import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_estados')
export class Estados extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  estadoId: number;
  @Column({ type: 'varchar',unique: true})
  estado: string;
}
