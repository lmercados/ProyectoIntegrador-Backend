import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_viviendas')
export class Vivienda extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  viviendaId: number;
  @Column({ type: 'varchar',unique: true})
  vivienda: string;
}
