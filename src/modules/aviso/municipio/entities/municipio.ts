import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_municipios')
export class Municipio extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  municipioId: number;
  @Column({ type: 'varchar',unique: true})
  municipio: string;
}
