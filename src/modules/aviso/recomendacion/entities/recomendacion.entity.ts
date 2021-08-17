import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_recomendaciones')
export class Recomendacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  recomendacionId: number;
  @Column({ type: 'varchar',unique: true})
  recomendacion: string;
}
