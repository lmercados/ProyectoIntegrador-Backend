import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_sectores')
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  sectorId: number;
  @Column({ type: 'varchar',unique: true})
  sector: string;
}
