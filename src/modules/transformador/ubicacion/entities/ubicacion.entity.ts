import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_ubicacion')
export class Ubicacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_ubicacion: number;
  @Column({ type: 'varchar', nullable: false,unique: true})
  ubicacion: string;
}
