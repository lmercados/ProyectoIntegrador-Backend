import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_provincias')
export class Provincia extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  provinciaId: number;
  @Column({ type: 'varchar',unique: true})
  provincia: string;
}
