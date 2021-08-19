import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_localidades')
export class Localidad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  localidadId: number;
  @Column({ type: 'varchar',unique: true})
  localidad: string;
}
