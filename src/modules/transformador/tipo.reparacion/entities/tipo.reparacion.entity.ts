import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_tipo_reparacion')
export class tipoReparacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_tipo_reparacion: number;
  @Column({ type: 'varchar', nullable: false,unique: true})
  reparacion: string;
}
