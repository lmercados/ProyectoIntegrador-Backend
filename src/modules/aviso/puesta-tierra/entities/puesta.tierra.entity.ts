import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_puesta_tierra')
export class puestaTierra extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  puestaTierraId: number;
  @Column({ type: 'varchar',unique: true})
  puestaTierra: string;
}
