import { BaseEntity, Column, Entity, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('aviso_apartarrayos')
export class Apartarrayos extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  apartarrayosId: number;
  @Column({ type: 'varchar',unique: true})
  apartarrayos: string;
}
