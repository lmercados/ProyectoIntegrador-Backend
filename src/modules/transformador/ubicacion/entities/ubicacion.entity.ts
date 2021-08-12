import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_ubicacion')
export class Ubicacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  ubicacionId: number;
  @Column({ type: 'varchar',unique: true})
  ubicacion: string;
}
