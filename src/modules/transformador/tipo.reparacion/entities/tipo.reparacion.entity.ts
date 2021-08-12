import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tipo_reparacion')
export class tipoReparacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  tipoReparacionId: number;
  @Column({ type: 'varchar',unique: true})
  reparacion: string;
}
